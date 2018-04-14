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

describe('Test route testing', () => {
  it("it should return 'Some text to display' in JSON format.", (done) => {
    let expectedResult = 'Some text to display';
    request(app)
      .get('/hello')
      .expect(200)
      .expect((res) => {
        expect(JSON.parse(res.text).sample).toEqual(expectedResult)
      })
      .end(done);
  });
});