/**
 * Gets part of a string.
 * @param x a string
 * @param i start index (-ve: from right) (0)
 * @param I end index (-ve: from right) (end)
 */
function slice(x: string, i: number=0, I: number=x.length): string {
  return x.slice(i, I);
}
export default slice;
