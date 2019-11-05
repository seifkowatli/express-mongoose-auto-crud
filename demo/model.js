const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('item', itemSchema)
