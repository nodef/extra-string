/**
 * Copies part of string to another.
 * @param x target string
 * @param y source string
 * @param j write index (0)
 * @param i read start index (0)
 * @param I read end index (end)
 */
function copy(x: string, y: string, j: number=0, i: number=0, I: number=y.length): string {
  var ym = y.slice(i, I);
  var xl = x.slice(0, j);
  var xr = x.slice(j+ym.length);
  return xl + ym + xr;
}
export default copy;
