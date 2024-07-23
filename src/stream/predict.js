const axios = require("axios");
const dayjs = require('dayjs')
const fs = require('node:fs')
const FormData = require('form-data');
const { PrismaClient } = require('@prisma/client');
const logger = require("../logger");

const prisma = new PrismaClient();

const warnArr = [];

async function predictWrapper(path, socket, id) {
  warnArr[id] || (warnArr[id] = 0);
  try {
    const time = dayjs().format('HH:mm:ss');
    const t1 = Date.now();
    const { pred, move } = await predict(path);
    const t2 = Date.now();
    logger.info(`predict consume ${t2 - t1} ms`)
    socket.emit(`pred${id}`, { pred, time, move });

    pred === 3 ? (warnArr[id]++) : (warnArr[id] = 0);
    if (warnArr[id] === 3) {
      warnArr[id] = 0;
      socket.emit('warn', { id });
    }
    
    if (pred !== 0)
      await prisma.log.create({
        data: {
          time: dayjs(),
          level: pred,
          deviceId: id,
          feature: '0010100111101010100011011'
        }
      })
  } catch (e) {
    logger.error('predict server fail', { msg: e.message });
  }
}

async function predict(path) {
  const fd = new FormData()

  fd.append("file", fs.createReadStream(path))
  return axios
    .post(`http://${process.env.MODEL_SERVER_HOST}/predict`, fd, {
      Headers: {
        ...fd.getHeaders()
      }
    })
    .then((res) => res.data)
}

module.exports = predictWrapper