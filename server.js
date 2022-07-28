const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const { Manga, Author } = require('./models')
const { mangaController } = require('./controllers')
const { reviewController } = require('./controllers')

const app = express()
app.use(express.static(`${__dirname}/client/build`))

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

// server.js
app.get('/mangas', mangaController.getAllMangas)

app.get('/mangas/:id', mangaController.getMangaById)

//////////////////////
app.get('/authors', async (req, res) => {
  const authors = await Author.find({})
  res.json(authors)
})

/////////////////////////
app.get('/reviews', reviewController.getAllReviews)
// app.get('/reviews/:id', reviewController.getReviewById)
app.post('/reviews', reviewController.createReview)
app.delete('/reviews/:id', reviewController.deleteReview)
app.put('/reviews/:id', reviewController.updateReview)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
