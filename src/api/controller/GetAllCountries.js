'use strict';

let mongoose = require('mongoose'),
  Country = mongoose.model('Countries');

exports.list_all_countries = function(req, res) {
  Country.find({}, function(err, country) {
    if (err) {
      res.send(err);
    };
    res.json(country);
  });
};

exports.list_country_by_id = function (req, res) {
  Country.findById({}, function(err, country) {
    if (err) {
      res.send(err);
    };
    res.json(country);
  });
};