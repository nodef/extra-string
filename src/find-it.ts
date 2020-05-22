import type {testFn} from './_types';

/**
 * Finds first value passing a test.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function find<T>(x: Iterable<T>, fn: testFn<T>, ths: object=null): T {
  var i = -1;
  for(var v of x)
    if(fn.call(ths, v, ++i, x)) return v;
}
export default find;
