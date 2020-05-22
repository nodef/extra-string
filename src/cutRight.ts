import arrayCutRight from '@extra-array/cut-right';

/**
 * Breaks string after given indices.
 * @param x a string
 * @param is split indices (sorted)
 */
function cutRight(x: string, is: Iterable<number>): string[] {
  return arrayCutRight(x as any, is) as any;
}
export default cutRight;
