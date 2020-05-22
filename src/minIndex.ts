import iterableMinIndex from '@extra-iterable/min-index';
import type {mapFn, compareFn} from './_types';

/**
 * Finds index of smallest character.
 * @param x a string
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function minIndex<U>(x: string, fc: compareFn<string>=null, fm: mapFn<string, string|U>=null): number {
  return iterableMinIndex(x, fc, fm);
}
export default minIndex;
