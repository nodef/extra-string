import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

function isPrefixCompare<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): boolean {
  var fn = fn||cmp;
  var ix = x[Symbol.iterator]();
  for(var v of y) {
    var {value, done} = ix.next();
    if(done || fn(value, v)!==0) return false;
  }
  return true;
}

function isPrefixMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, T|U>=null): boolean {
  var fn = fn||id, i = -1;
  var ix = x[Symbol.iterator]();
  for(var v of y) {
    var {value, done} = ix.next();
    if(done) return false;
    var u1 = fn(value, ++i, x);
    var v1 = fn(v, i, y);
    if(u1!==v1) return false;
  }
  return true;
}

/**
 * Checks if iterable starts with a prefix.
 * @param x an iterable
 * @param y prefix?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isPrefix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  var ix = x[Symbol.iterator](), i = -1;
  for(var v of y) {
    var {value, done} = ix.next();
    if(done) return false;
    var u1 = fm(value, ++i, x);
    var v1 = fm(v, i, y);
    if(fc(u1, v1)!==0) return false;
  }
  return true;
}
export default isPrefix;
