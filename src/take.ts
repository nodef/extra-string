/**
 * Extracts given number of characters from string.
 * @param x a string
 * @param n number of characters
 */
function take(x: string, n: number=0): string {
  return x.slice(0, n);
}
export default take;
