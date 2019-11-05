const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = function() {
  mongoose.connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })

  /* eslint-disable no-console */
  const database = mongoose.connection
  database.on('error', function() {
    console.log(`Failed to connect to the \`${config.db.name}\` database`)
  }).once('open', function() {
    console.log(`Successfully connected to the \`${config.db.name}\` database`)
  })
}

module.exports = connectDB
