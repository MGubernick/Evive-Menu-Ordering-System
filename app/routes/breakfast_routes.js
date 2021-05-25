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

  // check to see if the order included 'Coffee' (3) -> if not, append 'Water'
  if (!stringData.includes(3)) {
    stringData += ',Water'
  }
  // check order to make sure it is valid within parameters that the system allows
  // order must include a main and a side but not multiples of each

  if (!stringData.includes(1)) {
    res.status(400).send('Unable to process: main is missing')
  } else if (stringData.includes(1, 1)) {
    res.status(400).send('Unable to process: cannot order more than one main')
  }

  if (!stringData.includes(2)) {
    res.status(400).send('Unable to process: side is missing')
  } else if (stringData.includes(2, 3)) {
    res.status(400).send('Unable to process: sorry, cannot order more than one side for breakfast')
  }

  // take the numbers indicated in the order and replace them with the item that they represent
  stringData = stringData.replace(/1/g, 'Eggs')
  stringData = stringData.replace(/2/g, 'Toast')
  stringData = stringData.replace(/3/g, 'Coffee')

  // turn this back into an object so that the .create() will work
  const buildData = `{ "order": "${stringData}" }`
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
