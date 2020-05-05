import arrayCutRight from '@extra-array/cut-right';

/**
 * Breaks string after given indices.
 * @param x a string
 * @param is split indices (sorted)
 * @returns [...pieces]
 */
function cutRight(x: string, is: Iterable<number>): string[] {
  // @ts-ignore
  return arrayCutRight(x, is);
}
export default cutRight;
