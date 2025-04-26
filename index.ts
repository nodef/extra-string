//#region CONSTANTS
/** Decimal digits 0-9. */
export const DIGITS: string     = "0123456789";
/** Octal digits 0-7. */
export const OCT_DIGITS: string = "01234567";
/** Hexadecimal digits 0-9, A-F, a-f. */
export const HEX_DIGITS: string = "0123456789ABCDEFabcdef";

/** English letters A-Z. */
export const UPPERCASE: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/** English letters a-z. */
export const LOWERCASE: string = "abcdefghijklmnopqrstuvwxyz";
/** Combination of uppercase, lowercase english letters. */
export const LETTERS: string = UPPERCASE + LOWERCASE;

/** Punctuation symbols (ASCII). */
export const PUNCTUATION: string = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
/** The string "\t\n\x0b\x0c\r ". */
export const WHITESPACE: string  = "\t\n\x0b\x0c\r ";

/** Combination of digits, letters, punctuation, and whitespace (ASCII). */
export const PRINTABLE: string = DIGITS + LETTERS + PUNCTUATION + WHITESPACE;

/** Minimum unicode code point. */
export const MIN_CODE_POINT: number = 0x000000;
/** Maximum unicode code point. */
export const MAX_CODE_POINT: number = 0x10FFFF;
//#endregion




//#region UTILITY FUNCTIONS
/**
 * Return the same (first) value.
 * @param v a value
 * @returns v
 */
function IDENTITY<T>(v: T): T {
  return v;
}
//#endregion




//#region BUILT-IN
//#region GENERATE
/**
 * Get characters whose UTF-16 code units are given.
 * @param codes UTF-16 code units
 * @returns characters
 */
export function fromCharCode(...codes: number[]): string {
  return String.fromCharCode(...codes);
}


/**
 * Get characters whose unicode code points are given.
 * @param codes unicode code points
 * @returns characters
 */
export function fromCodePoint(...codes: number[]): string {
  return String.fromCodePoint(...codes);
}


/**
 * Combine multiple values into a string.
 * @param values values
 * @returns combined string
 */
export function concat(...values: unknown[]): string {
  return "".concat(...values as string[]);
}


/**
 * Repeat string given number of times.
 * @param x a string
 * @param times number of times
 * @returns repeated string
 */
export function repeat(x: string, times: number): string {
  return x.repeat(times);
}
//#endregion




//#region ABOUT
/**
 * Get primitive value of string object.
 * @param x a string object
 * @returns primitive value
 */
export function valueOf(x: string): string {
  return x.valueOf();
}


/**
 * Get length of string.
 * @param x a string
 * @returns length of string
 */
export function length(x: string): number {
  return x.length;
}
export {length as size};
// TODO: countCharacters ([...str].length)
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length


/**
 * Get character at given index in string.
 * @param x a string
 * @param at character index
 * @return character
 */
export function charAt(x: string, at: number): string {
  return x.charAt(at);
}
// TODO: Getting whole characters (non-BMP, surrogate pairs)
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt


/**
 * Get UTF-16 code unit of a character in string.
 * @param x a string
 * @param at character index
 * @returns UTF-16 code unit
 */
export function charCodeAt(x: string, at: number): number {
  return x.charCodeAt(at);
}
// TODO: Getting whole characters (non-BMP, surrogate pairs)
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt


/**
 * Get unicode code point of a character in string.
 * @param x a string
 * @param at character index
 * @returns unicode code point
 */
export function codePointAt(x: string, at: number): number | undefined {
  return x.codePointAt(at);
}
//#endregion




//#region COMPARE
/**
 * Compare two strings in the current or given locale.
 * @param x a string
 * @param y another string
 * @param locales language or locale tag(s)
 * @param options comparison options
 * @returns x<y: -ve, x=y: 0, x>y: +ve
 * @example
 * ```javascript
 * xstring.localeCompare('abra', 'bulbasaur');
 * // → -1
 *
 * xstring.localeCompare('bulbasaur', 'bulbasaur');
 * // → 0
 *
 * xstring.localeCompare('charmeleon', 'bulbasaur');
 * // → 1
 * ```
 */
export function localeCompare(x: string, y: string, locales?: string | string[], options?: Intl.CollatorOptions): number {
  return x.localeCompare(y, locales, options);
}
//#endregion




//#region SEARCH
/**
 * Check if string has a given infix.
 * @param x a string
 * @param infix infix to look for
 * @param start start index [0]
 * @returns has infix?
 */
export function includes(x: string, infix: string, start?: number): boolean {
  return x.includes(infix, start);
}


/**
 * Check if string has a given prefix.
 * @param x a string
 * @param prefix prefix to look for
 * @param start start index [0]
 * @returns has prefix?
 */
export function startsWith(x: string, prefix: string, start?: number): boolean {
  return x.startsWith(prefix, start);
}


/**
 * Check if string has a given suffix.
 * @param x a string
 * @param suffix suffix to look for
 * @param end end index [end]
 * @returns has suffix?
 */
export function endsWith(x: string, suffix: string, end?: number): boolean {
  return x.endsWith(suffix, end);
}


/**
 * Get first index of a given infix in string.
 * @param x a string
 * @param infix infix to look for
 * @param start start index [0]
 * @returns first index of infix
 */
export function indexOf(x: string, infix: string, start?: number): number {
  return x.indexOf(infix, start);
}


/**
 * Get last index of a given infix in string.
 * @param x a string
 * @param infix infix to look for
 * @param rstart reverse start index [end-1]
 * @returns last index of infix
 */
export function lastIndexOf(x: string, infix: string, rstart?: number): number {
  return x.lastIndexOf(infix, rstart);
}


/**
 * Get first index of regular expression match in string.
 * @param x a string
 * @param regexp regular expression
 * @returns first index of match
 */
export function search(x: string, regexp: string | RegExp): number {
  return x.search(regexp);
}


/**
 * Get results of matching string with regular expression.
 * @param x a string
 * @param regexp regular expression
 * @returns /g: all matches, else: match with capturing groups or null
 */
export function match(x: string, regexp: string | RegExp): RegExpMatchArray | null {
  return x.match(regexp);
}


/**
 * Get detailed results of matching string with regular expression.
 * @param x a string
 * @param regexp regular expression (with /g)
 * @returns match with capturing groups ...
 */
export function matchAll(x: string, regexp: RegExp): IterableIterator<RegExpMatchArray> {
  return x.matchAll(regexp);
}
//#endregion




//#region CONVERT
/**
 * Get string representation of string.
 * @param x a string
 * @returns string representation
 */
export function toString(x: string): string {
  return x.toString();
}
//#endregion




//#region PART
/**
 * Extract section of string.
 * @param x a string
 * @param start start index (-ve ⇒ from right) [0]
 * @param end end index (-ve ⇒ from right) [end]
 * @returns section of string
 */
export function slice(x: string, start?: number, end?: number): string {
  return x.slice(start, end);
}


/**
 * Extract section of string.
 * @param x a string
 * @param start start index (-ve ⇒ 0) [0]
 * @param end end index (-ve ⇒ 0) [end]
 * @returns section of string
 */
export function substring(x: string, start: number, end?: number): string {
  return x.substring(start, end);
}


/**
 * Split string by a given separator into substrings.
 * @param x a string
 * @param separator separator string or regular expression
 * @param limit maximum number of substrings
 * @returns substrings
 */
export function split(x: string, separator?: string | RegExp, limit?: number): string[] {
  return x.split(separator as string | RegExp, limit);
}
//#endregion




//#region WHITESPACE
/**
 * Remove whitespace from begining of string.
 * @param x a string
 * @returns trimmed string
 */
export function trimStart(x: string): string {
  return x.trimStart();
}


/**
 * Remove whitespace from end of string.
 * @param x a string
 * @returns trimmed string
 */
export function trimEnd(x: string): string {
  return x.trimEnd();
}


/**
 * Remove whitespace from begining and end of string.
 * @param x a string
 * @returns trimmed string
 */
export function trim(x: string): string {
  return x.trim();
}


/**
 * Pad start of string to fit a desired length.
 * @param x a string
 * @param length desired length
 * @param padding pad with [ ]
 * @returns padded string
 */
export function padStart(x: string, length: number, padding: string=" "): string {
  return x.padStart(length, padding);
}


