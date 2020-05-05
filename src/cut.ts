import arrayCut from '@extra-array/cut';

/**
 * Breaks string at given indices.
 * @param x a string
 * @param is split indices (sorted)
 * @returns [...pieces]
 */
function cut(x: string, is: Iterable<number>): string[] {
  // @ts-ignore
  return arrayCut(x, is);
}
export default cut;
