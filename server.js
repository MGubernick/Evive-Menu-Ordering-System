// require necessary NPM packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// require route files
const breakfastRoutes = require('./app/routes/breakfast_routes')
const lunchRoutes = require('./app/routes/lunch_routes')
const dinnerRoutes = require('./app/routes/dinner_routes')

// require middleware to handle errors and log to the terminal as I work
const errorHandler = require('./lib/error_handler')
const requestLogger = require('./lib/request_logger')

// require database configuration logic
const db = require('./config/db')

// define server and client ports
// used for cors and local port declaration
const serverDevPort = 4741
const clientDevPort = 7165

// establish database connection
// use new version of URL parser
// use createIndex instead of deprecated ensureIndex
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

// instantiate express application object
const app = express()

// set CORS headers on response from this API using the `cors` NPM package
// `CLIENT_ORIGIN` is an environment variable that is set on Heroku
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}` }))

// define port for API to run on
const port = process.env.PORT || serverDevPort

// add `express.json` middleware which will parse JSON requests into
// JS objects before they reach the route files.
app.use(express.json())
// this parses requests sent by `$.ajax`
app.use(express.urlencoded({ extended: true }))

// use the request logger to view each request in the terminal as it comes in for debugging
app.use(requestLogger)

// register route files
app.use(breakfastRoutes)
app.use(lunchRoutes)
app.use(dinnerRoutes)

// register error handling middleware
app.use(errorHandler)

// run API on designated port (4741 in this case)
app.listen(port, () => {
  console.log('Got it! Listening on port ' + port)
})

// needed for testing
module.exports = app