/**
 * Pad end of string to fit a desired length.
 * @param x a string
 * @param length desired length
 * @param padding pad with [ ]
 * @returns padded string
 */
 export function padEnd(x: string, length: number, padding: string=" "): string {
  return x.padEnd(length, padding);
}
//#endregion




//#region TRANSFORM (CASE)
/**
 * Convert string to upper case.
 * @param x a string
 * @returns upper cased string
 */
export function toUpperCase(x: string): string {
  return x.toUpperCase();
}


/**
 * Convert string to upper case, as per locale-specific case mappings.
 * @param x a string
 * @param locales BCP 47 language tag(s)
 * @returns upper cased string
 */
export function toLocaleUpperCase(x: string, locales?: string | string[]): string {
  return x.toLocaleUpperCase(locales);
}


/**
 * Convert string to lower case.
 * @param x a string
 * @returns lower cased string
 */
export function toLowerCase(x: string): string {
  return x.toLowerCase();
}


/**
 * Convert string to lower case, as per locale-specific case mappings.
 * @param x a string
 * @param locales BCP 47 language tag(s)
 * @returns lower cased string
 */
export function toLocaleLowerCase(x: string, locales?: string | string[]): string {
  return x.toLocaleLowerCase(locales);
}
//#endregion




//#region TRANSFORM
/** Handle replacement of matched string and parameters with another string. */
export type ReplaceFunction = (substring: string, ...args: unknown[]) => string;

/**
 * Replace first match of given pattern by replacement.
 * @param x a string
 * @param pattern substring to match
 * @param replacement replacement substring
 * @returns replaced string
 */
export function replace(x: string, pattern: string, replacement: string): string;

/**
 * Replace first or all matches of given pattern by replacement.
 * @param x a string
 * @param pattern pattern to match
 * @param replacement replacement substring or replacer
 * @returns replaced string
 */
export function replace(x: string, pattern: string | RegExp, replacement: string | ReplaceFunction): string;

export function replace(x: string, pattern: string | RegExp, replacement: string | ReplaceFunction): string {
  return x.replace(pattern, replacement as string);
}


// export function replaceAll(x: string, org: string, to: string): string {
//   return x.replaceAll(org, to);
// }


/**
 * Normalize string by given form, as per Unicode Standard Annex #15.
 * @param x a string
 * @param form normalization form (NFC, NFD, NFKC, NFKD)
 * @returns normalized string
 */
export function normalize(x: string, form?: string): string {
  return x.normalize(form);
}
//#endregion
//#endregion




//#region BUILT-IN (ARRAY)
//#region GENERATE
/**
 * Create string from arguments, like `Array.of()`.
 * @param args arguments
 * @returns p + q + ... | [p, q, ...] = args
 * @example
 * ```javascript
 * xstring.of('a', 1);
 * // → 'a1'
 *
 * xstring.of(1, 2);
 * // → '12'
 *
 * xstring.of();
 * // → ''
 * ```
 */
export function of(...args: string[]): string {
  let a = "";
  for (let i=0, I=args.length; i<I; i++)
    a += args[i];
  return a;
}


/**
 * Handle transformation of a substring (or character) to another.
 * @param v a substring (or character)
 * @param i index of substring
 * @param x string containing the substring
 * @returns transformed substring
 */
export type MapFunction = (v: string, i: number, x?: string) => string;

/**
 * Create string from iterable, like `Array.from()`.
 * @param xs list of strings (iterable)
 * @param fm map function (x, i)
 * @param ths this argument
 * @returns p + q + ... | [p, q, ...] = xs
 * @example
 * ```javascript
 * xstring.from(['a', 'b']);
 * // → 'ab'
 *
 * xstring.from('abc', (v) => String.fromCharCode(v.charCodeAt()+1));
 * // → 'bcd'
 *
 * xstring.from(new Set().add('a').add('b'));
 * // → 'ab'
 *
 * xstring.from(new Map().set('a', 1).set('b', 2));
 * // → 'a,1b,2'
 * ```
 */
export function from(xs: Iterable<string>, fm?: MapFunction, ths?: unknown): string {
  let a = "", i = 0;
  for (const x of xs) {
    a += fm? fm.call(ths, x, i) : x;
    i++;
  }
  return a;
}
//#endregion




//#region ABOUT
/**
 * Get keys of string, like `Array.keys()`.
 * @param x a string
 * @returns 0, 1, ...
 * @example
 * ```javascript
 * xstring.keys('ash');
 * // → [0, 1, 2]
 *
 * xstring.keys('');
 * // → []
 * ```
 */
function* _keys(x: string): IterableIterator<number> {
  let i = 0;
  for (const _c of x)
    yield i++;
}


/**
 * Get characters of string, like `Array.values()`.
 * @param x a string
 * @returns x[0], x[1], ...
 */
function* _values(x: string): IterableIterator<string> {
  for (const c of x)
    yield c;
}
// export {values as characters};


/**
 * Get entries of string, like `Array.entries()`.
 * @param x a string
 * @returns [0, x[0]], [1, x[1]], ...
 * @example
 * ```javascript
 * xstring.entries('ship');
 * // → [[0, 's'], [1, 'h'], [2, 'i'], [3, 'p']]
 *
 * xstring.entries('');
 * // → []
 * ```
 */
function* _entries(x: string): IterableIterator<[number, string]> {
  let i = 0;
  for (const c of x)
    yield [i++, c];
}
//#endregion




//#region TRANSFORM
/**
 * Remove/replace characters in a string.
 * @param x a string
 * @param start start index
 * @param remove number of characters to remove
 * @param add substring to add
 * @returns x[0:i] + add + x[i+r] | i = start, r = remove
 */
export function splice(x: string, start: number, remove: number=0, add: string=""): string {
  return x.slice(0, start) + add + x.slice(start+remove);
}


/**
 * Reverse a string.
 * @param x a string
 * @returns reversed string
 */
export function reverse(x: string): string {
  return [...x].reverse().join("");
}
// - https://stackoverflow.com/a/959004/1413259
// - https://github.com/mathiasbynens/esrever


/**
 * Handle comparison of two strings.
 * @param a a string
 * @param b another string
 * @returns x<y: -ve, x=y: 0, x>y: +ve
 */
export type CompareFunction = (a: string, b: string) => number;

/**
 * Arrange characters in an order.
 * @param x a string
 * @param fc compare function (a, b)
 */
export function sort(x: string, fc?: CompareFunction): string {
  return [...x].sort(fc).join("");
}
//#endregion




//#region FUNCTIONAL
/**
 * Handle selection of a substring (or character) in string.
 * @param v a substring (or character)
 * @param i index of substring in string
 * @param x string containing the substring
 * @returns whether it is selected
 */
export type TestFunction = (v: string, i: number, x: string) => boolean;

/**
 * Filter characters which pass a test.
 * @param x a string
 * @param ft test function (v, i, x)
 * @param ths this argument
 * @returns characters which pass the test
 * @example
 * ```javascript
 * xstring.filter('g00df00d', (v) => v<='f');
 * // → '00df00d'
 *
 * xstring.filter('badfood', (v) => v<='f');
 * // → 'badfd'
 *
 * xstring.filter('', (v) => v<='f');
 * // → ''
 * ```
 */
export function filter(x: string, ft: TestFunction, ths?: unknown): string {
  let a = "", i = 0;
  for (const c of x)
    if (ft.call(ths, c, i++, x)) a += c;
  return a;
}
//#endregion
//#endregion




//#region CUSTOM
//#region GENERATE
/** A buffer containing only spaces, for `spaces()`. */
const SPACE_BUFFER: string = " ".repeat(1024);

/**
 * Get a string of spaces.
 * @param n number of spaces
 * @returns string of spaces
 * @example
 * ```javascript
 * xstring.spaces(4);
 * // → '    '
 *
 * xstring.spaces(6);
 * // → '      '
 *
 * xstring.spaces(0);
 * // → ''
 *
 * xstring.spaces(-1);
 * // → ''
 * ```
 */
export function spaces(n: number): string {
  const S = SPACE_BUFFER.length;
  if (n<S) return SPACE_BUFFER.slice(0, n);
  return SPACE_BUFFER.repeat(n/S) + " ".repeat(n%S);
}
//#endregion




