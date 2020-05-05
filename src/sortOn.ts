import arraySortOn$ from '@extra-array/sort-on-update';
import type {mapFn} from './_types';

/**
 * Arranges characters in an order.
 * @param x a string
 * @param fn map function (v, i, x)
 * @param ths this argument
 */
function sortOn(x: string, fn: mapFn=null, ths: object=null): string {
  return arraySortOn$([...x], fn, ths);
}
export default sortOn;
