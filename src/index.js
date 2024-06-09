const { createServer } = require('node:http')
const { Server } = require('socket.io')
const app = require('./app/app')
const handleConnection = require('./stream');
const logger = require('./logger');
require('dotenv').config();

const server = createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

io.on('connection', async (socket) => {
  logger.info('websocket connected');
  socket.on('init', (ids) => {
    handleConnection(socket, ids);
  })
})

server.listen(3000, () =>
  logger.info('Server ready at: http://localhost:3000')
)
