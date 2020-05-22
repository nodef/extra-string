import type {testFn} from "./_types";

/**
 * Breaks string considering test as separator.
 * @param x a string
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function split(x: string, fn: testFn, ths: object=null): string[] {
  var a = [], b = 0, i = -1;
  for(var v of x) {
    if(!fn.call(ths, v, ++i, x)) continue;
    if(b-i>1) { yield a; a = []; }
    b = i+1;
  }
  if(a.length) yield a;
}
export default split;