//#region ABOUT
/**
 * Check if value is a string.
 * @param v a value
 * @returns whether value is a string
 * @example
 * ```javascript
 * xstring.is('panini');
 * // → true
 *
 * xstring.is("valmiki");
 * // → true
 *
 * xstring.is(String('vyasa'));
 * // → true
 *
 * xstring.is({shakespeare: 'literature'});
 * // → false
 *
 * xstring.is(71811313518);
 * // → false (what's this?)
 *
 * xstring.is();
 * // → false
 * ```
 */
export function is(v: unknown): boolean {
  return typeof v==="string";
}


/**
 * Check if string is empty.
 * @param x a string
 * @returns whether string is empty
 */
export function isEmpty(x: string): boolean {
  return x.length===0;
}


/**
 * Check if string is a character.
 * @param x a string
 * @returns whether string is a character
 */
export function isCharacter(x: string): boolean {
  return x.length===1;
}


/**
 * Get non-negative index within string.
 * @param x a string
 * @param at character index
 * @returns +ve index
 */
export function index(x: string, at: number): number {
  // Can be rewritten with a math/number function?
  if (at<0) return Math.max(0, x.length + at);
  return Math.min(at, x.length);
}


/**
 * Get non-negative index range within string.
 * @param x a string
 * @param start start index
 * @param end end index
 * @returns +ve index range [start, end]
 */
export function indexRange(x: string, start: number, end: number): [number, number] {
  // Can be rewritten with a math/number function?
  start = index(x, start);
  end   = index(x, end);
  return [Math.min(start, end), Math.max(start, end)];
}


/**
 * Get unicode code point range of string.
 * @param x a string
 * @returns code point range [min, max]
 */
export function codePointRange(x: string): [number, number] {
  let min = MAX_CODE_POINT;
  let max = MIN_CODE_POINT;
  for (const c of x) {
    const v = c.codePointAt(0) as number;
    min = Math.min(min, v);
    max = Math.max(max, v);
  }
  return [min, max];
}
//#endregion




//#region COMPARE
/**
 * Compare two strings.
 * @param x a string
 * @param y another string
 * @returns x<y: -ve, x=y: 0, x>y: +ve
 */
export function compare(x: string, y: string): number {
  return x<y? -1 : (x>y? 1 : 0);
}


/**
 * Check if two strings are equal.
 * @param x a string
 * @param y another string
 * @returns x=y?
 */
export function isEqual(x: string, y: string): boolean {
  return x===y;
}
//#endregion




//#region SEARCH
// Check if string has a given prefix.
export {startsWith as isPrefix};
// Check if string has a given suffix.
export {endsWith   as isSuffix};
// Check if string has a given infix.
export {includes   as isInfix};
//#endregion




//#region PART
/**
 * Get character at a given index in string.
 * @param x a string
 * @param at character index (-ve ⇒ from right)
 * @returns x[i] | i = at
 */
export function get(x: string, at: number): string {
  return x.charAt(at>=0? at : x.length+at);
}
export {get as at};


/**
 * Get characters at indices.
 * @param x a string
 * @param ats character indices (-ve ⇒ from right)
 * @returns x[i] + x[j] + ... | [i, j, ...] = ats
 */
export function getAll(x: string, ats: Iterable<number>): string {
  let a = "";
  for (const at of ats)
    a += get(x, at);
  return a;
}


/**
 * Write a substring at specified index in string.
 * @param x a string
 * @param at write index (-ve ⇒ from right)
 * @param write substring to write
 * @returns x[0:i] + w + x[i+|w|:] | i = at, w = write
 */
export function set(x: string, at: number, write: string): string {
  return x.slice(0, at) + write + x.slice(at+write.length);
}


/**
 * Get leftmost part of string.
 * @param x a string
 * @param count number of characters [1]
 * @returns x[0:n] | n = count
 * @example
 * ```javascript
 * xstring.begin('Thai Sweet Chilli Sauce', 4);
 * // → 'Thai'
 *
 * xstring.begin('Thai Sweet Chilli Sauce', 10);
 * // → 'Thai Sweet'
 *
 * xstring.begin('Thai Sweet Chilli Sauce', 80);
 * // → 'Thai Sweet Chilli Sauce'
 *
 * xstring.begin('Thai Sweet Chilli Sauce', -1);
 * // → ''
 * ```
 */
export function begin(x: string, count: number=1): string {
  return x.slice(0, count);
}
export {begin as prefix};
export {begin as left};


/**
 * Get a portion of string from middle.
 * @param x a string
 * @param start start index
 * @param count number of characters [1]
 * @returns x[i:i+n] | i = start, n = count
 * @example
 * ```javascript
 * xstring.mid('Thai Sweet Chilli Sauce', 5, 5);
 * // → 'Sweet'
 *
 * xstring.mid('Thai Sweet Chilli Sauce', 5, 12);
 * // → 'Sweet Chilli'
 *
 * xstring.mid('Thai Sweet Chilli Sauce', 5);
 * // → 'Sweet Chilli Sauce'
 *
 * xstring.mid('Thai Sweet Chilli Sauce', 5, -1);
 * // → ''
 *
 * xstring.mid('Thai Sweet Chilli Sauce', -5);
 * // → 'Sauce'
 * ```
 */
export function middle(x: string, start: number, count: number=1): string {
  return x.slice(start, start+count);
}
export {middle as infix};


/**
 * Get rightmost part of string.
 * @param x a string
 * @param count number of characters [1]
 * @returns x[|x|-n:] | n = count
 * @example
 * ```javascript
 * xstring.end('Thai Sweet Chilli Sauce', 5);
 * // → 'Sauce'
 *
 * xstring.end('Thai Sweet Chilli Sauce', 12);
 * // → 'Chilli Sauce'
 *
 * xstring.end('Thai Sweet Chilli Sauce', 80);
 * // → 'Thai Sweet Chilli Sauce'
 *
 * xstring.end('Thai Sweet Chilli Sauce', -1);
 * // → ''
 * ```
 */
export function end(x: string, count: number=1): string {
  return x.slice(x.length-count);
}
export {end as suffix};
export {end as right};
//#endregion




//#region PART (TODO)
// import {chunk as arrayChunk} from "extra-array";

/**
 * Break string into chunks of given size.
 * @param x a string
 * @param n chunk size (1)
 * @param s chunk step (n)
 */
// function chunk(x: string, n: number=1, s: number=n): string[] {
//   return arrayChunk(x as any, n, s) as any;
// }


// import {infixes as arrayInfixes} from "extra-array";

/**
 * Lists all possible infixes.
 * @param x a string
 * @param n number of values (-1 ⇒ any)
 */
// function infixes(x: string, n: number=-1): IterableIterator<string> {
//   return arrayInfixes(x as any, n) as any;
// }


// import {prefixes as arrayPrefixes} from "extra-array";

/**
 * Lists all possible prefixes.
 * @param x a string
 * @param n number of values (-1 ⇒ any)
 */
// function prefixes(x: string, n: number=-1): IterableIterator<string> {
//   return arrayPrefixes(x as any, n) as any;
// }


// import {suffixes as arraySuffixes} from "extra-array";

/**
 * Lists all possible suffixes.
 * @param x a string
 * @param n number of values (-1 ⇒ any)
 */
// function suffixes(x: string, n: number=-1): IterableIterator<string> {
//   return arraySuffixes(x as any, n) as any;
// }
//#endregion




//#region SEARCH
// Get length of longest string in an iterable.
function maxLength(xs: Iterable<string>): number {
  let a = 0;
  for (const x of xs)
    a = Math.max(a, x.length);
  return a;
}

/**
 * Get set-listed symbol at specified index in string.
 * @param x a string
 * @param set set of symbols
 * @param i start index [0]
 * @param L max symbol length [0 ⇒ unspecified]
 * @example
 * ```javascript
 * xstring.symbolAt('rho+pi', new Set().add('pi').add('rho').add('+').add('-'), 0);
 * // → 'rho'
 *
 * xstring.symbolAt('rho+pi', new Set().add('pi').add('rho').add('+').add('-'), 2);
 * // → undefined (no match at 2)
 *
 * xstring.symbolAt('rho+pi', new Set().add('pi').add('rho').add('+').add('-'), 3);
 * // → '+'
 *
 * xstring.symbolAt('rho+pi', new Set(['pi', 'rho', '+', '-']), 4, 3);
 * // → 'pi' (longest symbol='rho')
 * ```
 */
