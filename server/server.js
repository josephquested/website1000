process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var session = require('express-session')

var getRoutes = require('./getRoutes')
var postRoutes = require('./postRoutes')

app.set('views', require('path').join(__dirname, '../views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))

app.use(session({
  secret: 'SECRETwebsite1000',
  saveUninitialized: true,
  resave: true
}))

// GET REQUESTS //
app.get('/', getRoutes.home)
app.get('/log', getRoutes.no)
app.get('/log/up', getRoutes.logUp)
app.get('/log/in', getRoutes.logIn)

// POST REQUESTS //
app.post('/log/up', postRoutes.logUp)
app.post('/log/in', postRoutes.logIn)

module.exports = app
