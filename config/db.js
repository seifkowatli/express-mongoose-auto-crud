import mongoose from 'mongoose'
import config from 'config'
const db = config.get('mongoURI')

const connectDB = function() {
  mongoose.connect(db, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
  })

  /* eslint-disable no-console */
  const database = mongoose.connection
  database.on('error', function() {
    console.log('Failed to connect to the database')
  }).once('open', function() {
    console.log('Successfully connected to the database')
  })
}

module.exports = connectDB
