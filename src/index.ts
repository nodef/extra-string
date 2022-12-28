import {IDENTITY} from "extra-function";




// CONSTANTS
// =========

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




// BUILT-IN
// ========

// GENERATE
// --------

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
export function concat(...values: any[]): string {
  return "".concat(...values);
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




// ABOUT
// -----

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
export function codePointAt(x: string, at: number): number {
  return x.codePointAt(at);
}




// COMPARE
// -------

/**
 * Compare two strings in the current or given locale.
 * @param x a string
 * @param y another string
 * @param locales language or locale tag(s)
 * @param options comparison options
 * @returns x<y: -ve, x=y: 0, x>y: +ve
 */
export function localeCompare(x: string, y: string, locales?: string | string[], options?: Intl.CollatorOptions): number {
  return x.localeCompare(y, locales, options);
}




// SEARCH
// ------

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
export function match(x: string, regexp: string | RegExp): RegExpMatchArray {
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




// CONVERT
// -------

/**
 * Get string representation of string.
 * @param x a string
 * @returns string representation
 */
export function toString(x: string): string {
  return x.toString();
}




// PART
// ----

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
  return x.split(separator, limit);
}




// WHITESPACE
// ----------

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




// TRANSFORM (CASE)
// ----------------

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




// TRANSFORM
// ---------

/** Handle replacement of matched string and parameters with another string. */
export type ReplaceFunction = (substring: string, ...args: any[]) => string;

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
  return x.replace(pattern, replacement as any);
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




// BUILT-IN (ARRAY)
// ================

// GENERATE
// --------

/**
 * Create string from arguments, like `Array.of()`.
 * @param args arguments
 * @returns p + q + ... | [p, q, ...] = args
 */
export function of(...args: string[]): string {
  var a = "";
  for (var i=0, I=args.length; i<I; i++)
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
 */
export function from(xs: Iterable<string>, fm?: MapFunction, ths?: any): string {
  var a = "", i = 0;
  for (var x of xs) {
    a += fm? fm.call(ths, x, i) : x;
    i++;
  }
  return a;
}




// ABOUT
// -----

/**
 * Get keys of string, like `Array.keys()`.
 * @param x a string
 * @returns 0, 1, ...
 */
function* keys(x: string): IterableIterator<number> {
  var i = 0;
  for (var c of x)
    yield i++;
}


/**
 * Get characters of string, like `Array.values()`.
 * @param x a string
 * @returns x[0], x[1], ...
 */
function* values(x: string): IterableIterator<string> {
  for (var c of x)
    yield c;
}
// export {values as characters};


/**
 * Get entries of string, like `Array.entries()`.
 * @param x a string
 * @returns [0, x[0]], [1, x[1]], ...
 */
function* entries(x: string): IterableIterator<[number, string]> {
  var i = 0;
  for (var c of x)
    yield [i++, c];
}




// TRANSFORM
// ---------

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




// FUNCTIONAL
// ----------

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
 */
export function filter(x: string, ft: TestFunction, ths?: any): string {
  var a = "", i = 0;
  for (var c of x)
    if (ft.call(ths, c, i++)) a += c;
  return a;
}




// CUSTOM
// ======

// GENERATE
// --------

/** A buffer containing only spaces, for `spaces()`. */
const SPACE_BUFFER: string = " ".repeat(1024);

/**
 * Get a string of spaces.
 * @param n number of spaces
 */
export function spaces(n: number): string {
  var S = SPACE_BUFFER.length;
  if (n<S) return SPACE_BUFFER.slice(0, n);
  return SPACE_BUFFER.repeat(n/S) + " ".repeat(n%S);
}




// ABOUT
// -----

/**
 * Check if value is a string.
 * @param v a value
 * @returns whether value is a string
 */
export function is(v: any): boolean {
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
  var min = MAX_CODE_POINT;
  var max = MIN_CODE_POINT;
  for (var c of x) {
    var v = c.codePointAt(0);
    min = Math.min(min, v);
    max = Math.max(max, v);
  }
  return [min, max];
}




// COMPARE
// -------

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




// SEARCH
// ------

// Check if string has a given prefix.
export {startsWith as isPrefix};
// Check if string has a given suffix.
export {endsWith   as isSuffix};
// Check if string has a given infix.
export {includes   as isInfix};




// PART
// ----

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
  var a = "";
  for (var at of ats)
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
 */
export function end(x: string, count: number=1): string {
  return x.slice(x.length-count);
}
export {end as suffix};
export {end as right};




// PART (TODO)
// -----------

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




// SEARCH
// ------

// Get length of longest string in an iterable.
function maxLength(xs: Iterable<string>): number {
  var a = 0;
  for (var x of xs)
    a = Math.max(a, x.length);
  return a;
}

/**
 * Get set-listed symbol at specified index in string.
 * @param x a string
 * @param set set of symbols
 * @param i start index [0]
 * @param L max symbol length [0 ⇒ unspecified]
 */
function symbolAt(x: string, set: Set<string>, i: number = 0, L: number = 0) {
  if (L===0) L = maxLength(set);
  for (var l=L; l>0; l--) {
    var sym = x.substring(i, i+l);
    if (set.has(sym)) return sym;
  }
  return null;
}


/**
 * Get the longest common infix between strings.
 * @param x a string
 * @param y another string
 * @returns longest common infix
 */
export function longestCommonInfix(x: string, y: string): string {
  var ai = 0, al = 0;
  for (var i=0, I=x.length; i<I; i++) {
    for (var j=0, J=y.length, l=0; j<J; j++) {
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
 */
export function longestCommonPrefix(x: string, y: string): string {
  for (var i=0, I=Math.min(x.length, y.length); i<I; i++)
    if (x[i]!==y[i]) break;
  return x.substring(0, i);
}


/**
 * Get the longest common suffix of strings.
 * @param x a string
 * @param y another string
 * @returns longest common suffix
 */
export function longestCommonSuffix(x: string, y: string): string {
  for (var i=x.length-1, j=y.length-1; i>=0 && j>=0; i--, j--)
    if (x[i]!==y[j]) break;
  return x.substring(i+1);
}


/**
 * Get the longest uncommon infixes of strings.
 * @param x a string
 * @param y another string
 * @returns [infix1, infix2]
 */
export function longestUncommonInfixes(x: string, y: string): [string, string] {
  var X = x.length, Y = y.length;
  var i = longestCommonPrefix(x, y).length;
  var j = longestCommonSuffix(x, y).length;
  return [x.substring(i, X-j), y.substring(i, Y-j)];
}




// TRANFORM (SUPER/SUBSCRIPT)
// --------------------------

/** Superscript characters that can be transformed to baseline with `SUPERSCRIPT_TARGET`. */
const SUPERSCRIPT_SOURCE = "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵝᵞᵟᶿᶥᵠᵡᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂᶦᶫᶰᶸᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ";
/** Baseline characters that can be transformed from superscript with `SUPERSCRIPT_SOURCE`. */
const SUPERSCRIPT_TARGET = "0123456789+-=()βγδθιφχABDEGHIJKLMNOPRTUVWILNUabcdefghijklmnoprstuvwxyz";
/** Subscript characters that can be transformed to baseline with `SUBSCRIPT_TARGET`. */
const SUBSCRIPT_SOURCE   = "₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₔᵦᵧᵨᵩᵪₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ";
/** Baseline characters that can be transformed from subscript with `SUBSCRIPT_TARGET`. */
const SUBSCRIPT_TARGET   = "0123456789+-=()əβγρφχaehijklmnoprstuvx";

function toBaselineDirect(x: string): string {
  var a = "";
  for (var c of x) {
    var j = SUPERSCRIPT_SOURCE.indexOf(c);
    var k = SUBSCRIPT_SOURCE.indexOf(c);
    if (j>=0) c = SUPERSCRIPT_TARGET[j];
    if (k>=0) c = SUPERSCRIPT_TARGET[k];
    a += c;
  }
  return a;
}

function toBaselineIndirect(x: string, fsup: MapFunction, fsub: MapFunction): string {
  var a   = "", i    = 0;
  var tmp = "", mode = 0;
  fsup = fsup || IDENTITY;
  fsub = fsub || IDENTITY;
  for (var c of x) {
    var t = tmp.length;
    var j = SUPERSCRIPT_SOURCE.indexOf(c);
    var k = SUBSCRIPT_SOURCE.indexOf(c);
    var m = (j>=0? 1:0) + (k>=0? 2:0);
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
 */
export function toBaseline(x: string, fsup: MapFunction=null, fsub: MapFunction=null): string {
  if (!fsup && !fsub) return toBaselineDirect(x);
  return toBaselineIndirect(x, fsup||IDENTITY, fsub||IDENTITY);
}


/** Superscript ASCII characters after space (32). */
const SUPERSCRIPT_LOOKUP = "        ⁽⁾ ⁺ ⁻  ⁰¹²³⁴⁵⁶⁷⁸⁹   ⁼   ᴬᴮ ᴰᴱ ᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾ ᴿ ᵀᵁ ᵂ         ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ ʳˢᵗᵘᵛʷˣʸᶻ     ";

/**
 * Convert a string to superscript characters (limited support).
 * @param x a string
 * @returns superscripted characters
 */
export function toSuperscript(x: string): string {
  var a = "";
  for (var c of x) {
    var d = SUPERSCRIPT_LOOKUP[c.charCodeAt(0) - 32] || " ";
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
 */
export function toSubscript(x: string): string {
  var a = "";
  for (var c of x) {
    var d = SUBSCRIPT_LOOKUP[c.charCodeAt(0) - 32] || " ";
    a += d===" "? c : d;
  }
  return a;
}




// TRANSFORM (CASE)
// ----------------

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
 */
function toTitleCase(x: string, re: RegExp=null): string {
  var words = x.split(re || /[^0-9A-Za-z]+/g).filter(IDENTITY);
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
  var words = x.split(re || /[^0-9A-Za-z]+/g).filter(IDENTITY);
  for (var i=0, I=words.length; i<I; ++i) {
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
 */
export function toSnakeCase(x: string, re: RegExp=null): string {
  return toKebabCase(x, re, "_");
}


/**
 * Convert a string to camel-case.
 * @param x a string
 * @param re word seperator pattern [/[^0-9A-Za-z]+/g]
 * @param upper upper camel case?
 * @returns camelCase | CamelCase
 */
export function toCamelCase(x: string, re: RegExp=null, upper: boolean=false): string {
  var a = "", words = x.split(re || /[^0-9A-Za-z]+/g).filter(IDENTITY);
  for (var w of words)
    a += toBeginUpperAnyCase(w.replace(/[A-Z]+/g, toBorderUpperCase));
  return upper? a : toBeginLowerAnyCase(a);
}


/**
 * Convert a string to pascal-case.
 * @param x a string
 * @param re word seperator pattern [/[^0-9A-Za-z]+/g]
 * @returns PascalCase
 */
export function toPascalCase(x: string, re: RegExp=null): string {
  return toCamelCase(x, re, true);
}





// TRANSFORM (TODO)
// ----------------

/**
 * Get characters that cycle through string.
 * @param x a string
 * @param start start index
 * @param count number of characters [length]
 */
// function cycle(x: string, start: number, count: number=x.length): string {
//   var X = x.length;
//   if(count<=0 || X===0) return "";
//   var start = index(x, start);
//   var a = x.slice(start, start+count);
//   count -= a.length;
//   for(var m=0, M=Math.floor(count/X); m<M; m++)
//     a += x;
//   return a += x.slice(0, count % X);
// }


/**
 * Rotate characters in string.
 * @param x a string
 * @param n rotate amount (+ve: left, -ve: right)
 */
// function rotate(x: string, n: number): string {
//   var i = mod(n, x.length);
//   return x.slice(i) + x.slice(0, i);
// }

// function replacePrefix(str, pre, rep) {
//   return str.startsWith(pre)? rep+str.substr(pre.length):str;
// }

// function replaceSuffix(str, suf, rep) {
//   return str.endsWith(suf)? str.substr(0, str.length-suf.length)+rep:str;
// }

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
//   // var fn = fn||cmp;
//   var s = new Set<string>();
//   var a = x;
//   y: for(var v of y) {
//     for(var u of x)
//       if(fn(u, v)===0) continue y;
//     for(var u of s)
//       if(fn(u, v)===0) continue y;
//     a += v; s.add(v);
//   }
//   return a;
// }

// function unionMap(x: string, y: string, fn: any=null): string {
//   // var fn = fn||id;
//   var s = new Set();
//   var a = "", i = -1, j = -1;
//   for(var u of x) {
//     var u1 = fn(u, ++i, x);
//     s.add(u1); a += u;
//   }
//   for(var v of y) {
//     var v1 = fn(v, ++j, y);
//     if(!s.has(v1)) { s.add(v1); a += v; }
//   }
//   return a;
// }

// function unionDual(x: string, y: string, fc: any=null, fm: any=null): string {
//   // var fc = fc||cmp, fm = fm||id;
//   var s = new Set<string>();
//   var a = x, j = -1;
//   y: for(var v of y) {
//     var v1 = fm(v, ++j, y);
//     var i = -1;
//     for(var u of x) {
//       var u1 = fm(u, ++i, x);
//       if(fc(u1, v1)===0) continue y;
//     }
//     var i = -1;
//     for(var u of s) {
//       var u1 = fm(u, ++i, y);
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



// NGRAMS
// ------

/**
 * Get n-grams of a string.
 * @param x a string
 * @param n n-gram length
 * @returns [x[0:n], x[1:n+1], ...]
 */
export function ngrams(x: string, n: number): string[] {
  var a = [];
  for (var i=0, I=x.length-n+1; i<I; i++)
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
  var a: Set<string> = new Set();
  for (var i=0, I=x.length-n+1; i<I; i++)
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
  var a: Map<string, number> = new Map();
  for (var i=0, I=x.length-n+1; i<I; i++) {
    var g = x.substring(i, i+n);
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
 */
export function matchingNgrams(x: string, y: string, n: number): string[] {
  var gs = countEachNgram(x, n), a = [];
  for (var i=0, I=y.length-n+1; i<I; i++) {
    var g = y.substring(i, i+n);
    var c = gs.get(g) || 0;
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
  var a: Set<string> = new Set();
  var gs = uniqueNgrams(x, n);
  for (var i=0, I=y.length-n+1; i<I; i++) {
    var g = y.substring(i, i+n);
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
 */
export function countMatchingNgrams(x: string, y: string, n: number): number {
  var gs = countEachNgram(x, n), a = 0;
  for (var i=0, I=y.length-n+1; i<I; i++) {
    var g = y.substring(i, i+n);
    var c = gs.get(g) || 0;
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
  var a: Map<string, number> = new Map();
  var gs = countEachNgram(x, n);
  for (var i=0, I=y.length-n+1; i<I; i++) {
    var g = y.substring(i, i+n);
    var c = gs.get(g) || 0;
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
  var gs = uniqueNgrams(x, n), a = 0;
  for (var i=0, I=y.length-n+1; i<I; i++) {
    var g = y.substring(i, i+n);
    if (gs.has(g)) { a++; gs.delete(g); }
  }
  return a;
}




// DISTANCE
// --------

/**
 * Get euclidean distance between strings.
 * @param x a string
 * @param y another string
 * @returns euclidean distance
 */
export function euclideanDistance(x: string, y: string): number {
  var a = 0;
  for (var i=0, I=Math.max(x.length, y.length); i<I; i++) {
    var d = (x.codePointAt(i) || 0) - (y.codePointAt(i) || 0);
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
 */
export function hammingDistance(x: string, y: string): number {
  var a = 0;
  for (var i=0, I=Math.max(x.length, y.length); i<I; i++)
    if (x.charAt(i) !== y.charAt(i)) a++;
  return a;
}


/**
 * Get jaccard index between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns |X ∩ Y|/|X ∪ Y| | X,Y = n-grams of x,y
 */
export function jaccardIndex(x: string, y: string, n: number): number {
  var gx = countNgrams(x, n);
  var gy = countNgrams(y, n);
  var g  = countMatchingNgrams(x, y, n);
  return gx+gy? g/(gx+gy-g) : 1;
}


/**
 * Get jaccard distance between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns 1 - jaccardIndex(x, y)
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
 */
export function sorensenDiceIndex(x: string, y: string, n: number): number {
  var gx = countNgrams(x, n);
  var gy = countNgrams(y, n);
  var g  = countMatchingNgrams(x, y, n);
  return gx+gy? (2*g)/(gx+gy) : 1;
}


/**
 * Get Sørensen-Dice distance between strings.
 * @param x a string
 * @param y another string
 * @param n n-gram length
 * @returns 1 - sorensenDiceIndex(x, y)
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
 */
export function tverskyIndex(x: string, y: string, n: number, a: number=1, b: number=1): number {
  var gx = countNgrams(x, n);
  var gy = countNgrams(y, n);
  var g  = countMatchingNgrams(x, y, n);
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
  var mx = "", my = "";
  var by = Array.from(y);
  // 2. Get matches in first string
  for (var i=0, I=x.length; i<I; i++) {
    var j = by.lastIndexOf(x.charAt(i), i);
    if (j<0 || i-j>d) j = by.indexOf(x.charAt(i), i+1);
    if (j<0 || j-i>d) continue;
    mx += x.charAt(i);
    by[j] = null;
  }
  // 3. Get matches in second string
  for (var j=0, J=y.length; j<J; j++)
    if (by[j]==null) my += y.charAt(j);
  return [mx, my];
}
// countRangedMatches()?


/**
 * Get Jaro similarity between strings.
 * @param x a string
 * @param y another string
 * @returns (m/|x| + m/|y| + (m-t)/m)/3 | m = # matches, t = # transpositions
 */
export function jaroSimilarity(x: string, y: string): number {
  var X = x.length, Y = y.length;
  var d = Math.floor(Math.max(X, Y)/2) - 1;
  var [mx, my] = rangedMatches(x, y, d), m = mx.length;
  var t = hammingDistance(mx, my)/2;
  return m? (m/X + m/Y + (m-t)/m)/3 : 0;
}


/**
 * Get Jaro distance between strings.
 * @param x a string
 * @param y another string
 * @returns 1 - jaroSimilarity(x, y)
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
 */
export function jaroWinklerSimilarity(x: string, y: string, p: number=0.1): number {
  var s = jaroSimilarity(x, y);
  var l = longestCommonPrefix(x, y.substring(0, 4)).length;
  return s + l*p*(1 - s);
}


/**
 * Get Jaro-Winkler distance between strings.
 * @param x a string
 * @param y another string
 * @param p scaling factor for common prefix (0.1 - 0.25) [0.1]
 * @returns 1 - jaroWinklerSimilarity(x, y)
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
 */
export function levenshteinDistance(x: string, y: string, ins: number=1, del: number=1, sub: number=1): number {
  // 1. Remove common prefix, suffix
  var [x, y] = longestUncommonInfixes(x, y);
  var X = x.length, Y = y.length;
  // 2. Get distance in 1st row
  var d0 = [], d1 = [];
  for (var j=0, v=0; j<=Y; v+=ins)
    d0[j++] = v;
  // 3. Get distance in remaining rows
  for (var i=1; i<=X; i++) {
    // a. Get distance in 1st column
    var di = i&1? d1 : d0;
    var dh = i&1? d0 : d1;
    di[0]  = dh[0] + del;
    // b. Get distance of remaining columns
    for (var j=1; j<=Y; j++) {
      var cost = x[i-1]===y[j-1]? 0 : sub;
      di[j] = Math.min(dh[j]+del, di[j-1]+ins, dh[j-1]+cost);
    }
  }
  return (X&1? d1 : d0)[Y];
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
 */
export function damerauLevenshteinDistance(x: string, y: string, ins: number=1, del: number=1, sub: number=1, tra: number=1): number {
  // 1. Remove common prefix, suffix
  var [x, y] = longestUncommonInfixes(x, y);
  var X = x.length, Y = y.length
  var I = X+2, J = Y+2, L = X+Y;
  // 2. Prepare 1st 2 rows
  var d0 = [L], d1 = [L];
  var d  = [d0, d1], da = new Map();
  for (var j=1, v=0; j<J; j++, v+=ins) {
    d0[j] = L;
    d1[j] = v;
  }
  // 3. Prepare remaining rows
  for (var i=2; i<I; i++) {
    // a. Prepare 1st 2 columns
    var db = 0, dh = d[i-1];
    var di = [L, dh[1]+del];
    d[i] = di;
    // b. Prepare remaining columns
    for (var j=2; j<J; j++) {
      var k = da.get(y[j-2])||0, l = db, cost = sub;
      if (x[i-2]===y[j-2]) { db = j-1; cost = 0; }
      di[j] = Math.min(di[j-1]+ins, dh[j]+del, dh[j-1]+cost, d[k][l]+(i-k-2)+tra+(j-l-2));
    }
    da.set(x[i-2], i-1);
  }
  return d[X+1][Y+1];
}




// TODO
// ====

// function mapReplace(str, map) {
//   for(var [k, v] of map)
//     str = str.replace(k, v);
//   return str;
// }

// function mapReplacePrefix(str, map, l=0) {
//   // 1. get max prefix length
//   if(!l) for(var k of map.keys()) {
//     l = l<k.length? k.length:l;
//   }
//   // 2. replace prefix
//   for(var i=l; i; i--) {
//     var k = str.substr(0, i);
//     if(map.has(k)) return map.get(k)+str.substr(i);
//   }
//   return str;
// }

// function mapReplaceSuffix(str, map, l=0) {
//   // 1. get max suffix length
//   if(!l) for(var k of map.keys()) {
//     l = l<k.length? k.length:l;
//   }
//   // 2. replace suffix
//   for(var i=l; i; i--) {
//     var k = str.substr(-i);
//     if(map.has(k)) return str.substr(0, str.length-i)+map.get(k);
//   }
//   return str;
// }

// function objectReplace(str, obj) {
//   for(var k in obj)
//     str = str.replace(k, obj[k]);
//   return str;
// }


// function objectReplacePrefix(str, obj, l=0) {
//   // 1. get max prefix length
//   if(!l) for(var k in obj) {
//     l = l<k.length? k.length:l;
//   }
//   // 2. replace prefix
//   for(var i=l; i; i--)  {
//     // var k = str.substr(0, i);
//     if(obj[k]!=null) return obj[k]+str.substr(i);
//   }
//   return str;
// }


// function objectReplaceSuffix(str, obj, l=0) {
//   // 1. get max suffix length
//   if(!l) for(var k in obj) {
//     l = l<k.length? k.length:l;
//   }
//   // 2. replace suffix
//   for(var i=l; i; i--) {
//     // var k = str.substr(-i);
//     if(obj[k]!=null) return str.substr(0, str.length-i)+obj[k];
//   }
//   return str;
// }
