'use strict';

let Country = require('./../model/Country');

const list_all_countries = (req, res) => {
  Country.find({}).then((countries) => {
    res.send({countries});
  }, (err) => {
    res.status(400).send(err);
  });
};

module.exports = {
  list_all_countries
};