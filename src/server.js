/**
 * JavaScript module that creates the API server.
 * For MoB contest.
 */

/**
 * Constants and global variable declarations.
 */
let PORT = process.env.PORT | 3000;
let Country = require('./model/Countries');
let path = __dirname + 'ui/views';
let router = express.Router();

/**
 * Calling and configuration of Express Node module.
 */
let express = require('express'),
  app = express(),
  mongoose = require('mongoose-schema-jsonschema'),
  bodyParser = require('body-parser');

/**
 * This next part is related with the website. 
 */
router.use(function (req, res, next) {
  console.log('/', req.method);
  next();
});
router.get('/', function(req, res) {
  res.sendFile(path + 'index.html');
});


/**
 * This part is related with the handling of API requests.
 */
mongoose.Promise = global.Promise;
mongoose.connect('') // this should take a database link. to use mongo, we need to install mongo.

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let routes = require('./routes/GetAllCountriesRoute');
routes(app);

app.listen(PORT, function () {
  console.log(`Opened API on PORT ${PORT}`);
});