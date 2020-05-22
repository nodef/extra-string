/**
 * Sets character at index.
 * @param x a string
 * @param i index
 * @param v character
 */
function set(x: string, i: number, v: string): string {
  var l = x.slice(0, i);
  var r = x.slice(i+v.length); 
  return l + v + r;
}
export default set;
