/**
 * Places a separator between every value.
 * @param x an iterable
 * @param v separator
 */
function* intersperse<T>(x: Iterable<T>, v: T): IterableIterator<T> {
  var i = -1;
  for(var u of x) {
    if(++i>0) yield v;
    yield u;
  }
}
export default intersperse;
