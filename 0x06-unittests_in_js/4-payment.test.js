const sendPaymentRequestToApi = require('./3-payment.js');
const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function () {
  it('test stub', function () {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.returns(10);
    const spyConsole = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);
    expect(stubUtils.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledWith('The total is: 10')).to.be.true;
    stubUtils.restore()
		spyConsole.restore()
  });
});
