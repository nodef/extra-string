import size from './size'

/**
 * Gets size of part of string.
 * @param x a string
 * @param i start index (-ve: from right) (0)
 * @param I end index (-ve: from right) (end)
 */
function length(x: string, i: number=0, I: number=x.length): number {
  return size(x, i, I);
}
export default length;
