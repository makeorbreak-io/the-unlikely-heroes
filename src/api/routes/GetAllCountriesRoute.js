"use strict";
/**
 * Required imports and what-not.
 */
let express = require('express');
let router = express.Router();
let getAllCountriesController = require('./../controller/GetAllCountries').list_all_countries;

let {
  Country
} = require('./../model/Country');

/**
 * REST API routes to GET countries. You can retrieve all or find one by id (which is the name)
 * @param {Express application} app is the application that will call this method.
 */
router.get('/countries', function (req, res) {
  Country.find({}).then((countries) => {
    res.send({
      countries
    });
  }, (err) => {
    res.status(400).send(err);
  });
});

router.get('/sources', function (req, res) {
  Country.distinct('source').then((countries) => {
    res.send({
      countries
    });
  }, (err) => {
    res.status(400).send(err);
  });
});

module.exports = {
  router
}