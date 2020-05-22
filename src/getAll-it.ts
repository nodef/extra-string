/**
 * Gets values at indices.
 * @param x an iterable
 * @param is indices (sorted)
 */
function* getAll<T>(x: Iterable<T>, is: Iterable<number>): IterableIterator<T> {
  var ii = is[Symbol.iterator]() as Iterator<number, number>;
  var value = -1, j = -1;
  for(var v of x) {
    while(value<=j) {
      var {value, done} = ii.next();
      if(done) return;
      if(value<=j) yield undefined;
    }
    if(value===++j) yield v;
  }
  while(!ii.next().done) yield undefined;
}
export default getAll;
