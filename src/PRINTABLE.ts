import DIGITS from './DIGITS';
import LETTERS from './LETTERS';
import PUNCTUATION from './PUNCTUATION';
import WHITESPACE from './WHITESPACE';

/**
 * Combination of digits, letters, punctuation, and whitespace.
 */
const PRINTABLE: string = DIGITS + LETTERS + PUNCTUATION + WHITESPACE;
export default PRINTABLE;
