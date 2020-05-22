import iterableMax from '@extra-iterable/max';
import type {mapFn, compareFn} from './_types';

/**
 * Finds largest characters.
 * @param x a string
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
function max<U=string>(x: string, fc: compareFn<string>=null, fm: mapFn<string, string|U>=null): string {
  return iterableMax(x, fc, fm);
}
export default max;
