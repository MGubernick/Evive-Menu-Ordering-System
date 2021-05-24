const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  meal: {
    type: String,
    required: true
  },
  main: {
    type: String,
    required: true
  },
  side: {
    type: String,
    required: true
  },
  drink: {
    type: String,
    required: true
  },
  dessert: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
