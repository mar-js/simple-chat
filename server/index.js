import express from 'express'

const PORT = process.env.PORT || 3000
const PATH_ROOT_PROJECT = process.cwd()

const APP = express()

APP.get('/', (req, res) => {
  res.sendFile(PATH_ROOT_PROJECT + '/client/index.html')
})

APP.listen(PORT, () => {
  console.log(`Server runing on port localhost:${PORT}`)
})
