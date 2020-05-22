import id from './_id';
import cmp from './_cmp';
import array from './_array';
import type {compareFn, mapFn} from './_types';

function isInfixCompare<T>(x: Iterable<T>, y: Iterable<T>, fn: compareFn<T>=null): boolean {
  var fn = fn||cmp;
  var y1 = array(y);
  if(y1.length===0) return true;
  var Y = y1.length, J = 0;
  var m = new Array(Y).fill(false);
  for(var u of x) {
    for(var j=J; j>0; j--)
      m[j] = m[j-1] && fn(u, y1[j])===0;
    m[0] = fn(u, y1[0])===0;
    J = Math.min(J+1, Y-1);
    if(m[Y-1]) return true;
  }
  return false;
}

function isInfixMap<T, U=T>(x: Iterable<T>, y: Iterable<T>, fn: mapFn<T, T|U>=null): boolean {
  var fn = fn||id;
  var y1 = array(y);
  if(y1.length===0) return true;
  var Y = y1.length, i = -1, J = 0;
  var y1 = y1.map(fn, null) as T[];
  var m = new Array(Y).fill(false);
  for(var u of x) {
    var u1 = fn(u, ++i, x);
    for(var j=J; j>0; j--)
      m[j] = m[j-1] && u1===y1[j];
    m[0] = u1===y1[0];
    J = Math.min(J+1, Y-1);
    if(m[Y-1]) return true;
  }
  return false;
}

/**
 * Checks if iterable contains an infix.
 * @param x an iterable
 * @param y infix?
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isInfix<T, U=T>(x: Iterable<T>, y: Iterable<T>, fc: compareFn<T|U>, fm: mapFn<T, T|U>=null): boolean {
  var fc = fc||cmp, fm = fm||id;
  var y1 = array(y), Y = y1.length;
  if(Y===0) return true;
  var y1 = y1.map(fm, null) as T[];
  var m = new Array(Y).fill(false);
  var i = -1, J = 0;
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    for(var j=J; j>0; j--)
      m[j] = m[j-1] && fc(u1, y1[j])===0;
    m[0] = fc(u1, y1[0])===0;
    J = Math.min(J+1, Y-1);
    if(m[Y-1]) return true;
  }
  return false;
}
export default isInfix;
