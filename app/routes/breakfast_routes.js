const express = require('express')

// create a router so our code is more modular
const router = express.Router()

// require item model
const Breakfast = require('./../models/breakfast.js')

// POST A Breakfast
// POST /breakfast

router.post('/breakfast', (req, res, next) => {
  // extract the meal from the incoming request's data (req.body)
  const breakfastData = req.body
  // take the value from breakfastData and turn it to a string
  let stringData = breakfastData.breakfast.toString()

  const shrink = stringData.replace(/,/g, '')
  const split = shrink.split('')
  let newStringData = split.sort().join(',')
  // Always append 'Water' for Dinner after the Drink
  console.log('newStringData', newStringData)

  // check to see if the order included 'Coffee' (3) -> if not, append 'Water'
  if (!newStringData.includes(3)) {
    newStringData += ',Water'
  }
  // check order to make sure it is valid within parameters that the system allows
  // order must include a main and a side but not multiples of each

  if (!newStringData.includes(1) && !newStringData.includes(2)) {
    res.status(400).send('Unable to process: main is missing, side is missing')
  }

  if (!newStringData.includes(1)) {
    res.status(400).send('Unable to process: main is missing')
  } else if (newStringData.includes(1, 1)) {
    res.status(400).send('Unable to process: cannot order more than one main')
  }

  if (!newStringData.includes(2)) {
    res.status(400).send('Unable to process: side is missing')
  } else if (newStringData.includes(2, 3)) {
    res.status(400).send('Unable to process: sorry, cannot order more than one side for breakfast')
  }

  // take the numbers indicated in the order and replace them with the item that they represent
  newStringData = newStringData.replace(/1/g, 'Eggs')
  newStringData = newStringData.replace(/2/g, 'Toast')
  newStringData = newStringData.replace(/3/g, 'Coffee')

  // turn this back into an object so that the .create() will work
  const buildData = `{ "order": "${newStringData}" }`
  const toObj = JSON.parse(buildData)

  // create a breakfast using this data
  Breakfast.create(toObj)
    .then(breakfast => {
      // print response to the console
      console.log(breakfast.order)
      // send the response to the user
      res.status(200).send(`${breakfast.order}`)
    })
    .catch(next)
})

module.exports = router
