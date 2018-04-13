'use strict';

let express = require('express');
let router = express.Router();


/** 
 * REST API CALL FOR TESTING.
 */
let sample = 'Some text to display';
router.get('/hello', function(req, res) {
  res.send(sample);
})

module.exports.router = router;