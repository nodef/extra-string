/**
 * Compares two strings.
 * @param x an string
 * @param y another string
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
function compare(x: string, y: string): number {
  return x.localeCompare(y);
}
export default compare;
