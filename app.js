const express = require('express')
const app = new express()

app.use(express.json())

app.use('/api/item', require('./demo/routes'))

module.exports = app
