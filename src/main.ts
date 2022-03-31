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
/** Combination of uppercase, lowercase. */
export const LETTERS: string = UPPERCASE + LOWERCASE;

/** Punctuation symbols. */
export const PUNCTUATION: string = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
/** The string "\t\n\x0b\x0c\r ". */
export const WHITESPACE: string  = "\t\n\x0b\x0c\r ";

/** Combination of digits, letters, punctuation, and whitespace. */
export const PRINTABLE: string = DIGITS + LETTERS + PUNCTUATION + WHITESPACE;
