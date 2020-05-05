import compare from './compare';

/**
 * Checks if two strings are equal.
 * @param x a string
 * @param y another string
 */
function isEqual(x: string, y: string): boolean {
  return compare(x, y)===0;
}
export default isEqual;
