import type {combineFn} from './_types';

/**
 * Estimates new values between existing ones.
 * @param x an iterable
 * @param fn combine function (a, b)
 */
function* interpolate<T>(x: Iterable<T>, fn: combineFn<T>): IterableIterator<T> {
  var u: T, i = -1;
  for(var v of x) {
    if(++i>0) yield fn(u, v);
    yield (u = v);
  }
}
export default interpolate;
