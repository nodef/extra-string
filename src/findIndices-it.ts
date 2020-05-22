import type {testFn} from './_types';

/**
 * Finds indices of values passing a test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function* findIndices<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): IterableIterator<number> {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) yield i;
}
export default findIndices;
