import index from './index!';

/**
 * Gets character at index.
 * @param x a string
 * @param i index (-ve: from right)
 */
function get(x: string, i: number): string {
  return x[index(x, i)];
}
export default get;
