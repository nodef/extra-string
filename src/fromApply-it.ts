import type {mapFn} from './_types';

/**
 * Generates iterable from function application.
 * @param fn map function (v, i, x)
 * @param v start value
 * @param n number of values (-1 => Inf)
 */
function* fromApply<T>(fn: mapFn<T, T>=null, v: T, n: number=-1): IterableIterator<T> {
  if(n!==0) yield v;
  for(var i=1; i!==n; i++)
    yield (v = fn(v, i, null));
}
export default fromApply;
