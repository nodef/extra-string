import many from './many';
import id from './_id';
import type {mapFn} from './_types';

/**
 * Lists cartesian product of iterables.
 * @param xs iterables
 * @param fn map function (vs, i, xs)
 */
function* cartesianProduct<T, U=T>(xs: Iterable<T>[], fn: mapFn<T[], T[]|U>=null): IterableIterator<T[]|U> {
  var fn = fn||id;
  var X = xs.length;
  if(X===0) return;
  var is = [], os = [];
  for(var i=0; i<X; i++) {
    xs[i] = i>0? many(xs[i]) : xs[i];
    is[i] = xs[i][Symbol.iterator]();
    os[i] = is[i].next();
    if(os[i].done) return;
  }
  for(var i=0;; i++) {
    var vs = [];
    for(var o of os) vs.push(o.value);
    yield fn(vs, i, null);
    for(var r=X-1; r>=0; r--) {
      os[r] = is[r].next();
      if(!os[r].done) break;
      is[r] = xs[r][Symbol.iterator]();
      os[r] = is[r].next();
    }
    if(r<0) break;
  }
}
export default cartesianProduct;
