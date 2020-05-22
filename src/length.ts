import size from './size'

/**
 * Counts the number of characters.
 * @param x a string
 * @param i start index (0)
 * @param I end index (end)
 */
function length(x: string, i: number=0, I: number=x.length): number {
  return size(x, i, I);
}
export default length;
