<!-- Copyright (C) 2025 Subhajit Sahu -->
<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<!-- See LICENSE for full terms -->

A [string] is a sequence of characters. In JavaScript, strings are not [mutable]. Any transfomation of a *string*, such as `slice` or `concat` generates a *new string*. The *JavaScript runtime* however may optimize this behavior by *mutating strings behind the scenes*, when it can be guarenteed that the previous string is *not accessible* to the programmer. The *runtime* may also *avoid copying slices* of a string, or even *concatenation of slices of* *strings*, by implementing it as a *series of lookups into existing strings*. Food for thought.

This package provides **functions** for generating spaces, querying *about* a string, *comparing* strings, getting *parts* of a string, *searching* a string, *transforming* a string or its *case*, finding *ngrams* in strings, finding *similarity/distance* between strings, and array-like functions. All **built-in** string functions are also included. Finally, *constants* for *ASCII characters*, and *minimum/maximum code point* are included.

▌
📦 [JSR](https://jsr.io/@nodef/extra-string),
📰 [Docs](https://jsr.io/@nodef/extra-string/doc).

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[mutable]: https://developer.mozilla.org/en-US/docs/Glossary/Mutable
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-string.web/index.js

<br>


```javascript
import * as xstring from "jsr:@nodef/extra-string";

xstring.longestCommonInfix('dismiss', 'mississipi');
// → 'miss'

xstring.longestUncommonInfixes('chocolatier', 'engineer');
// → ['chocolati', 'engine']

xstring.toKebabCase('Malwa Plateau');
// → 'malwa-plateau'

'6.626 x 10' + xstring.toSuperscript('-34');
// → '6.626 x 10⁻³⁴' (Planck's constant)

xstring.tverskyDistance('pikachu', 'raichu', 3, 0.2, 0.4);
// → 0.6666666666666667
```

<br>
<br>


## Index

| Name | Description |
|  ----  |  ----  |
| [toKebabCase] | Convert a string to kebab-case. |
| [toSnakeCase] | Convert a string to snake-case. |
| [toCamelCase] | Convert a string to camel-case. |
| [toPascalCase] | Convert a string to pascal-case. |
| [toSlugCase] | Convert a string to slug-case (URL-friendly kebab-case). |
| [toWords] | Split a string into words, after de-casing it. |
|  |  |
| [toBaseline] | Convert a string to baseline characters (limited support). |
| [toSuperscript] | Convert a string to superscript characters (limited support). |
| [toSubscript] | Convert a string to superscript characters (limited support). |
|  |  |
| [ngrams] | Get n-grams of a string. |
| [uniqueNgrams] | Find unique n-grams of a string. |
| [countNgrams] | Count the total number of n-grams of a string. |
| [countUniqueNgrams] | Count the total number of unique n-grams of a string. |
| [countEachNgram] | Count each n-gram of a string. |
| [matchingNgrams] | Get matching n-grams between strings. |
| [uniqueMatchingNgrams] | Get unique matching n-grams between strings. |
| [countMatchingNgrams] | Count the total number of matching n-grams between strings. |
| [countEachMatchingNgram] | Count each matching n-gram between strings. |
| [countUniqueMatchingNgrams] | Count the total number of unique matching n-grams between strings. |
|  |  |
| [euclideanDistance] | Get euclidean distance between strings. |
| [hammingDistance] | Get hamming distance between strings. |
| [jaccardIndex] | Get jaccard index between strings. |
| [jaccardDistance] | Get jaccard distance between strings. |
| [sorensenDiceIndex] | Get Sørensen-Dice index between strings. |
| [sorensenDiceDistance] | Get Sørensen-Dice distance between strings. |
| [tverskyIndex] | Get Tversky index between strings. |
| [tverskyDistance] | Get Tversky distance between strings. |
| [jaroSimilarity] | Get Jaro similarity between strings. |
| [jaroDistance] | Get Jaro distance between strings. |
| [jaroWinklerSimilarity] | Get Jaro-Winkler similarity between strings. |
| [jaroWinklerDistance] | Get Jaro-Winkler distance between strings. |
| [levenshteinDistance] | Get Levenshtein distance between strings. |
| [damerauLevenshteinDistance] | Get Damerau–Levenshtein distance between strings. |
|  |  |
| [longestCommonInfix] | Get the longest common infix between strings. |
| [longestCommonPrefix] | Get the longest common prefix of strings. |
| [longestCommonSuffix] | Get the longest common suffix of strings. |
| [longestUncommonInfixes] | Get the longest uncommon infixes of strings. |
|  |  |
| [get] | Get character at a given index in string. |
| [getAll] | Get characters at indices. |
| [set] | Write a substring at specified index in string. |
| [begin] | Get leftmost part of string. |
| [middle] | Get a portion of string from middle. |
| [end] | Get rightmost part of string. |
|  |  |
| [fromCharCode] | Get characters whose UTF-16 code units are given. |
| [fromCodePoint] | Get characters whose unicode code points are given. |
| [concat] | Combine multiple strings into one. |
| [repeat] | Repeat string given number of times. |
|  |  |
| [valueOf] | Get primitive value of string object. |
| [length] | Get length of string. |
| [charAt] | Get character at given index in string. |
| [charCodeAt] | Get UTF-16 code unit of a character in string. |
| [codePointAt] | Get unicode code point of a character in string. |
|  |  |
| [localeCompare] | Compare two strings in the current or given locale. |
|  |  |
| [includes] | Check if string has a given infix. |
| [startsWith] | Check if string has a given prefix. |
| [endsWith] | Check if string has a given suffix. |
| [indexOf] | Get first index of a given infix in string. |
| [lastIndexOf] | Get last index of a given infix in string. |
| [search] | Get first index of regular expression match in string. |
| [match] | Get results of matching string with regular expression. |
| [matchAll] | Get detailed results of matching string with regular expression. |
|  |  |
| [toString] | Get string representation of string. |
|  |  |
| [slice] | Extract section of string. |
| [substring] | Extract section of string. |
| [split] | Split string by a given separator into substrings. |
|  |  |
| [cycle] | Get characters that cycle through string. |
| [rotate] | Rotate characters in string. |
|  |  |
| [trimStart] | Remove whitespace from begining of string. |
| [trimEnd] | Remove whitespace from end of string. |
| [trim] | Remove whitespace from begining and end of string. |
| [padStart] | Pad start of string to fit a desired length. |
| [padEnd] | Pad end of string to fit a desired length. |
|  |  |
| [toUpperCase] | Convert string to upper case. |
| [toLocaleUpperCase] | Convert string to upper case, as per locale-specific case mappings. |
| [toLowerCase] | Convert string to lower case. |
| [toLocaleLowerCase] | Convert string to lower case, as per locale-specific case mappings. |
|  |  |
| [replace] | Replace first match of given pattern by replacement. |
| [normalize] | Normalize string by given form, as per Unicode Standard Annex #15. |
|  |  |
| [of] | Create string from arguments, like `Array.of()`. |
| [from] | Create string from iterable, like `Array.from()`. |
|  |  |
| [splice] | Remove/replace characters in a string. |
| [reverse] | Reverse a string. |
| [sort] | Arrange characters in an order. |
|  |  |
| [filter] | Filter characters which pass a test. |
|  |  |
| [spaces] | Get a string of spaces. |
|  |  |
| [is] | Check if value is a string. |
| [isEmpty] | Check if string is empty. |
| [isCharacter] | Check if string is a character. |
| [index] | Get non-negative index within string. |
| [indexRange] | Get non-negative index range within string. |
| [codePointRange] | Get unicode code point range of string. |
|  |  |
| [compare] | Compare two strings. |
| [isEqual] | Check if two strings are equal. |
|  |  |
| [DIGITS] | Decimal digits 0-9. |
| [OCT_DIGITS] | Octal digits 0-7. |
| [HEX_DIGITS] | Hexadecimal digits 0-9, A-F, a-f. |
| [UPPERCASE] | English letters A-Z. |
| [LOWERCASE] | English letters a-z. |
| [LETTERS] | Combination of uppercase, lowercase english letters. |
| [PUNCTUATION] | Punctuation symbols (ASCII). |
| [WHITESPACE] | The string "\t\n\x0b\x0c\r ". |
| [PRINTABLE] | Combination of digits, letters, punctuation, and whitespace (ASCII). |
| [MIN_CODE_POINT] | Minimum unicode code point. |
| [MAX_CODE_POINT] | Maximum unicode code point. |


<br>
<br>


## References

- [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Lodash documentation](https://lodash.com/docs/4.17.15)
- [natural package by Chris Umbel and contributors](https://www.npmjs.com/package/natural)
- [esrever package by Mathias Bynens and contributors](https://www.npmjs.com/package/esrever)
- [js-string-compression package by Chen Caishun](https://github.com/cschen1205/js-string-compression)
- [@stdlib/string-base-trim package by @stdlib-js](https://github.com/stdlib-js/string-base-trim)
- [How do you reverse a string in-place in JavaScript?](https://stackoverflow.com/a/959004/1413259)

<br>
<br>


## License

As of 26 June 2025, this project is licensed under AGPL-3.0. Previous versions remain under MIT.

<br>
<br>


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-string)


[DIGITS]: https://jsr.io/@nodef/extra-string/doc/~/DIGITS
[OCT_DIGITS]: https://jsr.io/@nodef/extra-string/doc/~/OCT_DIGITS
[HEX_DIGITS]: https://jsr.io/@nodef/extra-string/doc/~/HEX_DIGITS
[UPPERCASE]: https://jsr.io/@nodef/extra-string/doc/~/UPPERCASE
[LOWERCASE]: https://jsr.io/@nodef/extra-string/doc/~/LOWERCASE
[LETTERS]: https://jsr.io/@nodef/extra-string/doc/~/LETTERS
[PUNCTUATION]: https://jsr.io/@nodef/extra-string/doc/~/PUNCTUATION
[WHITESPACE]: https://jsr.io/@nodef/extra-string/doc/~/WHITESPACE
[PRINTABLE]: https://jsr.io/@nodef/extra-string/doc/~/PRINTABLE
[MIN_CODE_POINT]: https://jsr.io/@nodef/extra-string/doc/~/MIN_CODE_POINT
[MAX_CODE_POINT]: https://jsr.io/@nodef/extra-string/doc/~/MAX_CODE_POINT
[fromCharCode]: https://jsr.io/@nodef/extra-string/doc/~/fromCharCode
[fromCodePoint]: https://jsr.io/@nodef/extra-string/doc/~/fromCodePoint
[concat]: https://jsr.io/@nodef/extra-string/doc/~/concat
[repeat]: https://jsr.io/@nodef/extra-string/doc/~/repeat
[valueOf]: https://jsr.io/@nodef/extra-string/doc/~/valueOf
[length]: https://jsr.io/@nodef/extra-string/doc/~/length
[charAt]: https://jsr.io/@nodef/extra-string/doc/~/charAt
[charCodeAt]: https://jsr.io/@nodef/extra-string/doc/~/charCodeAt
[codePointAt]: https://jsr.io/@nodef/extra-string/doc/~/codePointAt
[localeCompare]: https://jsr.io/@nodef/extra-string/doc/~/localeCompare
[includes]: https://jsr.io/@nodef/extra-string/doc/~/includes
[startsWith]: https://jsr.io/@nodef/extra-string/doc/~/startsWith
[endsWith]: https://jsr.io/@nodef/extra-string/doc/~/endsWith
[indexOf]: https://jsr.io/@nodef/extra-string/doc/~/indexOf
[lastIndexOf]: https://jsr.io/@nodef/extra-string/doc/~/lastIndexOf
[search]: https://jsr.io/@nodef/extra-string/doc/~/search
[match]: https://jsr.io/@nodef/extra-string/doc/~/match
[matchAll]: https://jsr.io/@nodef/extra-string/doc/~/matchAll
[toString]: https://jsr.io/@nodef/extra-string/doc/~/toString
[slice]: https://jsr.io/@nodef/extra-string/doc/~/slice
[substring]: https://jsr.io/@nodef/extra-string/doc/~/substring
[split]: https://jsr.io/@nodef/extra-string/doc/~/split
[cycle]: https://jsr.io/@nodef/extra-string/doc/~/cycle
[rotate]: https://jsr.io/@nodef/extra-string/doc/~/rotate
[trimStart]: https://jsr.io/@nodef/extra-string/doc/~/trimStart
[trimEnd]: https://jsr.io/@nodef/extra-string/doc/~/trimEnd
[trim]: https://jsr.io/@nodef/extra-string/doc/~/trim
[padStart]: https://jsr.io/@nodef/extra-string/doc/~/padStart
[padEnd]: https://jsr.io/@nodef/extra-string/doc/~/padEnd
[toUpperCase]: https://jsr.io/@nodef/extra-string/doc/~/toUpperCase
[toLocaleUpperCase]: https://jsr.io/@nodef/extra-string/doc/~/toLocaleUpperCase
[toLowerCase]: https://jsr.io/@nodef/extra-string/doc/~/toLowerCase
[toLocaleLowerCase]: https://jsr.io/@nodef/extra-string/doc/~/toLocaleLowerCase
[replace]: https://jsr.io/@nodef/extra-string/doc/~/replace
[normalize]: https://jsr.io/@nodef/extra-string/doc/~/normalize
[of]: https://jsr.io/@nodef/extra-string/doc/~/of
[from]: https://jsr.io/@nodef/extra-string/doc/~/from
[splice]: https://jsr.io/@nodef/extra-string/doc/~/splice
[reverse]: https://jsr.io/@nodef/extra-string/doc/~/reverse
[sort]: https://jsr.io/@nodef/extra-string/doc/~/sort
[filter]: https://jsr.io/@nodef/extra-string/doc/~/filter
[spaces]: https://jsr.io/@nodef/extra-string/doc/~/spaces
[is]: https://jsr.io/@nodef/extra-string/doc/~/is
[isEmpty]: https://jsr.io/@nodef/extra-string/doc/~/isEmpty
[isCharacter]: https://jsr.io/@nodef/extra-string/doc/~/isCharacter
[index]: https://jsr.io/@nodef/extra-string/doc/~/index
[indexRange]: https://jsr.io/@nodef/extra-string/doc/~/indexRange
[codePointRange]: https://jsr.io/@nodef/extra-string/doc/~/codePointRange
[compare]: https://jsr.io/@nodef/extra-string/doc/~/compare
[isEqual]: https://jsr.io/@nodef/extra-string/doc/~/isEqual
[get]: https://jsr.io/@nodef/extra-string/doc/~/get
[getAll]: https://jsr.io/@nodef/extra-string/doc/~/getAll
[set]: https://jsr.io/@nodef/extra-string/doc/~/set
[begin]: https://jsr.io/@nodef/extra-string/doc/~/begin
[middle]: https://jsr.io/@nodef/extra-string/doc/~/middle
[end]: https://jsr.io/@nodef/extra-string/doc/~/end
[longestCommonInfix]: https://jsr.io/@nodef/extra-string/doc/~/longestCommonInfix
[longestCommonPrefix]: https://jsr.io/@nodef/extra-string/doc/~/longestCommonPrefix
[longestCommonSuffix]: https://jsr.io/@nodef/extra-string/doc/~/longestCommonSuffix
[longestUncommonInfixes]: https://jsr.io/@nodef/extra-string/doc/~/longestUncommonInfixes
[toBaseline]: https://jsr.io/@nodef/extra-string/doc/~/toBaseline
[toSuperscript]: https://jsr.io/@nodef/extra-string/doc/~/toSuperscript
[toSubscript]: https://jsr.io/@nodef/extra-string/doc/~/toSubscript
[toKebabCase]: https://jsr.io/@nodef/extra-string/doc/~/toKebabCase
[toSnakeCase]: https://jsr.io/@nodef/extra-string/doc/~/toSnakeCase
[toCamelCase]: https://jsr.io/@nodef/extra-string/doc/~/toCamelCase
[toPascalCase]: https://jsr.io/@nodef/extra-string/doc/~/toPascalCase
[toSlugCase]: https://jsr.io/@nodef/extra-string/doc/~/toSlugCase
[toWords]: https://jsr.io/@nodef/extra-string/doc/~/toWords
[ngrams]: https://jsr.io/@nodef/extra-string/doc/~/ngrams
[uniqueNgrams]: https://jsr.io/@nodef/extra-string/doc/~/uniqueNgrams
[countNgrams]: https://jsr.io/@nodef/extra-string/doc/~/countNgrams
[countUniqueNgrams]: https://jsr.io/@nodef/extra-string/doc/~/countUniqueNgrams
[countEachNgram]: https://jsr.io/@nodef/extra-string/doc/~/countEachNgram
[matchingNgrams]: https://jsr.io/@nodef/extra-string/doc/~/matchingNgrams
[uniqueMatchingNgrams]: https://jsr.io/@nodef/extra-string/doc/~/uniqueMatchingNgrams
[countMatchingNgrams]: https://jsr.io/@nodef/extra-string/doc/~/countMatchingNgrams
[countEachMatchingNgram]: https://jsr.io/@nodef/extra-string/doc/~/countEachMatchingNgram
[countUniqueMatchingNgrams]: https://jsr.io/@nodef/extra-string/doc/~/countUniqueMatchingNgrams
[euclideanDistance]: https://jsr.io/@nodef/extra-string/doc/~/euclideanDistance
[hammingDistance]: https://jsr.io/@nodef/extra-string/doc/~/hammingDistance
[jaccardIndex]: https://jsr.io/@nodef/extra-string/doc/~/jaccardIndex
[jaccardDistance]: https://jsr.io/@nodef/extra-string/doc/~/jaccardDistance
[sorensenDiceIndex]: https://jsr.io/@nodef/extra-string/doc/~/sorensenDiceIndex
[sorensenDiceDistance]: https://jsr.io/@nodef/extra-string/doc/~/sorensenDiceDistance
[tverskyIndex]: https://jsr.io/@nodef/extra-string/doc/~/tverskyIndex
[tverskyDistance]: https://jsr.io/@nodef/extra-string/doc/~/tverskyDistance
[jaroSimilarity]: https://jsr.io/@nodef/extra-string/doc/~/jaroSimilarity
[jaroDistance]: https://jsr.io/@nodef/extra-string/doc/~/jaroDistance
[jaroWinklerSimilarity]: https://jsr.io/@nodef/extra-string/doc/~/jaroWinklerSimilarity
[jaroWinklerDistance]: https://jsr.io/@nodef/extra-string/doc/~/jaroWinklerDistance
[levenshteinDistance]: https://jsr.io/@nodef/extra-string/doc/~/levenshteinDistance
[damerauLevenshteinDistance]: https://jsr.io/@nodef/extra-string/doc/~/damerauLevenshteinDistance
