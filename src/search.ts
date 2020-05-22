import iterableSearch from '@extra-iterable/search';
import type {compareFn, mapFn} from './_types';

/**
 * Searches a character from left.
 * @param x a string
 * @param v search character
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns index of character, -1 if not found
 */
function search(x: string, v: string, fc: compareFn=null, fm: mapFn=null): number {
  return iterableSearch(x, v, fc, fm);
}
export default search;
