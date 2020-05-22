import chunk from './chunk';
import repeat from './repeat';

/**
 * Places values of an iterable between another.
 * @param x an iterable
 * @param y another iterable
 * @param m number of values from x (1)
 * @param n number of values from y (1)
 * @param s step size for x (m)
 * @param t step size for y (n)
 */
function* intermix<T>(x: Iterable<T>, y: Iterable<T>, m: number=1, n: number=1, s: number=m, t: number=n): IterableIterator<T> {
  var x1 = chunk(x, m, s);
  var y1 = chunk(repeat(y), n, t);
  var iy = y1[Symbol.iterator](), i = -1;
  for(var u of x1) {
    if(++i>0) yield* iy.next().value;
    yield* u;
  }
}
export default intermix;
