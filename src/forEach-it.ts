import type {calledFn} from './_types';

/**
 * Calls a function for each value.
 * @param x an iterable
 * @param fn called function (v, i, x)
 * @param ths this argument
 */
function forEach<T>(x: Iterable<T>, fn: calledFn<T>, ths: object=null): void {
  var i = -1;
  for(var v of x)
    fn.call(ths, v, ++i, x);
}
export default forEach;
