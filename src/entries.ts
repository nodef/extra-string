import iterableEntries from '@extra-iterable/entries';

/**
 * Lists all index-character pairs.
 * @param x a string
 */
function* entries(x: string): IterableIterator<[number, string]> {
  yield* iterableEntries(x);
}
export default entries;
