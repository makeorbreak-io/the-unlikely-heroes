'use strict'

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const Schema = mongoose.Schema;

const Country = new Schema ({
  residenceCountry: {type: String, required: true},
  sourceUrl: {type: String, required: false},
  dateAgreement: {type: Date, required: false},
  dateInforcement: {type: Date, required: false},
  salary: {type: Number, required: true},
  directorFee: {type: String, required: false},
  immovableProfit: {type: Number, required: false},
  movableProfit: {type: Number, required: false},
  dividends: {type: Number, required: false},
  interested: {type: Number, required: false},
  cooperationTax: {type: Number, required: false},
  permanentEstablishmentTime: {}, // Have no idea what this is
  businessProfits: {type: Number, required: false},
  royalties: {type: Number, required: false},
  students: {type: Number, required: false},
  pensions: {type: Number, required: false}
});

let jsonSchema = Country.jsonSchema();

console.dir(jsonSchema, {depth: null});