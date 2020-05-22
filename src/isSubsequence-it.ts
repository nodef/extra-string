import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

function isSubsequenceCompare<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): boolean {
  var fn = fn||cmp;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  for(var u of x) {
    if(fn(u, value)!==0) continue;
    var {value, done} = iy.next();
    if(done) return true;
  }
  return false;
}

function isSubsequenceMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, T|U>=null): boolean {
  var fn = fn||id, i = -1, j = -1;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  var v1 = fn(value, ++j, y);
  for(var u of x) {
    var u1 = fn(u, ++i, x);
    if(u1!==v1) continue;
    var {value, done} = iy.next();
    if(done) return true;
    v1 = fn(value, ++j, y);
  }
  return false;
}

/**
 * Checks if iterable has a subsequence.
 * @param x an iterable
 * @param y subsequence?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isSubsequence<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  var iy = y[Symbol.iterator]();
  var {value, done} = iy.next();
  if(done) return true;
  var i = -1, j = -1;
  var v1 = fm(value, ++j, y);
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    if(fc(u1, v1)!==0) continue;
    var {value, done} = iy.next();
    if(done) return true;
    v1 = fm(value, ++j, y);
  }
  return false;
}
export default isSubsequence;
