import { createServer } from 'node:http'
import express from 'express'
import { Server } from 'socket.io'

const PORT = process.env.PORT || 3000
const PATH_ROOT_PROJECT = process.cwd()

const APP = express()
const SERVER = createServer(APP)
const IO = new Server(SERVER)

IO.on('connection', (socket) => {
  console.log('A user has connected!')

  socket.on('disconnect', () => {
    console.log('An user has disconnected!')
  })

  socket.on('chat-message', (data) => {
    IO.emit('chat-message', data)
  })
})

APP.get('/', (req, res) => {
  res.sendFile(PATH_ROOT_PROJECT + '/client/index.html')
})

SERVER.listen(PORT, () => {
  console.log(`Server runing on port localhost:${PORT}`)
})