function _symbolAt(x: string, set: Set<string>, i: number = 0, L: number = 0) {
  if (L===0) L = maxLength(set);
  for (let l=L; l>0; l--) {
    const sym = x.substring(i, i+l);
    if (set.has(sym)) return sym;
  }
  return null;
}


/**
 * Get the longest common infix between strings.
 * @param x a string
 * @param y another string
 * @returns longest common infix
 * @example
 * ```javascript
 * xstring.longestCommonInfix('mangala', 'mangalyaan');
 * // → 'mangal'
 *
 * xstring.longestCommonInfix('easter', 'tertiary');
 * // → 'ter'
 *
 * xstring.longestCommonInfix('dismiss', 'mississipi');
 * // → 'miss'
 * ```
 */
export function longestCommonInfix(x: string, y: string): string {
  let ai = 0, al = 0;
  for (let i=0, I=x.length; i<I; i++) {
    for (let j=0, J=y.length, l=0; j<J; j++) {
      l = x[i+l]===y[j]? l+1 : 0;
      if (l>al) { ai = j-l+1; al = l; }
    }
  }
  return y.substring(ai, ai+al);
}


/**
 * Get the longest common prefix of strings.
 * @param x a string
 * @param y another string
 * @returns longest common prefix
 * @example
 * ```javascript
 * xstring.longestCommonPrefix('peacock', 'peahen');
 * // → 'pea'
 *
 * xstring.longestCommonPrefix('inception', 'interstellar');
 * // → 'in'
 *
 * xstring.longestCommonPrefix('mars', 'tars');
 * // → ''
 * ```
 */
export function longestCommonPrefix(x: string, y: string): string {
  let i = 0;
  for (const I=Math.min(x.length, y.length); i<I; i++)
    if (x[i]!==y[i]) break;
  return x.substring(0, i);
}


/**
 * Get the longest common suffix of strings.
 * @param x a string
 * @param y another string
 * @returns longest common suffix
 * @example
 * ```javascript
 * xstring.longestCommonSuffix('peacock', 'hancock');
 * // → 'cock'
 *
 * xstring.longestCommonSuffix('mars', 'tars');
 * // → 'ars'
 *
 * xstring.longestCommonSuffix('chief', 'master');
 * // → ''
 * ```
 */
export function longestCommonSuffix(x: string, y: string): string {
  let i = x.length-1;
  for (let j=y.length-1; i>=0 && j>=0; i--, j--)
    if (x[i]!==y[j]) break;
  return x.substring(i+1);
}


/**
 * Get the longest uncommon infixes of strings.
 * @param x a string
 * @param y another string
 * @returns [infix1, infix2]
 * @example
 * ```javascript
 * xstring.longestUncommonInfixes('rollcage', 'ridecage');
 * // → ['oll', 'ide']
 *
 * xstring.longestUncommonInfixes('riverbed', 'roverbed');
 * // → ['i', 'o']
 *
 * xstring.longestUncommonInfixes('chocolatier', 'engineer');
 * // → ['chocolati', 'engine']
 * ```
 */
export function longestUncommonInfixes(x: string, y: string): [string, string] {
  const X = x.length, Y = y.length;
  const i = longestCommonPrefix(x, y).length;
  const j = longestCommonSuffix(x, y).length;
  return [x.substring(i, X-j), y.substring(i, Y-j)];
}
//#endregion




//#region TRANSFORM (SUPER/SUBSCRIPT)
/** Superscript characters that can be transformed to baseline with `SUPERSCRIPT_TARGET`. */
const SUPERSCRIPT_SOURCE = "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵝᵞᵟᶿᶥᵠᵡᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂᶦᶫᶰᶸᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ";
/** Baseline characters that can be transformed from superscript with `SUPERSCRIPT_SOURCE`. */
const SUPERSCRIPT_TARGET = "0123456789+-=()βγδθιφχABDEGHIJKLMNOPRTUVWILNUabcdefghijklmnoprstuvwxyz";
/** Subscript characters that can be transformed to baseline with `SUBSCRIPT_TARGET`. */
const SUBSCRIPT_SOURCE   = "₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₔᵦᵧᵨᵩᵪₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ";
/** Baseline characters that can be transformed from subscript with `SUBSCRIPT_TARGET`. */
const SUBSCRIPT_TARGET   = "0123456789+-=()əβγρφχaehijklmnoprstuvx";

function toBaselineDirect(x: string): string {
  let a = "";
  for (let c of x) {
    const j = SUPERSCRIPT_SOURCE.indexOf(c);
    const k = SUBSCRIPT_SOURCE.indexOf(c);
    if (j>=0) c = SUPERSCRIPT_TARGET[j];
    if (k>=0) c = SUPERSCRIPT_TARGET[k];
    a += c;
  }
  return a;
}

function toBaselineIndirect(x: string, fsup: MapFunction, fsub: MapFunction): string {
  let a   = "", i = 0, t = 0;
  let tmp = "", mode = 0;
  fsup = fsup || IDENTITY;
  fsub = fsub || IDENTITY;
  for (const c of x) {
    t = tmp.length;
    const j = SUPERSCRIPT_SOURCE.indexOf(c);
    const k = SUBSCRIPT_SOURCE.indexOf(c);
    const m = (j>=0? 1:0) + (k>=0? 2:0);
    if (m!==mode && t) a += mode===0? tmp : (mode===1? fsup(tmp, i-t) : fsub(tmp, i-t));
    tmp += m===0? c : (m===1? SUPERSCRIPT_TARGET[j] : SUBSCRIPT_TARGET[k]);
    mode = m; i++;
  }
  if (tmp) a += mode===0? tmp : (mode===1? fsup(tmp, i-t) : fsub(tmp, i-t));
  return a;
}

/**
 * Convert a string to baseline characters (limited support).
 * @param x a string
 * @param fsup map function for superscript characters (v, i, x)
 * @param fsub map function for subscript characters (v, i, x)
 * @returns baselined string
 * @example
 * ```javascript
 * xstring.toBaseline('ax²+bx+c');
 * // → 'ax2+bx+c'
 *
 * xstring.toBaseline('H₂SO₄ beaker');
 * // → 'H2SO4 beaker'
 *
 * xstring.toBaseline('6.626 x 10⁻³⁴', ['^']);
 * // → '6.626 x 10^-34'
 *
 * xstring.toBaseline('1010₂', null, [' (base-', ')']);
 * // → '1010 (base-2)'
 * ```
 */
export function toBaseline(x: string, fsup: MapFunction | null=null, fsub: MapFunction | null=null): string {
  if (!fsup && !fsub) return toBaselineDirect(x);
  return toBaselineIndirect(x, fsup || IDENTITY, fsub || IDENTITY);
}


/** Superscript ASCII characters after space (32). */
const SUPERSCRIPT_LOOKUP = "        ⁽⁾ ⁺ ⁻  ⁰¹²³⁴⁵⁶⁷⁸⁹   ⁼   ᴬᴮ ᴰᴱ ᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾ ᴿ ᵀᵁ ᵂ         ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ ʳˢᵗᵘᵛʷˣʸᶻ     ";

/**
 * Convert a string to superscript characters (limited support).
 * @param x a string
 * @returns superscripted characters
 * @example
 * ```javascript
 * xstring.toSuperscript('hello world');
 * // → 'ʰᵉˡˡᵒ ʷᵒʳˡᵈ'
 *
 * xstring.toSuperscript('DECCAN PLATEAU');
 * // → 'ᴰᴱCCᴬᴺ ᴾᴸᴬᵀᴱᴬᵁ'
 *
 * '6.626 x 10' + xstring.toSuperscript('-34');
 * // → '6.626 x 10⁻³⁴' (Planck's constant)
 * ```
 */
export function toSuperscript(x: string): string {
  let a = "";
  for (const c of x) {
    const d = SUPERSCRIPT_LOOKUP[c.charCodeAt(0) - 32] || " ";
    a += d===" "? c : d;
  }
  return a;
}


/** Subscript ASCII characters after space (32). */
const SUBSCRIPT_LOOKUP = "        ₍₎ ₊ ₋  ₀₁₂₃₄₅₆₇₈₉   ₌                                   ₐ   ₑ  ₕᵢⱼₖₗₘₙₒₚ ᵣₛₜᵤᵥ ₓ       ";

