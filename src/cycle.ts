/**
 * Gives characters that cycle through a string.
 * @param x a string
 * @param n number of characters
 */
function cycle(x: string, n: number): string {
  var a = '', X = x.length;
  if(X===0) return a;
  var q = Math.floor(n / X), r = n % X;
  return a.repeat(q) + x.slice(0, r);
}
export default cycle;
