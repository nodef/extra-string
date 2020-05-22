/**
 * Converts iterator to iterable.
 * @param x an iterable/iterator
 */
function from<T>(x: Iterable<T>|Iterator<T>): Iterable<T> {
  if(typeof x[Symbol.iterator]==='function') return x as Iterable<T>;
  return {[Symbol.iterator]() { return x as Iterator<T>; }};
}
export default from;
