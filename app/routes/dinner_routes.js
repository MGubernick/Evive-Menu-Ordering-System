const express = require('express')

// create a router so our code is more modular
const router = express.Router()

// require item model
const Dinner = require('./../models/dinner.js')

// POST A Dinner
// POST /dinner

router.post('/dinner', (req, res, next) => {
  // extract the meal from the incoming request's data (req.body)
  const dinnerData = req.body
  // take the value from dinnerData and turn it to a string
  let stringData = dinnerData.dinner.toString()
  // Always append 'Water' for Dinner after the Drink
  stringData = [stringData.slice(0, -1), 'Water,', stringData.slice(-1)].join('')

  // check order to make sure it is valid within parameters that the system allows
  // order must include a main and a side but not multiples of each

  if (!stringData.includes(1)) {
    res.status(400).send('Unable to process: your main dish is missing')
  } else if (stringData.includes(1, 1)) {
    res.status(400).send('Unable to process: cannot order more than one main')
  }

  if (!stringData.includes(2)) {
    res.status(400).send('Unable to process: side is missing')
  } else if (stringData.includes(2, 3)) {
    res.status(400).send('Unable to process: sorry, cannot order more than one side for dinner')
  }

  if (!stringData.includes(4)) {
    res.status(400).send('Unable to process: dessert is missing!')
  }

  // take the numbers indicated in the order and replace them with the item that they represent
  stringData = stringData.replace(/1/g, 'Steak')
  stringData = stringData.replace(/2/g, 'Potatoes')
  stringData = stringData.replace(/3/g, 'Wine')
  stringData = stringData.replace(/4/g, 'Cake')

  // turn this back into an object so that the .create() will work
  const buildData = `{ "order": "${stringData}" }`
  const toObj = JSON.parse(buildData)

  // create a breakfast using this data
  Dinner.create(toObj)
    .then(dinner => {
      // print response to the console
      console.log(dinner.order)
      // send the response to the user
      res.status(200).send(`${dinner.order}`)
    })
    .catch(next)
})

module.exports = router
