import mongoose from 'mongoose'

module.exports = mongoose.model('Item', new mongoose.Schema({
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
}))
