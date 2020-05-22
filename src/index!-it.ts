import size from './size';

/**
 * Gets zero-based index.
 * @param x an iterable
 * @param i index (-ve: from right) (0)
 */
function index<T>(x: Iterable<T>, i: number=0): number {
  var n = size(x);
  return i<0? Math.max(n+i, 0) : Math.min(i, n);
}
export default index;
