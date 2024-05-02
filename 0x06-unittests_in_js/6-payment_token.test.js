const getPaymentTokenFromAPI = require('./6-payment_token.js');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', function () {
  it('Async test', function (done) {
    getPaymentTokenFromAPI(true)
      .then((resolve) => {
        expect(resolve.data).to.equal('Successful response from the API');
        done();
      })
  });
});
