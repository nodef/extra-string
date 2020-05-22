import index from './index!';

/**
 * Gives characters that cycle through string.
 * @param x a string
 * @param i start index (0)
 * @param n number of characters (X)
 */
function cycle(x: string, i: number=0, n: number=x.length): string {
  var X = x.length;
  if(n<=0 || X===0) return '';
  var i = index(x, i);
  var a = x.slice(i, i+n);
  n -= a.length;
  for(var m=0, M=Math.floor(n/X); m<M; m++)
    a += x;
  return a += x.slice(0, n % X);
}
export default cycle;
