const mongoose = require('mongoose')

const dinnerSchema = new mongoose.Schema({
  meal: {
    type: String,
    default: 'Dinner',
    required: true
  },
  1: {
    type: String,
    default: 'Steak',
    required: true
  },
  2: {
    type: String,
    default: 'Potatoes',
    required: true
  },
  3: {
    type: String,
    default: 'Wine',
    required: true
  },
  4: {
    type: String,
    default: 'Cake',
    required: true
  }
}, {
  timestamps: true
})

const Dinner = mongoose.model('Dinner', dinnerSchema)

module.exports = Dinner
