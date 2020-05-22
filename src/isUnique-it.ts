import many from './many';
import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

function isUniqueCompare<T>(x: Iterable<T>, fn: compareFn<T>=null): boolean {
  var fn = fn||cmp;
  var x = many(x), i = -1;
  for(var u of x) {
    var j = -1; ++i;
    for(var v of x) {
      if(++j>=i) break;
      if(fn(u, v)===0) return false;
    }
  }
  return true;
}

function isUniqueMap<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null): boolean {
  var fn = fn||id;
  var s = new Set(), i = -1;
  for(var v of x) {
    var v1 = fn(v, ++i, x);
    if(s.has(v1)) return false;
    s.add(v1);
  }
  return true;
}

function isUniqueDual<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  var x = many(x), i = -1;
  for(var u of x) {
    var u1 = fm(u, ++i, x), j = -1;
    for(var v of x) {
      if(++j>=i) break;
      var v1 = fm(v, j, x);
      if(fc(u1, v1)===0) return false;
    }
  }
  return true;
}

/**
 * Checks if there are no duplicate values.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isUnique<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): boolean {
  if(fc) return isUniqueDual(x, fc, fm);
  else return isUniqueMap(x, fm);
}
export default isUnique;
