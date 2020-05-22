/**
 * Merges values from iterables.
 * @param xs iterables
 */
function* interleave<T>(xs: Iterable<T>[]): IterableIterator<T> {
  var X = xs.length;
  var is = [], os = [];
  for(var n=0, i=0; n<X; n++) {
    is[i] = xs[i][Symbol.iterator]();
    os[i] = is[i].next();
    if(!os[i].done) i++;
  }
  for(var j=0; i>0; j++) {
    var vs = os.map(o => o.value);
    j %= i;
    yield vs[j];
    os[j] = is[j].next();
    if(!os[j].done) continue;
    is.splice(j, 1);
    os.splice(j, 1);
    i--;
  }
}
export default interleave;
