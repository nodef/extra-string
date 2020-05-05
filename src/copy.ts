/**
 * Copies part of string to another.
 * @param x target string
 * @param y source string
 * @param j write index (0)
 * @param i read start index (0)
 * @param I read end index (end)
 */
function copy(x: string, y: string, j: number=0, i: number=0, I: number=y.length): string {
  var y1 = y.slice(i, I);
  return x.slice(0, j) + y1 + x.slice(j+y1.length)
}
export default copy;
