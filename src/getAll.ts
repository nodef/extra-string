import get from './get';

/**
 * Gets characters at indices.
 * @param x a string
 * @param is indices (-ve: from right)
 */
function getAll(x: string, is: Iterable<number>): string {
  var a = '';
  for(var i of is)
    a += get(x, i);
  return a;
}
export default getAll;
