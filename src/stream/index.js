const processFrames = require('./handler');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const handleConnection = async (socket, ids) => {
  const devices = await prisma.device.findMany({ where: { id: { in: ids } } });
  devices.forEach((device) => processFrames(socket, device));
}

module.exports = handleConnection