/**
 * Convert a string to superscript characters (limited support).
 * @param x a string
 * @returns superscripted characters
 * @example
 * ```javascript
 * xstring.toSubscript('hello world');
 * // → 'ₕₑₗₗₒ wₒᵣₗd'
 *
 * xstring.toSubscript('DECCAN PLATEAU');
 * // → 'DECCAN PLATEAU'
 *
 * 'KNO' + xstring.toSubscript('3');
 * // → 'KNO₃' (Potassium Nitrate)
 * ```
 */
export function toSubscript(x: string): string {
  let a = "";
  for (const c of x) {
    const d = SUBSCRIPT_LOOKUP[c.charCodeAt(0) - 32] || " ";
    a += d===" "? c : d;
  }
  return a;
}
//#endregion




//#region TRANSFORM (CASE)
// Convert only the first letter of a string to upper-case, remaining lower-case.
function toBeginUpperCase(x: string): string {
  return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
}

// Convert only the first letter of a string to upper-case, remaining as-is.
function toBeginUpperAnyCase(x: string): string {
  return x.slice(0, 1).toUpperCase() + x.slice(1);
}

// Convert only the first letter of a string to lower-case, remaining as-is.
function toBeginLowerAnyCase(x: string): string {
  return x.slice(0, 1).toUpperCase() + x.slice(1);
}

// Convert only the first and last letters of a string to upper-case, remaining lower-case.
function toBorderUpperCase(x: string): string {
  if (x.length<=2) return x.toUpperCase();
  return x.slice(0, 1).toUpperCase() + x.slice(1, -1).toLowerCase() + x.slice(-1).toUpperCase();
}


/**
 * Convert a string to title-case.
 * @param x a string
 * @param re word seperator pattern [/[^0-9A-Za-z]+/g]
 * @returns Title Case
 * @example
 * ```javascript
 * xstring.toTitleCase('Geminid meteor shower');
 * // → 'Geminid Meteor Shower'
 *
 * xstring.toTitleCase('geminid-meteor-shower');
 * // → 'Geminid Meteor Shower'
 *
 * xstring.toTitleCase('geminid_meteor_shower', '_');
 * // → 'Geminid Meteor Shower'
 * ```
 */
function _toTitleCase(x: string, re: RegExp | null=null): string {
  const words = x.split(re || /[^0-9A-Za-z]+/g).filter(IDENTITY);
  return words.map(toBeginUpperCase).join(" ");
}


/**
 * Convert a string to kebab-case.
 * @param x a string
 * @param re word seperator pattern [/[^0-9A-Za-z]+/g]
 * @param sep separator to join with [-]
 * @returns kebab-case | kebab<join>case
 */
export function toKebabCase(x: string, re: RegExp | null=null, sep: string="-"): string {
  const words = x.split(re || /[^0-9A-Za-z]+/g).filter(IDENTITY);
  for (let i=0, I=words.length; i<I; ++i) {
    words[i] = words[i].replace(/[A-Z]+/g, m => m.length===1? sep+m : sep+m.slice(0, -1)+sep+m.slice(-1));
    if (words[i].startsWith(sep)) words[i] = words[i].slice(sep.length);
  }
  return words.join(sep).toLowerCase();
}


/**
 * Convert a string to snake-case.
 * @param x a string
 * @param re word seperator pattern [/[^0-9A-Za-z]+/g]
 * @returns snake_case
 * @example
 * ```javascript
 * xstring.toSnakeCase('Malwa Plateau');
 * // → 'malwa_plateau'
 *
 * xstring.toSnakeCase('::chota::nagpur::', '-');
 * // → 'chota-nagpur'
 *
 * xstring.toSnakeCase('deccan___plateau', '.', '_');
 * // → 'deccan.plateau'
 * ```
 */
export function toSnakeCase(x: string, re: RegExp | null=null): string {
  return toKebabCase(x, re, "_");
}


/**
 * Convert a string to camel-case.
 * @param x a string
 * @param re word seperator pattern [/[^0-9A-Za-z]+/g]
 * @param upper upper camel case?
 * @returns camelCase | CamelCase
 * @example
 * ```javascript
 * xstring.toCamelCase('Western Ghats');
 * // → 'westernGhats'
 *
 * xstring.toCamelCase('cardamom--hills', 1);
 * // → 'CardamomHills'
 *
 * xstring.toCamelCase('EAstErn__ghAts', 1, '_');
 * // → 'EasternGhats'
 * ```
 */
export function toCamelCase(x: string, re: RegExp | null=null, upper: boolean=false): string {
  let a = ""; const words = x.split(re || /[^0-9A-Za-z]+/g).filter(IDENTITY);
  for (const w of words)
    a += toBeginUpperAnyCase(w.replace(/[A-Z]+/g, toBorderUpperCase));
  return upper? a : toBeginLowerAnyCase(a);
}


/**
 * Convert a string to pascal-case.
 * @param x a string
 * @param re word seperator pattern [/[^0-9A-Za-z]+/g]
 * @returns PascalCase
 */
export function toPascalCase(x: string, re: RegExp | null=null): string {
  return toCamelCase(x, re, true);
}
//#endregion





//#region TRANSFORM (TODO)
/**
 * Get characters that cycle through string.
 * @param x a string
 * @param start start index
 * @param count number of characters [length]
 */
// function cycle(x: string, start: number, count: number=x.length): string {
//   let X = x.length;
//   if(count<=0 || X===0) return "";
//   let start = index(x, start);
//   let a = x.slice(start, start+count);
//   count -= a.length;
//   for(let m=0, M=Math.floor(count/X); m<M; m++)
//     a += x;
//   return a += x.slice(0, count % X);
// }


/**
 * Rotate characters in string.
 * @param x a string
 * @param n rotate amount (+ve: left, -ve: right)
 */
// function rotate(x: string, n: number): string {
//   let i = mod(n, x.length);
//   return x.slice(i) + x.slice(0, i);
// }

// function replacePrefix(str, pre, rep) {
//   return str.startsWith(pre)? rep+str.substr(pre.length):str;
// }
// replacePrefix('tinman', 'tin', 'gun');
// // 'gunman'
// replacePrefix('muscleman', 'cle', 'cled');
// // 'muscleman' (not prefix)
// replacePrefix('-1.6022e-19', '-', '');
// // '1.6022e-19'

// function replaceSuffix(str, suf, rep) {
//   return str.endsWith(suf)? str.substr(0, str.length-suf.length)+rep:str;
// }
// replaceSuffix('tinman', 'man', 'woman');
// // 'tinwoman'
// replaceSuffix('muscleman', 'cle', 'cled');
// // 'muscleman'
// replaceSuffix('laughed', 'ed', '');
// // 'laugh'

// function* unique<T, U=T>(x: Iterable<T>, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<T> {
//   yield* union([], x, fc, fm);
// }

// swapRange()


// import {cutAt as arrayCut} from "extra-array";

/**
 * Breaks string at given indices.
 * @param x a string
 * @param is split indices (sorted)
 */
// function cut(x: string, is: Iterable<number>): string[] {
//   return arrayCut(x as any, is as any) as any;
// }

// import {cutAtRight as arrayCutRight} from "extra-array";

/**
 * Breaks string after given indices.
 * @param x a string
 * @param is split indices (sorted)
 */
// function cutRight(x: string, is: Iterable<number>): string[] {
//   return arrayCutRight(x as any, is as any) as any;
// }



// function unionCompare(x: string, y: string, fn: any=null): string {
//   // let fn = fn||cmp;
//   let s = new Set<string>();
//   let a = x;
//   y: for(let v of y) {
//     for(let u of x)
//       if(fn(u, v)===0) continue y;
//     for(let u of s)
//       if(fn(u, v)===0) continue y;
//     a += v; s.add(v);
//   }
//   return a;
// }

// function unionMap(x: string, y: string, fn: any=null): string {
//   // let fn = fn||id;
//   let s = new Set();
//   let a = "", i = -1, j = -1;
//   for(let u of x) {
//     let u1 = fn(u, ++i, x);
//     s.add(u1); a += u;
//   }
//   for(let v of y) {
//     let v1 = fn(v, ++j, y);
//     if(!s.has(v1)) { s.add(v1); a += v; }
//   }
//   return a;
// }

