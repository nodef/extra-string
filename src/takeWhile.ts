import type {testFn} from './_types';

/**
 * Extracts characters till a test passes.
 * @param x a string
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function takeWhile(x: string, fn: testFn, ths: object=null): string {
  var a = '', i = -1;
  for(var v of x) {
    if(!fn.call(ths, v, ++i, x)) break;
    a += v;
  }
  return a;
}
export default takeWhile;
