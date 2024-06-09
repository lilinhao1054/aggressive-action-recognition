const schedule = require("node-schedule");
const { PrismaClient } = require('@prisma/client');
const { getPrevXDay } = require("../../utils/dateParser");
const logger = require("../../logger");

const prisma = new PrismaClient()

schedule.scheduleJob("0 0 9 * * ?", async () => {
  logger.info("running a task every day 9 o'clock");
  try {
    await prisma.log.deleteMany({
      where: {
        time: {
          lt: getPrevXDay(6)
        }
      }
    })
    logger.info('delete expired log successfully')
  } catch (e) {
    logger.error('delete expired log fail', { msg: e.message });
  }
});