const mongoose = require('mongoose')
const authorSchema = require('./Author')
const mangaSchema = require('./Manga')
const reviewSchema = require('./Review')

const Author = mongoose.model('Author', authorSchema)
const Manga = mongoose.model('Manga', mangaSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  Author,
  Manga,
  Review
}
