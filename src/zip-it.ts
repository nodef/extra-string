import some from './some';
import id from './_id';
import type {mapFn, tillFn} from './_types';

/**
 * Combines values from iterables.
 * @param xs iterables
 * @param fm map function (vs, i, xs)
 * @param ft till function (dones) (some)
 * @param vd default value
 */
function* zip<T, U>(xs: Iterable<T>[], fm: mapFn<T[], T[]|U>=null, ft: tillFn=null, vd?: T): IterableIterator<T[]|U> {
  var fm = fm||id, ft = ft||some as tillFn;
  var X = xs.length;
  if(X===0) return;
  var is = [], ds = [], vs = [];
  for(var r=0; r<X; r++)
    is[r] = xs[r][Symbol.iterator]();
  for(var i=0;; i++) {
    for(var r=0; r<X; r++) {
      var {done, value} = is[r].next();
      ds[r] = done; vs[r] = done? vd : value;
    }
    if(ft(ds)) break;
    yield fm(vs.slice(), i, null);
  }
}
export default zip;
