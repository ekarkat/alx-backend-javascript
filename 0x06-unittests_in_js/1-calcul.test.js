const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should return 0', function () {
    assert.strictEqual(calculateNumber('SUM', -1.2, 1.4), 0);
    assert.strictEqual(calculateNumber('SUM', 1.2, -1.5), 0);
  });

  it('should return 0', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.3), 0);
  });

  it('should return division', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.2), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', -2.4, -3.6), 0.5);
  });

  it('should return Error', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
  });

});
