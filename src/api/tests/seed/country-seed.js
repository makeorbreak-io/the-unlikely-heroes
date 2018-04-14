const {ObjectId} = require('mongodb');
const Country = require('./../../model/Country').Country;

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
const Countries = [
{
  residenceCountry: countryOneName,
  salary: 1000
}, 
{
  residenceCountry: countryTwoName,
  salary: 500
}
];

const populateWithCountries = ((done) => {
  Country.remove({}).then(() => {
    return Country.insertMany(Countries);
  }).then(() => done());
});

module.exports = {
  Countries,
  populateWithCountries
};