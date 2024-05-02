const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(4.5, 0.3), 5);
  });

  it('should return 0', () => {
    assert.strictEqual(calculateNumber(-1.2, 1.4), 0);
    assert.strictEqual(calculateNumber(1.2, -1.5), 0);
    assert.strictEqual(calculateNumber(2.2, -1.6), 0);
  });
});
