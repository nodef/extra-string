import compare from './compare';
import type {compareFn, mapFn} from './_types';

/**
 * Checks if two strings are equal.
 * @param x a string
 * @param y another string
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function isEqual<U=string>(x: string, y: string, fc: compareFn<string>=null, fm: mapFn<string, string|U>=null): boolean {
  var X = x.length, Y = y.length;
  return X===Y && compare(x, y, fc, fm)===0;
}
export default isEqual;
