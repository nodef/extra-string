import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

function compareCompare(x: string, y: string, fn: compareFn<string>=null): number {
  var fn = fn||cmp;
  var X = x.length, Y = y.length;
  for(var i=0, I=Math.min(X, Y); i<I; i++) {
    var c = fn(x[i], y[i]);
    if(c!==0) return c;
  }
  return Math.sign(X-Y);
}

function compareDual<U>(x: string, y: string, fc: compareFn<string|U>=null, fm: mapFn<string, string|U>=null): number {
  var fc = fc||cmp, fm = fm||id;
  var X = x.length, Y = y.length;
  for(var i=0, I=Math.min(X, Y); i<I; i++) {
    var u1 = fm(x[i], i, x);
    var v1 = fm(y[i], i, y);
    var c = fc(u1, v1);
    if(c!==0) return c;
  }
  return Math.sign(X-Y);
}

/**
 * Compares two strings.
 * @param x an string
 * @param y another string
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
function compare(x: string, y: string, fc: compareFn=null, fm: mapFn=null): number {
  if(fc || fm) return compareDual(x, y, fc, fm);
  else return x.localeCompare(y);
}
export default compare;
