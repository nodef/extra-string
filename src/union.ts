import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

function unionCompare(x: string, y: string, fn: compareFn=null): string {
  var fn = fn||cmp;
  var s = new Set<string>();
  var a = x;
  y: for(var v of y) {
    for(var u of x)
      if(fn(u, v)===0) continue y;
    for(var u of s)
      if(fn(u, v)===0) continue y;
    a += v; s.add(v);
  }
  return a;
}

function unionMap(x: string, y: string, fn: mapFn=null): string {
  var fn = fn||id;
  var s = new Set();
  var a = '', i = -1, j = -1;
  for(var u of x) {
    var u1 = fn(u, ++i, x);
    s.add(u1); a += u;
  }
  for(var v of y) {
    var v1 = fn(v, ++j, y);
    if(!s.has(v1)) { s.add(v1); a += v; }
  }
  return a;
}

function unionDual(x: string, y: string, fc: compareFn=null, fm: mapFn=null): string {
  var fc = fc||cmp, fm = fm||id;
  var s = new Set<string>();
  var a = x, j = -1;
  y: for(var v of y) {
    var v1 = fm(v, ++j, y);
    var i = -1;
    for(var u of x) {
      var u1 = fm(u, ++i, x);
      if(fc(u1, v1)===0) continue y;
    }
    var i = -1;
    for(var u of s) {
      var u1 = fm(u, ++i, y);
      if(fc(u1, v1)===0) continue y;
    }
    a += v; s.add(v);
  }
  return a;
}

/**
 * Gives characters present in any string.
 * @param x a string
 * @param y another string
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function union(x: string, y: string, fc: compareFn=null, fm: mapFn=null): string {
  if(fc) return unionDual(x, y, fc, fm);
  else return unionMap(x, y, fm);
}
export default union;
