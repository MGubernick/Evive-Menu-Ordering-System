const mongoose = require('mongoose')

const breakfastSchema = new mongoose.Schema({
  menu: {
    type: String,
    default: 'Breakfast'
  },
  main: {
    type: mongoose.Mixed,
    default: 'Eggs',
    required: true
  },
  side: {
    type: String,
    default: 'Toast',
    required: true
  },
  drink: {
    type: String,
    default: 'Coffee',
    required: true
  }
}, {
  timestamps: true
})

const Breakfast = mongoose.model('Breakfast', breakfastSchema)

module.exports = Breakfast
