const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const { Manga } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

// server.js
app.get('/mangas', async (req, res) => {
  const mangas = await Manga.find({})
  res.json(mangas)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
