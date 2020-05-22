import copy from './copy';

/**
 * Copies part of string within.
 * @param x a string
 * @param j write index (0)
 * @param i read start index (0)
 * @param I read end index (end)
 */
function copyWithin(x: string, j: number=0, i: number=0, I: number=x.length): string {
  return copy(x, x, j, i, I);
}
export default copyWithin;
