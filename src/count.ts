import iterableCount from '@extra-iterable/count';
import type {testFn} from './_types';

/**
 * Counts characters which satisfy a test.
 * @param x a string
 * @param fn test function (v, i, x)
 * @param ths this argument
 */
function count(x: string, fn: testFn<string>, ths: object=null): number {
  return iterableCount(x, fn, ths);
}
export default count;
