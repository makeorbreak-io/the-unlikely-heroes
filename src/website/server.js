/**
 * JavaScript module that creates the API server.
 * For MoB contest.
 */

/**
 * Calling and configuration of Express Node module.
 */
let express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

/**
 * Constants and global variable declarations.
 */
require('./../config/config');
let PORT = process.env.PORT | 3000;
let path = __dirname + 'views/';
let router = express.Router();


/**
 * This next part is related with the website. 
 */
router.use(function (req, res, next) {
  console.log('/', req.method);
  next();
});

/**
 * Should render the initial page.
 */
router.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());