/**
 * Gets characters from the right.
 * @param x a string
 * @param n number of characters (1)
 */
function right(x: string, n: number=1): string {
  return x.slice(x.length-n);
}
export default right;
