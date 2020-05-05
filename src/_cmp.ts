/**
 * Compares two strings.
 * @param a a string
 * @param b another string
 * @returns a<b: -1, a=b: 0, a>b: 1
 */
function cmp(a: string, b: string): number {
  return a.localeCompare(b);
}
export default cmp;
