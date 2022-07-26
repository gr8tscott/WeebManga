const { Manga } = require('../models')

const getAllMangas = async (req, res) => {
  const mangas = await Manga.find({})
  res.json(mangas)
}

// const getChapters = async (req, res) => {
//   const { id } = req.params
//   const chap = await Manga.find({ _id: id })
//   res.json(chap)
// }

const getMangaById = async (req, res) => {
  const { id } = req.params
  const manga = await Manga.findById(id)
  res.json(manga)
}

module.exports = {
  getAllMangas,
  // getChapters,
  getMangaById
}
