const expect = require('chai').expect;
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
  it('test spy', function () {
		const spyUtils = sinon.spy(Utils, 'calculateNumber');

		sendPaymentRequestToApi(100, 20);
    expect(spyUtils.calledWith('SUM', 100, 20)).to.be.true;
    spyUtils.restore()
  });
});
