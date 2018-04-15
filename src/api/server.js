"use strict";

require('./../config/config')

/**
 * API Server configs and local modules
 */
require('./../config/config');
let {
  mongoose
} = require('./db/mongoose');
let Country = require('./model/Country').Country;

/**
 * Third-party modules
 */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

/**
 * Server initialization and Port definition
 */
let app = express();
let PORT = 3000; // We are hard coding the API PORT we want to allow both apps to work.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

/**
 * Populates database with country data from JSON file..
 */
mongoose.connection.on('connected', function () {
  mongoose.connection.db.dropDatabase();
  fs.readFile(__dirname + '/db/APIcallTemplate.json', 'utf8', function (err, data) {
    console.log('Writing sample data to the database and deleting any seed.');
    if (err) throw err;
    Country.insertMany((JSON.parse(data)["countries"]), function (err, doc) {
      if (err) {
        throw err;
      } else {
        console.log('Data generated successfully.')
      };
    });
  });
});

/**
 * Activates REST API routes.
 */
app.get('/hello', require('./routes/testRoute').router); // Just for testing and debugging purposes.
app.get('/sources', require('./routes/GetAllCountriesRoute').router);
app.get('/details', require('./routes/GetDetailsOfSourceAndDest').router);


/**
 * Lets the app listen to requests.
 */
app.listen(3000, function () {
  console.log(`Opened API on PORT ${PORT}`);
});

module.exports = {
  app
};