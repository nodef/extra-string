import union from './union';
import type {compareFn, mapFn} from './_types';

/**
 * Removes duplicate values.
 * @param x an iterable
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function* unique<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
  yield* union([], x, fc, fm);
}
export default unique;
