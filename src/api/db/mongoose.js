/**
 * Define Mongoose connection
 */

let mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Sets which Promise library to use
mongoose.connect('mongodb://localhost:27017/taxation_project');

module.exports = {
  mongoose
}