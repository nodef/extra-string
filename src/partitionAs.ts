import id from './_id';
import type {mapFn} from './_types';

/**
 * Segregates characters by similarity.
 * @param x a string
 * @param fn map function (v, i, x)
 * @param ths this argument
 * @returns Map {key => characters}
 */
function partitionAs<U>(x: string, fn: mapFn<string, string|U>=null, ths=null): Map<string|U, string> {
  var fn = fn||id;
  var m = new Map(), i = -1;
  for(var v of x) {
    var v1 = fn.call(ths, v, ++i, x);
    var a  = m.get(v1)||'';
    m.set(v1, a+v);
  }
  return m;
}
export default partitionAs;
