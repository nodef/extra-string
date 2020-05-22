import search from './search';
import slice from './slice';

/**
 * Finds first index of a value.
 * @param x an iterable
 * @param v search value
 * @param i start index
 */
function indexOf<T>(x: Iterable<T>, v: T, i: number=0): number {
  var a = search(slice(x, i), v);
  return a<0? a : a+i;
}
export default indexOf;
