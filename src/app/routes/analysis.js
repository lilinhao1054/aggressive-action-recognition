const express = require('express')
const { PrismaClient } = require('@prisma/client');
const { RespData, RespError } = require('../common/resp');
const { dateString2Date, dateString2NextDate, getTodayBeginning, getPrevXDay } = require('../../utils/dateParser');
const logger = require('../../logger');

const router = express.Router();
const prisma = new PrismaClient()

/* 
当天检测到攻击性行为数量
设备数量
高危地区数量（如近7天检测到攻击性次数 > 500） 
检测到攻击性行为数量折线图（设备1，2，3，近3天，近7天）
某天按设备划分的攻击性次数饼图（指明高危, 该天次数 > 100）
针对某设备查看攻击性日志
*/
const padCardData = (todayCount, yesterdayCount) => {
  todayCount = Number.parseInt(todayCount.toString());
  yesterdayCount = Number.parseInt(yesterdayCount.toString());
  const changeVal = todayCount - yesterdayCount;
  let changePercentage;
  if (yesterdayCount === 0) changePercentage = null;
  else changePercentage = (((todayCount - yesterdayCount) / yesterdayCount) * 100).toFixed(2)
  return { number: todayCount, changeVal, changePercentage };
}

router.get('/aggressive-num', async (req, res) => {
  try {
    const totalCount = await prisma.log.count();
    const yesterdayCount = await prisma.log.count({
      where: {
        time: {
          lt: getTodayBeginning()
        }
      }
    });
    RespData(res, padCardData(totalCount, yesterdayCount));
  } catch (e) {
    logger.error('get aggressive number fail', { msg: e.message });
    RespError(res);
  }
})

router.get('/device-num', async (req, res) => {
  try {
    const totalCount = await prisma.device.count();
    const yesterdayCount = await prisma.device.count({
      where: {
        createTime: {
          lt: getTodayBeginning()
        }
      }
    })
    RespData(res, padCardData(
      totalCount,
      yesterdayCount)
    );
  } catch (e) {
    logger.error('get device number fail', { msg: e.message });
    RespError(res);
  }
})

router.get('/dangerous-regions', async (req, res) => {
  try {
    const genDQL = (type) => {
      const dql = `
        select addr, count(*) as number
          from device
            left join log
            on device.id = log.deviceId
            ${(() => {
          let sql = '';
          if (type === 2) {
            sql = `where log.time < ${getTodayBeginning().unix() * 1000}`
          }
          return sql;
        })()}
            group by addr
            having number > 25
      `
      return type === 1 ? dql : `select count(*) as count from (${dql})`;
    }
    let total = await prisma.$queryRawUnsafe(genDQL(1));
    let yesterdayCount = await prisma.$queryRawUnsafe(genDQL(2));
    yesterdayCount = yesterdayCount[0].count;
    RespData(res, { tableData: total, cardData: padCardData(total.length, yesterdayCount) });
  } catch (e) {
    logger.error('get dangerous regions fail', { msg: e.message });
    RespError(res);
  }
})

router.get('/:prevDayNum/line.json', async (req, res) => {
  const { prevDayNum } = req.params;
  try {
    const data = await prisma.$queryRaw`select name as device, strftime('%m.%d', log.time/1000, 'unixepoch') as date, count(*) as value
    from device left join log on device.id = log.deviceId 
    where log.time >= ${getPrevXDay(prevDayNum).unix() * 1000} 
    group by date(log.time/1000, 'unixepoch'), name`

    RespData(res, data);
  } catch (e) {
    logger.error('get line data fail', { ...req.params, msg: e.message })
    RespError(res);
  }
})

router.get('/:date/pie.json', async (req, res) => {
  const { date } = req.params;
  try {
    const data = await prisma.$queryRaw`select name as device, count(*) as value 
    from device left join log on device.id = log.deviceId 
    where log.time >= ${dateString2Date(date).unix() * 1000} and log.time < ${dateString2NextDate(date).unix() * 1000}
    group by name`
    RespData(res, data);
  } catch (e) {
    logger.error('get pie data fail', { ...req.params, msg: e.message });
    RespError(res);
  }
})

router.get('/logs', async (req, res) => {
  try {
    const { pageSize, page, name, date, addr, level } = req.query;
    const queryCondition = {};
    if (name !== undefined) {
      if (!queryCondition.device) queryCondition.device = {};
      queryCondition.device.name = {
        in: name
      };
    }
    if (addr !== undefined) {
      if (!queryCondition.device) queryCondition.device = {};
      queryCondition.device.addr = {
        in: addr
      };
    }
    if (level !== undefined) {
      queryCondition.level = {
        in: level.map(Number)
      };
    }
    if (date !== undefined) {
      queryCondition.time = {
        gte: dateString2Date(date),
        lt: dateString2NextDate(date)
      }
    }
    let records = await prisma.log.findMany({
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      where: queryCondition,
      include: {
        device: {
          select: {
            name: true,
            addr: true
          }
        }
      }
    });
    records = records.map(record => ({ ...record, ...record.device }))
    const total = await prisma.log.count({ where: queryCondition })
    RespData(res, { records, total })
  } catch (e) {
    logger.error('page query logs fail', { ...req.query, msg: e.message });
    RespError(res);
  }
})

router.get('/logs/filters', async (req, res) => {
  try {
    let filters = await prisma.device.findMany({
      select: {
        name: true,
        addr: true
      },
    });
    filters = filters.reduce((prev, cur) => ({ name: [...prev.name, cur.name], addr: [...prev.addr, cur.addr] }), { name: [], addr: [] });
    RespData(res, filters);
  } catch (e) {
    logger.error('get log table filters', { msg: e.message });
    RespError(res);
  }
})

module.exports = router;