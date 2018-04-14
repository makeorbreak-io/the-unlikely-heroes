"use strict";

require('./../config/config')

/**
 * API Server configs and local modules
 */
// require('./../config/config'); 
let {
  mongoose
} = require('./db/mongoose');
let Country = require('./model/Country');

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
let PORT = process.env.PORT;
app.use(bodyParser.json());

/**
 * Populates database with country data from JSON file..
 */

// fs.readFile(__dirname + '/db/APIcallTemplate.json', 'utf8', function(err, data) {
//   if (err) throw err;
//   console.log(data);
//   let jsonDataFormat = JSON.parse(data);
//   mongoose.configuration.insert(data, function(err, doc) {
//     console.log(doc);
//     if(err) throw err;
//   });
// });

/**
 * Activates REST API routes.
 */
app.get('/hello', require('./routes/testRoute').router); // Just for testing and debugging purposes.
app.get('/countries', require('./routes/GetAllCountriesRoute').router);


/**
 * Lets the app listen to requests.
 */
app.listen(3000, function () {
  console.log(`Opened API on PORT ${PORT}`);
});

module.exports = {
  app
};