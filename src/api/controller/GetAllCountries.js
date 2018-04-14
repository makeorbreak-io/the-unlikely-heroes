'use strict';

let mongoose = require('mongoose');
let Country = require('./../model/Country').countryModel;
  
exports.list_all_countries = function(req, res) {
  Country.find({}).then((countries) => {
    res.send({countries});
  }, (err) => {
    res.status(400).send(err);
  });
};

exports.list_country_by_id = function (req, res) {
};