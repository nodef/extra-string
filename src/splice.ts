/**
 * Removes or replaces existing characters.
 * @param x a string
 * @param i remove index (0)
 * @param n number of characters to remove (rest)
 * @param vs characters to insert
 */
function splice(x: string, i: number=0, n: number=x.length-i, vs: string): string {
  var l = x.slice(0, i);
  var r = x.slice(i+n);
  return l + vs + r;
}
export default splice;
