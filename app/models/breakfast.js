const mongoose = require('mongoose')

const breakfastSchema = new mongoose.Schema({
  menu: {
    type: String,
    default: 'Breakfast'
  },
  order: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Breakfast = mongoose.model('Breakfast', breakfastSchema)

module.exports = Breakfast
