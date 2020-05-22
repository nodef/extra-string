import mod from '@extra-math/mod';

/**
 * Rotates characters in a string.
 * @param x a string
 * @param n rotate amount (+ve: left, -ve: right)
 */
function rotate(x: string, n: number): string {
  var i = mod(n, x.length);
  return x.slice(i) + x.slice(0, i);
}
export default rotate;
