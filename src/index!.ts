import arrayIndex from '@extra-array/index';

/**
 * Gets zero-based index.
 * @param x a string
 * @param i index (-ve: from right)
 */
function index(x: string, i: number): number {
  // @ts-ignore
  return arrayIndex(x, i);
}
export default index;
