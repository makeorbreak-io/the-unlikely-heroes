"use strict";

let mongoose = require('mongoose');

let Country = mongoose.model('Country', {
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  details: {
    url: String, 
    dateOfAgreement: String,
    dateOfInforcement: String, 
    salary: String,
    directorFee: String,
    profitFromImmovableProperty: String,
    profitFromMovableProperty: String, 
    dividends: String,
    bankInterest: String,
    corporationTax: String, 
    permanentEstablishmentTime: String, 
    businessProfits: String, 
    royalties: String, 
    students: String,
    pensions: String, 
    commission: String
  }
});

module.exports = {
  Country
}