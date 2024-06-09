const express = require('express')
const { PrismaClient } = require('@prisma/client');
const { RespData, RespError, RespSuccess } = require('../common/resp');
const logger = require('../../logger');

const router = express.Router();
const prisma = new PrismaClient()

router.get('', async (req, res) => {
  try {
    const { pageSize, page, name, enable, addr } = req.query;
    const queryCondition = {};
    if (name !== undefined) {
      queryCondition.name = {
        contains: name
      }
    }
    if (enable !== undefined) {
      queryCondition.enable = enable === 'true'
    }
    if (addr !== undefined) {
      queryCondition.addr = {
        contains: addr
      }
    }
    if (page === undefined && pageSize === undefined) {
      const result = await prisma.device.findMany({
        where: queryCondition
      });
      RespData(res, result);
    } else {
      const records = await prisma.device.findMany({
        skip: (+page - 1) * +pageSize,
        take: +pageSize,
        where: queryCondition,
      });
      const total = await prisma.device.count({ where: queryCondition })
      RespData(res, { records, total })
    }
  } catch (e) {
    logger.error('page query device fail', { ...req.query, msg: e.message });
    RespError(res);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const device = await prisma.device.findUniqueOrThrow({
      where: {
        id: +id
      }
    })
    RespData(res, device)
  } catch (e) {
    logger.error('get device by id fail', { ...req.params, msg: e.message });
    RespError(res);
  }
})

router.post('', async (req, res) => {
  try {
    const device = req.body;
    await prisma.device.create({
      data: device
    })
    RespSuccess();
  } catch (e) {
    logger.error('create device fail', { ...req.body, msg: e.message });
    RespError(res);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.device.delete({
      where: {
        id: +id
      }
    })
    RespSuccess(res);
  } catch (e) {
    logger.error('delete device fail', { ...req.params, msg: e.message });
    RespError(res);
  }
})

router.put(`/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const device = req.body;
    await prisma.device.update({
      where: {
        id: +id
      },
      data: device
    })
    RespSuccess(res);
  } catch (e) {
    logger.error('update query device fail, id: %s', { ...req.params, ...req.body, msg: e.message });
    RespError(res);
  }
})

module.exports = router;