const { Schema } = require('mongoose')

const mangaSchema = new Schema(
  {
    title: { type: String, required: true },
    title_img: { type: String, required: true },
    description: { type: String, required: true },
    chapters: { type: Object, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Author' }
  },
  { timestamps: true }
)

module.exports = mangaSchema
