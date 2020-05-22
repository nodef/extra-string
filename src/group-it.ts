import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

function* groupCompare<T>(x: Iterable<T>, fn: compareFn<T>=null): IterableIterator<T[]> {
  var fn = fn||cmp;
  var a = [], u: T, i = -1;
  for(var v of x) {
    if(++i>0 && fn(u, v)!==0) { yield a; a = [v]; }
    else a.push(v);
    u = v;
  }
  yield a;
}

function* groupMap<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null): IterableIterator<T[]> {
  var fn = fn||id;
  var a = [], u1: T|U, i = -1;
  for(var v of x) {
    var v1 = fn(v, ++i, x);
    if(i>0 && u1!==v1) { yield a; a = [v]; }
    else a.push(v);
    u1 = v1;
  }
  yield a;
}

/**
 * Keeps similar values together and in order.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* group<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T[]> {
  var fc = fc||cmp, fm = fm||id;
  var a = [], u1: T|U, i = -1;
  for(var v of x) {
    var v1 = fm(v, ++i, x);
    if(i>0 && fc(u1, v1)!==0) { yield a; a = [v]; }
    else a.push(v);
    u1 = v1;
  }
  yield a;
}
export default group;
