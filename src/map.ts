import type {mapFn} from './_types';

/**
 * Updates characters based on map function.
 * @param x a string
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function map(x: string, fn: mapFn<string, string>, ths: object=null): string {
  var a = '', i = -1;
  for(var v of x)
    a += fn.call(ths, v, ++i, x);
  return a;
}
export default map;
