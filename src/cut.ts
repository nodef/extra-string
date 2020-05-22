import arrayCut from '@extra-array/cut';

/**
 * Breaks string at given indices.
 * @param x a string
 * @param is split indices (sorted)
 */
function cut(x: string, is: Iterable<number>): string[] {
  return arrayCut(x as any, is) as any;
}
export default cut;
