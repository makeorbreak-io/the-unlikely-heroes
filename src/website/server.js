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
let PORT = 8000;    // We are hard coding the port we want the site to work ON to allow both apps to work properly.
let path = __dirname + '/views/';

/**
 * Should render the initial page.
 */
app.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(8000, function () {
  console.log(`Website is being rendered on PORT ${PORT}`);
});
