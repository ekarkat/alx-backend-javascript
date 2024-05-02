const sendPaymentRequestToApi = require('./3-payment.js');
const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function () {
  let spyConsole;
  beforeEach(() => spyConsole = sinon.spy(console, 'log'));
  afterEach(() => spyConsole.restore());

  it('sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.calledWith('The total is: 120')).to.be.true;
  });
  it('sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyConsole.calledWith('The total is: 20')).to.be.true;
  });
});
