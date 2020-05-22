import tail from './tail';

/**
 * Removes first character.
 * @param x a string
 */
function shift(x: string): string {
  return tail(x);
}
export default shift;
