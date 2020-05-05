/**
 * Fills with given character.
 * @param x a string
 * @param v value
 * @param i start index (0)
 * @param I end index (end)
 */
function fill(x: string, v: string, i: number=0, I: number=x.length): string {
  var vs = v.repeat(I-i).slice(0, I-i);
  return x.slice(0, i) + vs + x.slice(I);
}
export default fill;
