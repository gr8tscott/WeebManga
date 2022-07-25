const { Manga } = require('../models')

const getAllMangas = async (req, res) => {
  const mangas = await Manga.find({})
  res.json(mangas)
}

const getChapters = async (req, res) => {
  const { id } = req.params
  const chap = await Manga.find({ _id: id })
  res.json(chap)
}

module.exports = {
  getAllMangas,
  getChapters
}
