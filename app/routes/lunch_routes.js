const express = require('express')

// create a router so our code is more modular
const router = express.Router()

// require item model
const Lunch = require('./../models/lunch.js')

// POST A Lunch
// POST /lunch

router.post('/lunch', (req, res, next) => {
  // extract the meal from the incoming request's data (req.body)
  const lunchData = req.body
  // take the value from lunchData and turn it to a string
  let stringData = lunchData.lunch.toString()

  const shrink = stringData.replace(/,/g, '')
  const split = shrink.split('')
  let newStringData = split.sort().join(',')
  // Always append 'Water' for Dinner after the Drink
  console.log('newStringData', newStringData)

  // check to see if the order included 'Soda' (3) -> if not, append 'Water'
  if (!newStringData.includes(3)) {
    newStringData += ',Water'
  }
  // check order to make sure it is valid within parameters that the system allows
  // order must include a main and a side but not multiple mains (sandwich)

  if (!newStringData.includes(1) && !newStringData.includes(2)) {
    res.status(400).send('Unable to process: main is missing, side is missing')
  }

  if (!newStringData.includes(1)) {
    res.status(400).send('Unable to process: main is missing')
  } else if (newStringData.includes(1, 1)) {
    res.status(400).send('Unable to process: cannot order more than one Sandwich')
  }

  if (!newStringData.includes(2)) {
    res.status(400).send('Unable to process: side is missing')
  }

  // take the numbers indicated in the order and replace them with the item that they represent
  newStringData = newStringData.replace(/1/g, 'Sandwich')
  newStringData = newStringData.replace(/2/g, 'Chips')
  newStringData = newStringData.replace(/3/g, 'Soda')

  // turn this back into an object so that the .create() will work
  const buildData = `{ "order": "${newStringData}" }`
  const toObj = JSON.parse(buildData)

  // create a lunch using this data
  Lunch.create(toObj)
    .then(lunch => {
      // print response to the console
      console.log(lunch.order)
      // send the response to the user
      res.status(200).send(`${lunch.order}`)
    })
    .catch(next)
})

module.exports = router
