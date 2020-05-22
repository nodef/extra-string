import arrayChunk from '@extra-array/chunk';

/**
 * Breaks string into chunks of given size.
 * @param x a string
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
function chunk(x: string, n: number=1, s: number=n): string[] {
  return arrayChunk(x as any, n, s) as any;
}
export default chunk;
