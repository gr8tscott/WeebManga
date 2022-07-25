const mongoose = require('mongoose')
const authorSchema = require('./Author')
const mangaSchema = require('./Manga')

const Author = mongoose.model('Author', authorSchema)
const Manga = mongoose.model('Manga', mangaSchema)

module.exports = {
  Author,
  Manga
}
