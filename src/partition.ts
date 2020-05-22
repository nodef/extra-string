import type {testFn} from './_types';

/**
 * Segregates characters by test result.
 * @param x a string
 * @param fn test function (v, i, x)
 * @param ths this argument
 * @returns [satisfies, doesnt]
 */
function partition(x: string, fn: testFn<string>, ths: object=null): [string, string] {
  var t = '', f = '', i = -1;
  for(var v of x) {
    if(fn.call(ths, v, ++i, x)) t += v;
    else f += v;
  }
  return [t, f];
}
export default partition;
