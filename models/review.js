const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    manga: { type: String, required: true },
    text: { type: String, required: true },
    review: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = reviewSchema
