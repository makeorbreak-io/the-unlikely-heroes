"use strict";
/**
 * Required imports and what-not.
 */
let express = require('express');
let router = express.Router();
let getAllCountriesController = require('./../controller/GetAllCountries').list_all_countries;

/**
 * REST API routes to GET countries. You can retrieve all or find one by id (which is the name)
 * @param {Express application} app is the application that will call this method.
 */
module.exports = {
  getAllCountries: ((req, res) => {
    res.send(JSON.stringify(getAllCountriesController));
  }),
};