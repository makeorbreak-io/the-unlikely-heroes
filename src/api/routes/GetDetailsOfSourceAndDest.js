"use strict";
/**
 * Required imports and what-not.
 */
let express = require('express');
let router = express.Router();

let {
  Country
} = require('./../model/Country');

/**
 * REST API routes to GET countries. You can retrieve all or find one by id (which is the name)
 * @param {Express application} app is the application that will call this method.
 */
router.get('/details', function (req, res) {
  Country.findOne({
    'source': req.query.src,
    'destination': req.query.dest
  }).then((details) => {
    res.send({
      details
    });
    console.log(typeof(details));
  }, (err) => {
    res.status(400).send(err);
  });
});

module.exports = {
  router
};