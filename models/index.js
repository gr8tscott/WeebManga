const mongoose = require('mongoose')
const authorSchema = require('./author')
const mangaSchema = require('./manga')
const reviewSchema = require('./review')

const Author = mongoose.model('Author', authorSchema)
const Manga = mongoose.model('Manga', mangaSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  Author,
  Manga,
  Review
}
