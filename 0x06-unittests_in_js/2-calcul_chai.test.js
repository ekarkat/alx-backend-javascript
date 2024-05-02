const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should return 0', function () {
    expect(calculateNumber('SUM', -1.2, 1.4)).to.equal(0);
    expect(calculateNumber('SUM', 1.2, -1.5)).to.equal(0);
  });

  it('should return 0', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 1.3)).to.equal(0);
  });

  it('should return division', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.2)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', -2.4, -3.6)).to.equal(0.5);
  });

  it('should return Error', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
  });

});
