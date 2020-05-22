import iterableMaxIndex from '@extra-iterable/max-index';
import type {mapFn, compareFn} from './_types';

/**
 * Finds index of largest character.
 * @param x a string
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function maxIndex<U>(x: string, fc: compareFn<string>=null, fm: mapFn<string, string|U>=null): number {
  return iterableMaxIndex(x, fc, fm);
}
export default maxIndex;
