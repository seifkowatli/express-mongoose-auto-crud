const express = require('express')
const morgan = require('morgan')
const app = new express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/item', require('./demo/routes'))

module.exports = app
