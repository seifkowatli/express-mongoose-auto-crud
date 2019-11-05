import express from 'express'
import morgan from 'morgan'
const app = new express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/item', require('./demo/routes'))

module.exports = app
