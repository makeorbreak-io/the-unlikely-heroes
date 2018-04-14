/**
 * Required packages for testing
 */
const expect = require('expect');
const request = require('supertest');
const {
  ObjectId
} = require('mongodb');

/**
 * Local modules required.
 */
const {
  app
} = require('./../server');
const {
  countries,
  populateWithCountries
} = require('./seed/country-seed');

beforeEach(populateWithCountries);

describe('Tests for the GET countries API HTTP method.', () => {
  it('should return 200 when getting all countries.', (done) => {
    request(app)
      .get('/countries')
      .expect(200)
      .expect((res) => {
        expect(res.text).toBe('');
      })
      .end(done);
  });
});