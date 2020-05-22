/**
 * Drops given number of characters from string.
 * @param x a string
 * @param n number of characters
 */
function drop(x: string, n: number=0): string {
  return x.slice(n);
}
export default drop;