// function unionDual(x: string, y: string, fc: any=null, fm: any=null): string {
//   // let fc = fc||cmp, fm = fm||id;
//   let s = new Set<string>();
//   let a = x, j = -1;
//   y: for(let v of y) {
//     let v1 = fm(v, ++j, y);
//     let i = -1;
//     for(let u of x) {
//       let u1 = fm(u, ++i, x);
//       if(fc(u1, v1)===0) continue y;
//     }
//     let i = -1;
//     for(let u of s) {
//       let u1 = fm(u, ++i, y);
//       if(fc(u1, v1)===0) continue y;
//     }
//     a += v; s.add(v);
//   }
//   return a;
// }

/**
 * Gives characters present in any string.
 * @param x a string
 * @param y another string
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 */
// function union(x: string, y: string, fc: any=null, fm: any=null): string {
//   if(fc) return unionDual(x, y, fc, fm);
//   else return unionMap(x, y, fm);
// }
//#endregion



//#region NGRAMS
/**
 * Get n-grams of a string.
 * @param x a string
 * @param n n-gram length
 * @returns [x[0:n], x[1:n+1], ...]
 * @example
 * ```javascript
 * xstring.ngrams('card', 2);
 * // → ['ca', 'ar', 'rd']
 *
 * xstring.ngrams('triple-h', 3);
 * // → ['tri', 'rip', 'ipl', 'ple', 'le-', 'e-h']
 *
 * xstring.ngrams('brocklesner', 10);
 * // → ['brocklesne', 'rocklesner']
 * ```
 */
export function ngrams(x: string, n: number): string[] {
  const a = [];
  for (let i=0, I=x.length-n+1; i<I; i++)
    a[i] = x.substring(i, i+n);
  return a;
}


/**
 * Find unique n-grams of a string.
 * @param x a string
 * @param n n-gram length
 * @returns Set \{gᵢ\} | gᵢ = iᵗʰ n-gram
 */
export function uniqueNgrams(x: string, n: number): Set<string> {
  const a: Set<string> = new Set();
  for (let i=0, I=x.length-n+1; i<I; i++)
    a.add(x.substring(i, i+n));
  return a;
}


/**
 * Count the total number of n-grams of a string.
 * @param x a string
 * @param n n-gram length
 * @returns |gᵢ| | gᵢ = iᵗʰ n-gram
 */
export function countNgrams(x: string, n: number): number {
  return Math.max(0, x.length-n+1);
}


/**
 * Count the total number of unique n-grams of a string.
 * @param x a string
 * @param n n-gram length
 * @returns |Set \{gᵢ\}| | gᵢ = iᵗʰ n-gram
 */
export function countUniqueNgrams(x: string, n: number): number {
  return uniqueNgrams(x, n).size;
}


/**
 * Count each n-gram of a string.
 * @param x a string
 * @param n n-gram length
 * @returns Map \{gᵢ: count(gᵢ)\} | gᵢ = iᵗʰ n-gram
 */
export function countEachNgram(x: string, n: number): Map<string, number> {
  const a: Map<string, number> = new Map();
  for (let i=0, I=x.length-n+1; i<I; i++) {
    const g = x.substring(i, i+n);
    a.set(g, (a.get(g) || 0) + 1);
  }
  return a;
}


/**
 * Get matching n-grams between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns [gᵢ] | gᵢ = iᵗʰ matching n-gram
 * @example
 * ```javascript
 * xstring.matchingNgrams('worm', 'storm', 2);
 * // → ['or', 'rm']
 *
 * xstring.matchingNgrams('astronaut', 'astronomer', 3);
 * // → ['ast', 'str', 'tro', 'ron']
 *
 * xstring.matchingNgrams('coconut', 'cotton', 2);
 * // → ['co', 'on']
 * ```
 */
export function matchingNgrams(x: string, y: string, n: number): string[] {
  const gs = countEachNgram(x, n), a = [];
  for (let i=0, I=y.length-n+1; i<I; i++) {
    const g = y.substring(i, i+n);
    const c = gs.get(g) || 0;
    if (c) { a.push(g); gs.set(g, c-1); }
  }
  return a;
}


/**
 * Get unique matching n-grams between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns Set \{gᵢ\} | gᵢ = iᵗʰ unique matching n-gram
 */
export function uniqueMatchingNgrams(x: string, y: string, n: number): Set<string> {
  const a: Set<string> = new Set();
  const gs = uniqueNgrams(x, n);
  for (let i=0, I=y.length-n+1; i<I; i++) {
    const g = y.substring(i, i+n);
    if (gs.has(g)) a.add(g);
  }
  return a;
}


/**
 * Count the total number of matching n-grams between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns |[gᵢ]| | gᵢ = iᵗʰ matching n-gram
 * @example
 * ```javascript
 * xstring.countMatchingNgrams('worm', 'storm', 2);
 * // → 2 ('or', 'rm')
 *
 * xstring.countMatchingNgrams('astronaut', 'astronomer', 3);
 * // → 4 ('ast', 'str', 'tro', 'ron')
 *
 * xstring.countMatchingNgrams('coconut', 'cotton', 2);
 * // → 2 ('co', 'on')
 * ```
 */
export function countMatchingNgrams(x: string, y: string, n: number): number {
  const gs = countEachNgram(x, n); let a = 0;
  for (let i=0, I=y.length-n+1; i<I; i++) {
    const g = y.substring(i, i+n);
    const c = gs.get(g) || 0;
    if (c) { a++; gs.set(g, c-1); }
  }
  return a;
}


/**
 * Count each matching n-gram between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns Map \{gᵢ: count(gᵢ)\} | gᵢ = iᵗʰ matching n-gram
 */
export function countEachMatchingNgram(x: string, y: string, n: number): Map<string, number> {
  const a: Map<string, number> = new Map();
  const gs = countEachNgram(x, n);
  for (let i=0, I=y.length-n+1; i<I; i++) {
    const g = y.substring(i, i+n);
    const c = gs.get(g) || 0;
    if (c) { a.set(g, (a.get(g) || 0) + 1); gs.set(g, c-1); }
  }
  return a;
}


/**
 * Count the total number of unique matching n-grams between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns |Set \{gᵢ\}| | gᵢ = iᵗʰ unique matching n-gram
 */
 export function countUniqueMatchingNgrams(x: string, y: string, n: number): number {
  const gs = uniqueNgrams(x, n); let a = 0;
  for (let i=0, I=y.length-n+1; i<I; i++) {
    const g = y.substring(i, i+n);
    if (gs.has(g)) { a++; gs.delete(g); }
  }
  return a;
}
//#endregion




//#region DISTANCE
/**
 * Get euclidean distance between strings.
 * @param x a string
 * @param y another string
 * @returns euclidean distance
 * @example
 * ```javascript
 * xstring.euclideanDistance('a', 'b');
 * // → 1
 *
 * xstring.euclideanDistance('logo', 'pogo');
 * // → 4
 *
 * xstring.euclideanDistance('doctor', 'broker');
 * // → 18.384776310850235
 * ```
 */
export function euclideanDistance(x: string, y: string): number {
  let a = 0;
  for (let i=0, I=Math.max(x.length, y.length); i<I; i++) {
    const d = (x.codePointAt(i) || 0) - (y.codePointAt(i) || 0);
    a += d * d;
  }
  return Math.sqrt(a);
}
// normalizedEuclideanDistance()?


/**
 * Get hamming distance between strings.
 * @param x a string
 * @param y another string
 * @returns hamming distance
 * @example
 * ```javascript
 * xstring.hammingDistance('rowan', 'raven');
 * // → 3
 *
 * xstring.hammingDistance('atkinson', 'atkinson');
 * // → 0
 *
 * xstring.hammingDistance('bean', 'green');
 * // → NaN (strings are of different length)
 * ```
 */
export function hammingDistance(x: string, y: string): number {
  let a = 0;
  for (let i=0, I=Math.max(x.length, y.length); i<I; i++)
    if (x.charAt(i) !== y.charAt(i)) a++;
  return a;
}


/**
 * Get jaccard index between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns |X ∩ Y|/|X ∪ Y| | X,Y = n-grams of x,y
 * @example
 * ```javascript
 * xstring.jaccardIndex('pocket', 'pocket');
 * // → 1
 *
 * xstring.jaccardIndex('monster', 'rocket');
 * // → 0
 *
 * xstring.jaccardIndex('pikachu', 'raichu', 3);
 * // → 0.125
 * ```
 */
