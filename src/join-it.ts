/**
 * Joins values together.
 * @param x an iterable
 * @param sep separator (,)
 */
function join<T>(x: Iterable<T>, sep: string=','): string {
  var a = '';
  for(var v of x)
    a += v+sep;
  return a.substring(0, a.length-sep.length);
}
export default join;
