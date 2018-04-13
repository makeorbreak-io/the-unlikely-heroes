/**
 * JavaScript module that creates the API server.
 */

let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose-schema-jsonschema'),
  Country = require('./model/Countries'),
  bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('')  // this should take a database link. to use mongo, we need to install mongo.

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./routes/GetAllCountriesRoute');
routes(app);


app.listen(port);

console.log(`Opened API on PORT ${port}`);