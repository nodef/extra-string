import indexRange from './indexRange';

/**
 * Counts the number of characters.
 * @param x a string
 * @param i start index (0)
 * @param I end index (end)
 */
function size(x: string, i: number=0, I: number=x.length): number {
  var [i, I] = indexRange(x, i, I);
  return I-i;
}
export default size;