export function jaccardIndex(x: string, y: string, n: number): number {
  const gx = countNgrams(x, n);
  const gy = countNgrams(y, n);
  const g  = countMatchingNgrams(x, y, n);
  return gx+gy? g/(gx+gy-g) : 1;
}


/**
 * Get jaccard distance between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns 1 - jaccardIndex(x, y)
 * @example
 * ```javascript
 * xstring.jaccardDistance('pocket', 'pocket');
 * // → 0
 *
 * xstring.jaccardDistance('monster', 'rocket');
 * // → 1
 *
 * xstring.jaccardDistance('pikachu', 'raichu', 3);
 * // → 0.875
 * ```
 */
export function jaccardDistance(x: string, y: string, n: number): number {
  return 1 - jaccardIndex(x, y, n);
}


/**
 * Get Sørensen-Dice index between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns 2|X ∩ Y|/(|X| + |Y|) | X,Y = n-grams of x,y
 * @example
 * ```javascript
 * xstring.sorensenDiceIndex('pocket', 'pocket');
 * // → 1
 *
 * xstring.sorensenDiceIndex('monster', 'rocket');
 * // → 0
 *
 * xstring.sorensenDiceIndex('pikachu', 'raichu', 3);
 * // → 0.2222222222222222
 * ```
 */
export function sorensenDiceIndex(x: string, y: string, n: number): number {
  const gx = countNgrams(x, n);
  const gy = countNgrams(y, n);
  const g  = countMatchingNgrams(x, y, n);
  return gx+gy? (2*g)/(gx+gy) : 1;
}


/**
 * Get Sørensen-Dice distance between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns 1 - sorensenDiceIndex(x, y)
 * @example
 * ```javascript
 * xstring.sorensenDiceDistance('pocket', 'pocket');
 * // → 0
 *
 * xstring.sorensenDiceDistance('monster', 'rocket');
 * // → 1
 *
 * xstring.sorensenDiceDistance('pikachu', 'raichu', 3);
 * // → 0.7777777777777778
 * ```
 */
export function sorensenDiceDistance(x: string, y: string, n: number): number {
  return 1 - sorensenDiceIndex(x, y, n);
}


/**
 * Get Tversky index between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @param a alpha [1]
 * @param b beta [1]
 * @returns |X ∩ Y|/(|X ∩ Y| + α|X \ Y| + β|Y \ X|) | X,Y = n-grams of x,y
 * @example
 * ```javascript
 * xstring.tverskyIndex('pocket', 'pocket');
 * // → 1
 *
 * xstring.tverskyIndex('monster', 'rocket');
 * // → 0
 *
 * xstring.tverskyIndex('pikachu', 'raichu', 0.2, 0.4, 3);
 * // → 0.3333333333333333
 * ```
 */
export function tverskyIndex(x: string, y: string, n: number, a: number=1, b: number=1): number {
  const gx = countNgrams(x, n);
  const gy = countNgrams(y, n);
  const g  = countMatchingNgrams(x, y, n);
  return gx+gy? g/(g + a*(gx-g) + b*(gy-g)) : 1;
}


/**
 * Get Tversky distance between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @param a alpha [1]
 * @param b beta [1]
 * @returns 1 - tverskyIndex(x, y)
 * @example
 * ```javascript
 * xstring.tverskyDistance('pocket', 'pocket');
 * // → 0
 *
 * xstring.tverskyDistance('monster', 'rocket');
 * // → 1
 *
 * xstring.tverskyDistance('pikachu', 'raichu', 0.2, 0.4, 3);
 * // → 0.6666666666666667
 * ```
 */
export function tverskyDistance(x: string, y: string, n: number, a: number=1, b: number=1): number {
  return 1 - tverskyIndex(x, y, n, a, b);
}


/**
 * Get matching characters between strings, within a specified distance.
 * @param x a string
 * @param y another string
 * @param d maximum distance between matching characters
 * @returns [matching characters in x, matching characters in y]
 */
function rangedMatches(x: string, y: string, d: number): [string, string] {
  // 1. Prepare strike-off buffer
  let mx = "", my = "";
  const by: (string | null)[] = Array.from(y);
  // 2. Get matches in first string
  for (let i=0, I=x.length; i<I; i++) {
    let j = by.lastIndexOf(x.charAt(i), i);
    if (j<0 || i-j>d) j = by.indexOf(x.charAt(i), i+1);
    if (j<0 || j-i>d) continue;
    mx += x.charAt(i);
    by[j] = null;
  }
  // 3. Get matches in second string
  for (let j=0, J=y.length; j<J; j++)
    if (by[j]==null) my += y.charAt(j);
  return [mx, my];
}
// countRangedMatches()?


/**
 * Get Jaro similarity between strings.
 * @param x a string
 * @param y another string
 * @returns (m/|x| + m/|y| + (m-t)/m)/3 | m = # matches, t = # transpositions
 * @example
 * ```javascript
 * xstring.jaroSimilarity('no', 'match');
 * // → 0
 *
 * xstring.jaroSimilarity('teapot', 'teapot');
 * // → 1
 *
 * xstring.jaroSimilarity('jellyfish', 'smellyfish');
 * // → 0.8962962962962964
 * ```
 */
export function jaroSimilarity(x: string, y: string): number {
  const X = x.length, Y = y.length;
  const d = Math.floor(Math.max(X, Y)/2) - 1;
  const [mx, my] = rangedMatches(x, y, d), m = mx.length;
  const t = hammingDistance(mx, my)/2;
  return m? (m/X + m/Y + (m-t)/m)/3 : 0;
}


/**
 * Get Jaro distance between strings.
 * @param x a string
 * @param y another string
 * @returns 1 - jaroSimilarity(x, y)
 * @example
 * ```javascript
 * xstring.jaroDistance('no', 'match');
 * // → 1
 *
 * xstring.jaroDistance('teapot', 'teapot');
 * // → 0
 *
 * xstring.jaroDistance('jellyfish', 'smellyfish');
 * // → 0.10370370370370363
 * ```
 */
export function jaroDistance(x: string, y: string): number {
  return 1 - jaroSimilarity(x, y);
}


/**
 * Get Jaro-Winkler similarity between strings.
 * @param x a string
 * @param y another string
 * @param p scaling factor for common prefix (0.1 - 0.25) [0.1]
 * @returns simⱼ + ℓp(1 - simⱼ) | simⱼ = jaro similarity, ℓ = |longest common prefix|
 * @example
 * ```javascript
 * xstring.jaroWinklerSimilarity('no', 'match');
 * // → 0
 *
 * xstring.jaroWinklerSimilarity('teapot', 'teapot');
 * // → 1
 *
 * xstring.jaroWinklerSimilarity('jelly', 'jellyfish');
 * // → 0.9111111111111111
 * ```
 */
export function jaroWinklerSimilarity(x: string, y: string, p: number=0.1): number {
  const s = jaroSimilarity(x, y);
  const l = longestCommonPrefix(x, y.substring(0, 4)).length;
  return s + l*p*(1 - s);
}


/**
 * Get Jaro-Winkler distance between strings.
 * @param x a string
 * @param y another string
 * @param p scaling factor for common prefix (0.1 - 0.25) [0.1]
 * @returns 1 - jaroWinklerSimilarity(x, y)
 * @example
 * ```javascript
 * xstring.jaroWinklerDistance('no', 'match');
 * // → 1
 *
 * xstring.jaroWinklerDistance('teapot', 'teapot');
 * // → 0
 *
 * xstring.jaroWinklerDistance('jelly', 'jellyfish');
 * // → 0.0888888888888889
 * ```
 */
export function jaroWinklerDistance(x: string, y: string, p: number=0.1): number {
  return 1 - jaroWinklerSimilarity(x, y, p);
}


/**
 * Get Levenshtein distance between strings.
 * @param x a string
 * @param y another string
 * @param ins insertion cost [1]
 * @param del deletion cost [1]
 * @param sub substitution cost [1]
 * @returns levenshtein distance
 * @example
 * ```javascript
 * xstring.levenshteinDistance('hareram', 'hareram');
 * // → 0
 *
 * xstring.levenshteinDistance('church', 'torch');
 * // → 3
 *
 * xstring.levenshteinDistance('mr. bean', 'ben 10', 1, 0.1, 1);
 * // → 3.5
 * ```
 */
