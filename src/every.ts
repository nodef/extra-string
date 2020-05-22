import iterableEvery from '@extra-iterable/every';
import type {testFn} from './_types';

/**
 * Checks if all characters satisfy a test.
 * @param x a string
 * @param fn test function (v, i ,x)
 * @param ths this argument
 */
function every(x: string, fn: testFn<string>=null, ths: object=null): boolean {
  return iterableEvery(x, fn, ths);
}
export default every;
