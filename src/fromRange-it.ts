import END from './END';

/**
 * Generates iterable from given number range.
 * @param v start number (0)
 * @param V stop number, excluding (end)
 * @param s step size (1)
 */
function* fromRange(v: number=0, V: number=END, s: number=1): IterableIterator<number> {
  if(s>=0) { for(; v<V; v+=s) yield v; }
  else { for(; v>V; v+=s) yield v; }
}
export default fromRange;
