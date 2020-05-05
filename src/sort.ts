import cmp from './_cmp';
import type {compareFn} from './_types';

/**
 * Arranges characters in an order.
 * @param x a string
 * @param fn compare function (a, b)
 */
function sort(x: string, fn: compareFn=null): string {
  var fn = fn||cmp;
  return [...x].sort(fn).join('');
}
export default sort;
