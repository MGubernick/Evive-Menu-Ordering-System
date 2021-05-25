const mongoose = require('mongoose')

const dinnerSchema = new mongoose.Schema({
  menu: {
    type: String,
    default: 'Dinner'
  },
  order: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Dinner = mongoose.model('Dinner', dinnerSchema)

module.exports = Dinner
