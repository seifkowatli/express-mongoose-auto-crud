const express = require('express');
const app = new express();
const fs = require("fs");


var models_path = __dirname + '/api/models'
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
})

app.use(express.json());

app.use('/api/routeGenerator' , require('./api/routes/routeGenerator'));


module.exports = app;


