import index from './index!';

/**
 * Exchanges two characters.
 * @param x a string
 * @param i an index
 * @param j another index
 */
function swap(x: string, i: number, j: number): string {
  var i = index(x, i),    j = index(x, j);
  var i = Math.min(i, j), j = Math.max(i, j);
  return x.slice(0, i) + x[j] + x.slice(i+1, j) + x[i] + x.slice(j+1);
}
export default swap;
