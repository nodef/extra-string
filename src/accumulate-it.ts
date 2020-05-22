import type {reduceFn} from './_types';

/**
 * Produces accumulating values.
 * @param x an iterable
 * @param fn reduce function (acc, v, i, x)
 * @param acc initial value
 */
function* accumulate<T, U>(x: Iterable<T>, fn: reduceFn<T, U>, acc?: U): IterableIterator<U> {
  var init = arguments.length <= 2, i = -1;
  for(var v of x) {
    if(init) { init = false; acc = v as any as U; ++i; }
    else acc = fn(acc, v, ++i, x);
    yield acc;
  }
}
export default accumulate;
