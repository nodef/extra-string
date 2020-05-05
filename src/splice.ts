/**
 * Removes or replaces existing characters.
 * @param x a string
 * @param i remove index
 * @param n number of characters to remove (rest)
 * @param cs characters to insert
 * @returns [removed, string]
 */
function splice(x: string, i: number, n: number=x.length-i, cs: string): [string, string] {
  var r = x.slice(i, i+n);
  var u = x.slice(0, i) + cs + x.slice(i+n);
  return [r, u];
}
export default splice;
