import express from 'express'

const PORT = process.env.PORT || 3000

const APP = express()

APP.get('/', (req, res) => {
  res.send('<h1>Hello Word</h1>')
})

APP.list(PORT, () => {
  console.log(`Server runing on port localhost:${PORT}`)
})
