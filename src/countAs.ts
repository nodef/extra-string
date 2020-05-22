import iterableCountAs from '@extra-iterable/count-as';
import type {mapFn} from './_types';

/**
 * Counts occurrences of characters.
 * @param x a string
 * @param fn map function (v, i, x)
 * @param ths this argument
 * @returns Map {character => count}
 */
function countAs<U=string>(x: string, fn: mapFn<string, string|U>=null, ths: object=null): Map<string|U, number> {
  return iterableCountAs(x, fn, ths);
}
export default countAs;
