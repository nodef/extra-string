import iterableKeys from '@extra-iterable/keys';

/**
 * Lists all indices.
 * @param x a string
 */
function* keys(x: string): IterableIterator<number> {
  yield* iterableKeys(x);
}
export default keys;
