const request = require('request');
const expect = require('chai').expect;

describe('Index page', function () {
  it('should resturn correct body and status code', (done) => {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
