import iterableSome from '@extra-iterable/some';
import type {testFn} from './_types';

/**
 * Checks if any character satisfies a test.
 * @param x a character
 * @param fn test function (v, i ,x)
 * @param ths this argument
 */
function some(x: string, fn: testFn=null, ths: object=null): boolean {
  return iterableSome(x, fn, ths);
}
export default some;
