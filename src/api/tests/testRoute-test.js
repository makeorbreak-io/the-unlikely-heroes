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

describe('Test rout testing', () => {
  it("it should return 'Some text to display'.", (done) => {
    let result = require('./../routes/testRoute').sample;
    request(app)
      .get('/hello')
      .expect(200)
      .expect((res) => {
        expect(res.text).toEqual(result)
      })
      .end(done);
  });
});