import type {testFn} from './_types';

/**
 * Drops characters till a test passes.
 * @param x a string
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function dropWhile(x: string, fn: testFn<string>, ths: object=null): string {
  var i = 0;
  for(var v of x)
    if(!fn.call(ths, v, i++, x)) break;
  return x.slice(i);
}
export default dropWhile;
