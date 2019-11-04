const express = require('express');
const app = new express();

app.use(express.json());

// app.use('/' , require('./api/routes/item'));

module.exports = app;


