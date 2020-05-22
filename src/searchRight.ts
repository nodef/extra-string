import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

function searchRightCompare(x: string, v: string, fn: compareFn=null): number {
  var fn = fn||cmp;
  for(var i=x.length-1; i>=0; i--)
    if(fn(x[i], v)===0) return i;
  return -1;
}

/**
 * Searches a character from right.
 * @param x a string
 * @param v search character
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns index of character, -1 if not found
 */
function searchRight(x: string, v: string, fc: compareFn=null, fm: mapFn=null): number {
  var fc = fc||cmp, fm = fm||id;
  var v1 = fm(v, 0, null);
  for(var i=x.length-1; i>=0; i--) {
    var u1 = fm(x[i], i, x);
    if(fc(u1, v1)===0) return i;
  }
  return -1;
}
export default searchRight;
