import arrayIndexRange from '@extra-array/index-range';

/**
 * Gets index range of part of string.
 * @param x a string
 * @param i start index (-ve: from right) (0)
 * @param I end index (-ve: from right) (end)
 * @returns [start index, end index]
 */
function indexRange(x: string, i: number=0, I: number=x.length): [number, number] {
  // @ts-ignore
  return arrayIndexRange(x, i, I);
}
export default indexRange;