export function levenshteinDistance(x: string, y: string, ins: number=1, del: number=1, sub: number=1): number {
  // 1. Remove common prefix, suffix
  const infixes = longestUncommonInfixes(x, y);
  x = infixes[0]; y = infixes[1];
  const X = x.length, Y = y.length;
  // 2. Get distance in 1st row
  const d0: number[] = [], d1: number[] = [];
  for (let j=0, v=0; j<=Y; v+=ins)
    d0[j++] = v;
  // 3. Get distance in remaining rows
  for (let i=1; i<=X; i++) {
    // a. Get distance in 1st column
    const di = i & 1? d1 : d0;
    const dh = i & 1? d0 : d1;
    di[0]  = dh[0] + del;
    // b. Get distance of remaining columns
    for (let j=1; j<=Y; j++) {
      const cost = x[i-1]===y[j-1]? 0 : sub;
      di[j] = Math.min(dh[j]+del, di[j-1]+ins, dh[j-1]+cost);
    }
  }
  return (X & 1? d1 : d0)[Y];
}


/**
 * Get Damerau–Levenshtein distance between strings.
 * @param x a string
 * @param y another string
 * @param ins insertion cost [1]
 * @param del deletion cost [1]
 * @param sub substitution cost [1]
 * @param tra transposition cost [1]
 * @returns damerau–levenshtein distance
 * @example
 * ```javascript
 * xstring.damerauLevenshteinDistance('gnu', 'gun');
 * // → 1
 *
 * xstring.damerauLevenshteinDistance('software', 'softwear');
 * // → 2
 *
 * xstring.damerauLevenshteinDistance('level field', 'lvele feidl', 1, 1, 1, 0.1);
 * // → 0.4
 * ```
 */
export function damerauLevenshteinDistance(x: string, y: string, ins: number=1, del: number=1, sub: number=1, tra: number=1): number {
  // 1. Remove common prefix, suffix
  const infixes = longestUncommonInfixes(x, y);
  x = infixes[0]; y = infixes[1];
  const X = x.length, Y = y.length
  const I = X+2, J = Y+2, L = X+Y;
  // 2. Prepare 1st 2 rows
  const d0 = [L], d1 = [L];
  const d  = [d0, d1], da = new Map();
  for (let j=1, v=0; j<J; j++, v+=ins) {
    d0[j] = L;
    d1[j] = v;
  }
  // 3. Prepare remaining rows
  for (let i=2; i<I; i++) {
    // a. Prepare 1st 2 columns
    let db = 0; const dh = d[i-1];
    const di = [L, dh[1]+del];
    d[i] = di;
    // b. Prepare remaining columns
    for (let j=2; j<J; j++) {
      const k = da.get(y[j-2])||0, l = db; let cost = sub;
      if (x[i-2]===y[j-2]) { db = j-1; cost = 0; }
      di[j] = Math.min(di[j-1]+ins, dh[j]+del, dh[j-1]+cost, d[k][l]+(i-k-2)+tra+(j-l-2));
    }
    da.set(x[i-2], i-1);
  }
  return d[X+1][Y+1];
}
//#endregion
//#endregion




//#region TODO
// function mapReplace(str, map) {
//   for(let [k, v] of map)
//     str = str.replace(k, v);
//   return str;
// }
// mapReplace('alpha beta', new Map().set('alpha', 'α').set('beta', 'β'));
// // 'α β'
// mapReplace('gamma DELTA', new Map().set('gamma', 'γ').set('delta', 'δ'));
// // 'γ DELTA'
// mapReplace('Epsilon ZETA', new Map().set(/epsilon/gi, 'ε').set(/zeta/gi, 'ζ'));
// // 'ε ζ'


// function mapReplacePrefix(str, map, l=0) {
//   // 1. get max prefix length
//   if(!l) for(let k of map.keys()) {
//     l = l<k.length? k.length:l;
//   }
//   // 2. replace prefix
//   for(let i=l; i; i--) {
//     let k = str.substr(0, i);
//     if(map.has(k)) return map.get(k)+str.substr(i);
//   }
//   return str;
// }
// mapReplacePrefix('dishonoured', new Map([['dis', ''], ['un', ''], ['in', '']]));
// // 'honoured'
// mapReplacePrefix('dishonoured', new Map([['honour', 'respect'], ['flatter', 'mock']]));
// // 'dishonoured' (only prefix)
// mapReplacePrefix('dishonoured', new Map([['dis', 'redis'], ['redis', 'super']]), 5);
// // 'redishonoured' (only once)


// function mapReplaceSuffix(str, map, l=0) {
//   // 1. get max suffix length
//   if(!l) for(let k of map.keys()) {
//     l = l<k.length? k.length:l;
//   }
//   // 2. replace suffix
//   for(let i=l; i; i--) {
//     let k = str.substr(-i);
//     if(map.has(k)) return str.substr(0, str.length-i)+map.get(k);
//   }
//   return str;
// }
// mapReplaceSuffix('ender', new Map([['er', ''], ['ing', ''], ['ed', '']]));
// // 'end
// mapReplaceSuffix('ender', new Map([['end', 'right'], ['start', 'left']]));
// // 'ender' (only suffix)
// mapReplaceSuffix('ender', new Map([['er', ' game'], ['game', 'play']]), 4);
// // 'end game' (only once)


// function objectReplace(str, obj) {
//   for(let k in obj)
//     str = str.replace(k, obj[k]);
//   return str;
// }
// objectReplace('alpha beta', {'alpha': 'α', 'beta': 'β'});
// // 'α β'
// objectReplace('gamma DELTA', {'gamma': 'γ', 'delta': 'δ'});
// // 'γ DELTA'
// objectReplace('Epsilon ZETA'.toLowerCase(), {'epsilon': 'ε', 'zeta': 'ζ'});
// // 'ε ζ'


// function objectReplacePrefix(str, obj, l=0) {
//   // 1. get max prefix length
//   if(!l) for(let k in obj) {
//     l = l<k.length? k.length:l;
//   }
//   // 2. replace prefix
//   for(let i=l; i; i--)  {
//     // let k = str.substr(0, i);
//     if(obj[k]!=null) return obj[k]+str.substr(i);
//   }
//   return str;
// }
// objectReplacePrefix('dishonoured', {'dis': '', 'un': '', 'in': ''});
// // 'honoured'
// objectReplacePrefix('dishonoured', {'honour': 'respect', 'flatter': 'mock'});
// // 'dishonoured' (only prefix)
// objectReplacePrefix('dishonoured', {'dis': 'redis', 'redis': 'super'}, 5);
// // 'redishonoured' (only once)


// function objectReplaceSuffix(str, obj, l=0) {
//   // 1. get max suffix length
//   if(!l) for(let k in obj) {
//     l = l<k.length? k.length:l;
//   }
//   // 2. replace suffix
//   for(let i=l; i; i--) {
//     // let k = str.substr(-i);
//     if(obj[k]!=null) return str.substr(0, str.length-i)+obj[k];
//   }
//   return str;
// }


// reduceRight('abc', (acc, v) => acc+v);
// // 'cba'
// reduceRight('123', (acc, v) => acc+v, '-');
// // '-321'
// reduceRight('a', (acc, v) => acc+v);
// // 'a'
// reduceRight('', (acc, v) => acc+v);
// // undefined


// find('badd0g', (v) => v>'f');
// // 'g'
// find('badcab', (v) => v>'f');
// // undefined
// find('', (v) => v>'f');
// // undefined


// findIndex('badd0g', (v) => v>'f');
// // 5
// findIndex('badcab', (v) => v>'f');
// // -1
// findIndex('', (v) => v>'f');
// // -1


// every('badf00d', (v) => v<='f');
// // true
// every('g00df00d', (v) => v<='f');
// // false
// every('', (v) => v<='f');
// // true


// xstring.euclideanDistance('a', 'b');
// // → 0.000015259021896696422 (normalized distance between 1 character code)
//
// xstring.euclideanDistance('logo', 'pogo');
// // → 0.00006103608758678569
//
// xstring.euclideanDistance('doctor', 'broker');
// // → 0.00028053370429312937


// chr(65); // 'A'
// chr(97); // 'a'


// asc('A');     // 65
// asc('aA');    // 97
// asc('aA', 1); // 65
//#endregion
