const mongoose = require('mongoose')

const lunchSchema = new mongoose.Schema({
  menu: {
    type: String,
    default: 'Lunch'
  },
  order: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Lunch = mongoose.model('Lunch', lunchSchema)

module.exports = Lunch
