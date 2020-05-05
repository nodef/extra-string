/**
 * Gets characters from middle.
 * @param x a string
 * @param i start index (0)
 * @param n number of characters (1)
 */
function middle(x: string, i: number=0, n: number=1): string {
  return x.slice(i, i+n);
}
export default middle;
