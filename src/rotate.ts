import arrayRotate$ from '@extra-array/rotate-update';

/**
 * Rotates characters in a string.
 * @param x a string
 * @param n rotate amount (-ve: left, +ve: right)
 */
function rotate(x: string, n: number): string {
  return arrayRotate$([...x], n).join('');
}
export default rotate;
