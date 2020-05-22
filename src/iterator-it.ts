/**
 * Gives iterator for iterable.
 * @param x an iterable
 */
function iterator<T>(x: Iterable<T>): Iterator<T> {
  return x[Symbol.iterator]();
}
export default iterator;
