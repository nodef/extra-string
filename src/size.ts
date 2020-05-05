import indexRange from './indexRange';

/**
 * Gets size of part of string.
 * @param x a string
 * @param i start index (-ve: from right) (0)
 * @param I end index (-ve: from right) (end)
 */
function size(x: string, i: number=0, I: number=x.length): number {
  var [i, I] = indexRange(x, i, I);
  return I-i;
}
export default size;
