import many from './many';
import id from './_id';
import cmp from './_cmp';
import uniques from './_uniques';
import type {compareFn, mapFn} from './_types';

function* intersectionCompare<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): IterableIterator<T> {
  var fn = fn||cmp;
  var y = many(y);
  x: for(var u of x) {
    for(var v of y)
      if(fn(u, v)===0) { yield u; continue x; }
  }
}

function* intersectionMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, T|U>=null): IterableIterator<T> {
  var s = uniques(y, fn);
  var fn = fn||id, i = -1;
  for(var u of x) {
    var u1 = fn(u, ++i, x);
    if(s.has(u1)) yield u;
  }
}

function* intersectionDual<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  var fc = fc||cmp, fm = fm||id;
  var y = many(y), i = -1;
  x: for(var u of x) {
    var u1 = fm(u, ++i, x), j = -1;
    for(var v of y) {
      var v1 = fm(v, ++j, y);
      if(fc(u1, v1)===0) { yield u; continue x; }
    }
  }
}

/**
 * Gives values present in both iterables.
 * @param x an iterable
 * @param y another iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* intersection<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  if(fc) yield* intersectionDual(x, y, fc, fm);
  else yield* intersectionMap(x, y, fm);
}
export default intersection;
