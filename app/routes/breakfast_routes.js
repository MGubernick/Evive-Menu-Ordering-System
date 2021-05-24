const express = require('express')

// create a router so our code is more modular
const router = express.Router()

// require item model
const Breakfast = require('./../models/breakfast.js')

// require the handle404 middleware, to handle not finding documents
const handle404 = require('./../../lib/custom_errors')

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')

// CREATE A Breakfast
// POST /items

router.post('/breakfast', removeBlanks, (req, res, next) => {
  // extract the meal from the incoming request's data (req.body)
  const breakfastData = req.body.order

  // create a breakfast using the data
  Breakfast.create(breakfastData)
    .then(breakfast => {
      // res.status(201).json({ order: breakfast })
      res.status(200).send(JSON.stringify(`${breakfast.main}, ${breakfast.side}, ${breakfast.drink}`))
      // res.status(201).json({ menu: breakfast.menu, main: breakfast.main, side: breakfast.side, drink: breakfast.drink ? breakfast.drink : 'water' })
    })
    .catch(next)
})

// SHOW
// GET /breakfast/:id

router.get('/breakfast', (req, res, next) => {
  // get the ids
  const order = req.params.id
  // find the one recipe based on the id & owner (should only find recipes by this user)
  Breakfast.findOne({ order: order })
    // handle any 404 errors
    .then(handle404)

    .then(breakfast => {
      // res.status(200).json({ order: breakfast })
      // res.status(200).json({ main: breakfast.main, side: breakfast.side, drink: breakfast.drink ? breakfast.drink : 'water' })
      res.status(200).send(JSON.stringify(`${breakfast.main}, ${breakfast.side}, ${breakfast.drink}`))
    })
    .catch(next)
})

module.exports = router
