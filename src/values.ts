import iterableValues from '@extra-iterable/values';

/**
 * Lists all characters.
 * @param x a string
 */
function* values<T>(x: Iterable<T>): IterableIterator<T> {
  yield* iterableValues(x);
}
export default values;
