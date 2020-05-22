import type {reduceFn} from './_types';

/**
 * Reduces values to a single value.
 * @param x an iterable
 * @param fn reduce function (acc, v, i, x)
 * @param acc initial value
 */
function reduce<T, U>(x: Iterable<T>, fn: reduceFn<T, U>, acc?: U): U {
  var init = arguments.length <= 2, i = -1;
  for(var v of x) {
    if(init) { init = false; acc = v as any as U; ++i; }
    else acc = fn(acc, v, ++i, x);
  }
  return acc;
}
export default reduce;
