/**
 * Repeats a string given times.
 * @param x a string
 * @param n times
 */
function repeat(x: string, n: number): string {
  for(var a=''; n>0; n--)
    a += x;
  return a;
}
export default repeat;
