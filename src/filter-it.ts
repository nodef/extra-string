import type {testFn} from './_types';

/**
 * Keeps the values which pass a test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function* filter<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): IterableIterator<T> {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) yield v;
}
export default filter;
