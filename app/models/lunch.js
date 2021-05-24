const mongoose = require('mongoose')

const lunchSchema = new mongoose.Schema({
  meal: {
    type: String,
    default: 'Lunch',
    required: true
  },
  1: {
    type: String,
    default: 'Salad',
    required: true
  },
  2: {
    type: String,
    default: 'Chips',
    required: true
  },
  3: {
    type: String,
    default: 'Soda',
    required: false
  }
}, {
  timestamps: true
})

const Lunch = mongoose.model('Lunch', lunchSchema)

module.exports = Lunch
