/**
 * Gets value at index.
 * @param x an iterable
 * @param i index
 */
function get<T>(x: Iterable<T>, i: number): T {
  var j = -1;
  for(var v of x)
    if(++j===i) return v;
}
export default get;
