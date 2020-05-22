import size from './size';
import END from './END';

/**
 * Gets index range of part of iterable.
 * @param x an iterable
 * @param i start index (-ve: from right) (0)
 * @param I end index (-ve: from right) (end)
 * @returns [start index, end index]
 */
function indexRange<T>(x: Iterable<T>, i: number=0, I: number=END): [number, number] {
  var n = size(x);
  i = i<0? Math.max(n+i, 0) : Math.min(i, n);
  I = I<0? Math.max(n+I, 0) : Math.min(I, n);
  I = Math.max(i, I);
  return [i, I];
}
export default indexRange;
