import END from './END';

/**
 * Fills with given value.
 * @param x an iterable
 * @param v value
 * @param i start index (0)
 * @param I end index (end)
 */
function* fill<T>(x: Iterable<T>, v: T, i: number=0, I: number=END): IterableIterator<T> {
  var j = -1;
  for(var u of x) {
    if(++j>=i && j<I) yield v;
    else yield u;
  }
}
export default fill;
