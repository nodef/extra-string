/**
 * Finds last index of a character.
 * @param x a string
 * @param v search character
 * @param i start index
 */
function lastIndexOf(x: string, v: string, i: number=x.length-1): number {
  return x.lastIndexOf(v, i);
}
export default lastIndexOf;
