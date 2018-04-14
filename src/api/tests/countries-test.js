/**
 * Required packages for testing
 */
const expect = require('expect');
const request = require('supertest');
const {ObjectId} = require('mongodb');

/**
 * Local modules required.
 */
const {app} = require('./../server');
const {countryModel} =  require('./../model/Country');
const {countries, populateWithCountries} = require('./seed/country-seed');

beforeEach(populateWithCountries);

describe('Tests for the GET countries API HTTP method.', () => {
  it('should return 200 when getting them all.', (done) => {
    request(app)
      .get('/countries')
      .expect(200)
      .expect((res) => {
        console.log(res);
        expect(res.body.text).toBe('');
      })
      .end(done);
    });
});