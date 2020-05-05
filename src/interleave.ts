import arrayInterleave from '@extra-array/interleave';

/**
 * Places characters of a string between another.
 * @param x a string
 * @param y another string
 * @param m number of values from x (1)
 * @param n number of values from y (1)
 */
function interleave(x: string, y: string, m: number=1, n: number=1): string {
  return arrayInterleave([...x], [...y], m, n).join('');
}
export default interleave;
