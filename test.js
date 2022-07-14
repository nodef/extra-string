const funcxion = require('./');
const assert = require('assert');


// 1. Basic tests.
function example1() {
  var a = funcxion.composeRight(x => x*x, x => x+2);
  assert.equal(a(10), 102);
  // → 102

  var a = funcxion.curry((x, y) => x+y);
  assert.equal(a(2)(3), 5);
  // → 7

  var a = funcxion.unspread(Math.max);
  assert.equal(a([2, 3, 1]), 3);
  // → 1.25

  var a = funcxion.parameters((x, y) => x+y);
  assert.deepEqual(a, ['x', 'y']);
  // → [ 'x', 'y' ]
}
example1();
