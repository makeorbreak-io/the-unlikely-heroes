/**
 * API Server configs and local modules
 */
require('./../config/config');
let {mongoose} = require('./db/mongoose');
let {Country} = require('./model/Countries');

/**
 * Third-party modules
 */
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

/**
 * Server initialization and Port definition
 */
let PORT = process.env.PORT | 3000;
let app = express();
app.use(bodyParser.json());


/**
 * Activates REST API routes.
 */
let routes = require('./routes/GetAllCountriesRoute');
routes(app);

app.listen(PORT, function () {
  console.log(`Opened API on PORT ${PORT}`);
});
