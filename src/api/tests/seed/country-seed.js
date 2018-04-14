const {ObjectId} = require('mongodb');
const {countryModel} = require('./../../model/Country');

/**
 * Creates two mocks for testing countries api and database setup.
 */

const countryOneName = "SomeCountry";
const countryTwoName = "AnotherCountry";
const countryOneId = new ObjectId;
const countryTwoId = new ObjectId;

/**
 * Due to the complexity of the model, the seed only manages a couple connections for the time being.
 */
const countries = [
{
  residenceCountry: countryOneName,
  salary: 1000
}, 
{
  residenceCountry: countryTwoName,
  salary: 500
}];

const populateWithCountries = ((done) => {
  countryModel.remove({}).then(() => {
    var countryOne = new countryModel(countries[0]).save();
    var countryTwo = new countryModel(countries[1]).save();

    return Promise.all([countryOne, countryTwo])
  }).then(() => done());
});

module.exports = {
  countries,
  populateWithCountries
}

