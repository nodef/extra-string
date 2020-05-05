/**
 * Sets character at index.
 * @param x a string
 * @param i index (-ve: from right)
 * @param v value
 */
function set(x: string, i: number, v: string): string {
  return x.slice(0, i) + v + x.slice(i+v.length);
}
export default set;
