import iterableMin from '@extra-iterable/min';
import type {mapFn, compareFn} from './_types';

/**
 * Finds smallest character.
 * @param x a string
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function min<U>(x: string, fc: compareFn<string>=null, fm: mapFn<string, string|U>=null): string {
  return iterableMin(x, fc, fm);
}
export default min;
