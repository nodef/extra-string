import arrayChunk from '@extra-array/chunk';

/**
 * Breaks string into chunks of given size.
 * @param x a string
 * @param n chunk size (1)
 * @returns chunks
 */
function chunk(x: string, n: number=1): string[] {
  // @ts-ignore
  return arrayChunk(x, n);
}
export default chunk;
