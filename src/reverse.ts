/**
 * Reverses the characters.
 * @param x a string
 * @returns reversed
 */
function reverse(x: string): string {
  // https://stackoverflow.com/a/959004/1413259
  return [...x].reverse().join('');
}
export default reverse;
