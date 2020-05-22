import id from './_id';
import cmp from './_cmp';
import type {mapFn, compareFn} from './_types';

function rangeCompare(x: string, fn: compareFn=null): [string, string] {
  var fn = fn||cmp;
  var m: string, n: string, i = -1;
  for(var v of x) {
    if(++i===0) { m = n = v; }
    if(fn(v, m)<0) m = v;
    if(fn(v, n)>0) n = v;
  }
  return [m, n];
}

function rangeMap(x: string, fn: mapFn=null): [string, string] {
  var fn = fn||id, i = -1;
  var mk: string, mv: string, nk: string, nv: string;
  for(var v of x) {
    var k = fn(v, ++i, x);
    if(i===0) { mk = nk = k; mv = nv = v; }
    if(k<mk) { mk = k; mv = v; }
    if(k>nk) { nk = k; nv = v; }
  }
  return [mv, nv];
}

/**
 * Finds smallest and largest characters.
 * @param x a string
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns [min, max]
 */
function range<U>(x: string, fc: compareFn<string>=null, fm: mapFn<string, string|U>=null): [string, string] {
  var fc = fc||cmp, fm = fm||id;
  var mk: string|U, mv: string, nk: string|U, nv: string, i = -1;
  for(var v of x) {
    var k = fm(v, ++i, x);
    if(i===0) { mk = nk = k; mv = nv = v; }
    if(fc(k, mk)<0) { mk = k; mv = v; }
    if(fc(k, nk)>0) { nk = k; nv = v; }
  }
  return [mv, nv];
}
export default range;
