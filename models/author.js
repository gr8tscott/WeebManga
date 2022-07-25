const { Schema } = require('mongoose')

const authorSchema = new Schema(
  {
    name: { type: String, required: true },
    works_created: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = authorSchema
