A collection of common string functions.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-string),
🌐 [Web](https://www.npmjs.com/package/extra-string.web),
📜 [Files](https://unpkg.com/extra-string/),
📰 [Docs](https://nodef.github.io/extra-string/).

A [string] is a sequence of characters. In JavaScript, strings are not
[mutable]. Any transfomation of a *string*, such as `slice` or `concat`
generates a *new string*. The *JavaScript runtime* however may optimize this
behavior by *mutating strings behind the scenes*, when it can be guarenteed that
the previous string is *not accessible* to the programmer. The *runtime* may
also *avoid copying slices* of a string, or even *concatenation of slices of*
*strings*, by implementing it as a *series of lookups into existing strings*.
Food for thought.

This package provides functions for generating [spaces]; querying **about** a
string such as [is], [isEmpty], [isCharacter], [index], [indexRange],
[codePointRange]; **comparing** strings such as [compare], [isEqual]; getting
**parts** of a string such as [get], [getAll], [set], [begin], [middle], [end];
**searching** a string such as [longestCommonInfix], [longestCommonPrefix],
[longestCommonSuffix], [longestUncommonInfixes]; **transforming** a string such
as [toBaseline], [toSuperscript], [toSubscript]; **transforming case** of a
string such as [toKebabCase], [toSnakeCase], [toCamelCase], [toPascalCase];
finding **ngrams** in strings such as [ngrams], [uniqueNgrams], [countNgrams],
[countUniqueNgrams], [countEachNgram], [matchingNgrams], [uniqueMatchingNgrams],
[countMatchingNgrams], [countEachMatchingNgram], [countUniqueMatchingNgrams];
and finding **similarity/distance** between strings such as [euclideanDistance],
[hammingDistance], [jaccardIndex], [jaccardDistance], [sorensenDiceIndex],
[sorensenDiceDistance], [tverskyIndex], [tverskyDistance], [jaroSimilarity],
[jaroDistance], [jaroWinklerSimilarity], [jaroWinklerDistance],
[levenshteinDistance], [damerauLevenshteinDistance].

This package also provides **Array-like functions** for strings. These includes
functions for **generating** a string such as [of], [from]; **transforming** a
string such as [splice], [reverse], [sort]; and **functional behavior** such as
[filter]. All **built-in** string functions are also included. Finally,
**constants** for *ASCII characters*, and *minimum/maximum code point* are
included.

This package is available in both *Node.js* and *Web* formats. The web format
is exposed as `extra_string` standalone variable and can be loaded from
[jsDelivr CDN].

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[mutable]: https://developer.mozilla.org/en-US/docs/Glossary/Mutable
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-string.web/index.js

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

<br>


```javascript
const string = require('extra-string');
// import * as string from "extra-string";
// import * as string from "https://unpkg.com/extra-string/index.mjs"; (deno)

string.longestCommonInfix('dismiss', 'mississipi');
// → 'miss'

string.longestUncommonInfixes('chocolatier', 'engineer');
// → ['chocolati', 'engine']

string.toKebabCase('Malwa Plateau');
// → 'malwa-plateau'

'6.626 x 10' + string.toSuperscript('-34');
// → '6.626 x 10⁻³⁴' (Planck's constant)

string.tverskyDistance('pikachu', 'raichu', 3, 0.2, 0.4);
// → 0.6666666666666667
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
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
| [get] | Get character at a given index in string. |
| [getAll] | Get characters at indices. |
| [set] | Write a substring at specified index in string. |
| [begin] | Get leftmost part of string. |
| [middle] | Get a portion of string from middle. |
| [end] | Get rightmost part of string. |
|  |  |
| [longestCommonInfix] | Get the longest common infix between strings. |
| [longestCommonPrefix] | Get the longest common prefix of strings. |
| [longestCommonSuffix] | Get the longest common suffix of strings. |
| [longestUncommonInfixes] | Get the longest uncommon infixes of strings. |
|  |  |
| [toBaseline] | Convert a string to baseline characters (limited support). |
| [toSuperscript] | Convert a string to superscript characters (limited support). |
| [toSubscript] | Convert a string to superscript characters (limited support). |
|  |  |
| [toKebabCase] | Convert a string to kebab-case. |
| [toSnakeCase] | Convert a string to snake-case. |
| [toCamelCase] | Convert a string to camel-case. |
| [toPascalCase] | Convert a string to pascal-case. |
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


<br>
<br>


## References

- [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Lodash documentation](https://lodash.com/docs/4.17.15)
- [natural package by Chris Umbel and contributors](https://www.npmjs.com/package/natural)
- [esrever package by Mathias Bynens and contributors](https://www.npmjs.com/package/esrever)
- [How do you reverse a string in-place in JavaScript?](https://stackoverflow.com/a/959004/1413259)

<br>
<br>


[![](https://img.youtube.com/vi/zi0w7J7MCrk/maxresdefault.jpg)](https://www.youtube.com/watch?v=zi0w7J7MCrk)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/149915096.svg)](https://zenodo.org/badge/latestdoi/149915096)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-string/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-string?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1d8fb20d076d49a0f671/test_coverage)](https://codeclimate.com/github/nodef/extra-string/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/1d8fb20d076d49a0f671/maintainability)](https://codeclimate.com/github/nodef/extra-string/maintainability)


[DIGITS]: https://nodef.github.io/extra-string/modules.html#DIGITS
[OCT_DIGITS]: https://nodef.github.io/extra-string/modules.html#OCT_DIGITS
[HEX_DIGITS]: https://nodef.github.io/extra-string/modules.html#HEX_DIGITS
[UPPERCASE]: https://nodef.github.io/extra-string/modules.html#UPPERCASE
[LOWERCASE]: https://nodef.github.io/extra-string/modules.html#LOWERCASE
[LETTERS]: https://nodef.github.io/extra-string/modules.html#LETTERS
[PUNCTUATION]: https://nodef.github.io/extra-string/modules.html#PUNCTUATION
[WHITESPACE]: https://nodef.github.io/extra-string/modules.html#WHITESPACE
[PRINTABLE]: https://nodef.github.io/extra-string/modules.html#PRINTABLE
[MIN_CODE_POINT]: https://nodef.github.io/extra-string/modules.html#MIN_CODE_POINT
[MAX_CODE_POINT]: https://nodef.github.io/extra-string/modules.html#MAX_CODE_POINT
[fromCharCode]: https://nodef.github.io/extra-string/modules.html#fromCharCode
[fromCodePoint]: https://nodef.github.io/extra-string/modules.html#fromCodePoint
[concat]: https://nodef.github.io/extra-string/modules.html#concat
[repeat]: https://nodef.github.io/extra-string/modules.html#repeat
[valueOf]: https://nodef.github.io/extra-string/modules.html#valueOf
[length]: https://nodef.github.io/extra-string/modules.html#length
[charAt]: https://nodef.github.io/extra-string/modules.html#charAt
[charCodeAt]: https://nodef.github.io/extra-string/modules.html#charCodeAt
[codePointAt]: https://nodef.github.io/extra-string/modules.html#codePointAt
[localeCompare]: https://nodef.github.io/extra-string/modules.html#localeCompare
[includes]: https://nodef.github.io/extra-string/modules.html#includes
[startsWith]: https://nodef.github.io/extra-string/modules.html#startsWith
[endsWith]: https://nodef.github.io/extra-string/modules.html#endsWith
[indexOf]: https://nodef.github.io/extra-string/modules.html#indexOf
[lastIndexOf]: https://nodef.github.io/extra-string/modules.html#lastIndexOf
[search]: https://nodef.github.io/extra-string/modules.html#search
[match]: https://nodef.github.io/extra-string/modules.html#match
[matchAll]: https://nodef.github.io/extra-string/modules.html#matchAll
[toString]: https://nodef.github.io/extra-string/modules.html#toString
[slice]: https://nodef.github.io/extra-string/modules.html#slice
[substring]: https://nodef.github.io/extra-string/modules.html#substring
[split]: https://nodef.github.io/extra-string/modules.html#split
[trimStart]: https://nodef.github.io/extra-string/modules.html#trimStart
[trimEnd]: https://nodef.github.io/extra-string/modules.html#trimEnd
[trim]: https://nodef.github.io/extra-string/modules.html#trim
[padStart]: https://nodef.github.io/extra-string/modules.html#padStart
[padEnd]: https://nodef.github.io/extra-string/modules.html#padEnd
[toUpperCase]: https://nodef.github.io/extra-string/modules.html#toUpperCase
[toLocaleUpperCase]: https://nodef.github.io/extra-string/modules.html#toLocaleUpperCase
[toLowerCase]: https://nodef.github.io/extra-string/modules.html#toLowerCase
[toLocaleLowerCase]: https://nodef.github.io/extra-string/modules.html#toLocaleLowerCase
[replace]: https://nodef.github.io/extra-string/modules.html#replace
[normalize]: https://nodef.github.io/extra-string/modules.html#normalize
[of]: https://nodef.github.io/extra-string/modules.html#of
[from]: https://nodef.github.io/extra-string/modules.html#from
[splice]: https://nodef.github.io/extra-string/modules.html#splice
[reverse]: https://nodef.github.io/extra-string/modules.html#reverse
[sort]: https://nodef.github.io/extra-string/modules.html#sort
[filter]: https://nodef.github.io/extra-string/modules.html#filter
[spaces]: https://nodef.github.io/extra-string/modules.html#spaces
[is]: https://nodef.github.io/extra-string/modules.html#is
[isEmpty]: https://nodef.github.io/extra-string/modules.html#isEmpty
[isCharacter]: https://nodef.github.io/extra-string/modules.html#isCharacter
[index]: https://nodef.github.io/extra-string/modules.html#index
[indexRange]: https://nodef.github.io/extra-string/modules.html#indexRange
[codePointRange]: https://nodef.github.io/extra-string/modules.html#codePointRange
[compare]: https://nodef.github.io/extra-string/modules.html#compare
[isEqual]: https://nodef.github.io/extra-string/modules.html#isEqual
[get]: https://nodef.github.io/extra-string/modules.html#get
[getAll]: https://nodef.github.io/extra-string/modules.html#getAll
[set]: https://nodef.github.io/extra-string/modules.html#set
[begin]: https://nodef.github.io/extra-string/modules.html#begin
[middle]: https://nodef.github.io/extra-string/modules.html#middle
[end]: https://nodef.github.io/extra-string/modules.html#end
[longestCommonInfix]: https://nodef.github.io/extra-string/modules.html#longestCommonInfix
[longestCommonPrefix]: https://nodef.github.io/extra-string/modules.html#longestCommonPrefix
[longestCommonSuffix]: https://nodef.github.io/extra-string/modules.html#longestCommonSuffix
[longestUncommonInfixes]: https://nodef.github.io/extra-string/modules.html#longestUncommonInfixes
[toBaseline]: https://nodef.github.io/extra-string/modules.html#toBaseline
[toSuperscript]: https://nodef.github.io/extra-string/modules.html#toSuperscript
[toSubscript]: https://nodef.github.io/extra-string/modules.html#toSubscript
[toKebabCase]: https://nodef.github.io/extra-string/modules.html#toKebabCase
[toSnakeCase]: https://nodef.github.io/extra-string/modules.html#toSnakeCase
[toCamelCase]: https://nodef.github.io/extra-string/modules.html#toCamelCase
[toPascalCase]: https://nodef.github.io/extra-string/modules.html#toPascalCase
[ngrams]: https://nodef.github.io/extra-string/modules.html#ngrams
[uniqueNgrams]: https://nodef.github.io/extra-string/modules.html#uniqueNgrams
[countNgrams]: https://nodef.github.io/extra-string/modules.html#countNgrams
[countUniqueNgrams]: https://nodef.github.io/extra-string/modules.html#countUniqueNgrams
[countEachNgram]: https://nodef.github.io/extra-string/modules.html#countEachNgram
[matchingNgrams]: https://nodef.github.io/extra-string/modules.html#matchingNgrams
[uniqueMatchingNgrams]: https://nodef.github.io/extra-string/modules.html#uniqueMatchingNgrams
[countMatchingNgrams]: https://nodef.github.io/extra-string/modules.html#countMatchingNgrams
[countEachMatchingNgram]: https://nodef.github.io/extra-string/modules.html#countEachMatchingNgram
[countUniqueMatchingNgrams]: https://nodef.github.io/extra-string/modules.html#countUniqueMatchingNgrams
[euclideanDistance]: https://nodef.github.io/extra-string/modules.html#euclideanDistance
[hammingDistance]: https://nodef.github.io/extra-string/modules.html#hammingDistance
[jaccardIndex]: https://nodef.github.io/extra-string/modules.html#jaccardIndex
[jaccardDistance]: https://nodef.github.io/extra-string/modules.html#jaccardDistance
[sorensenDiceIndex]: https://nodef.github.io/extra-string/modules.html#sorensenDiceIndex
[sorensenDiceDistance]: https://nodef.github.io/extra-string/modules.html#sorensenDiceDistance
[tverskyIndex]: https://nodef.github.io/extra-string/modules.html#tverskyIndex
[tverskyDistance]: https://nodef.github.io/extra-string/modules.html#tverskyDistance
[jaroSimilarity]: https://nodef.github.io/extra-string/modules.html#jaroSimilarity
[jaroDistance]: https://nodef.github.io/extra-string/modules.html#jaroDistance
[jaroWinklerSimilarity]: https://nodef.github.io/extra-string/modules.html#jaroWinklerSimilarity
[jaroWinklerDistance]: https://nodef.github.io/extra-string/modules.html#jaroWinklerDistance
[levenshteinDistance]: https://nodef.github.io/extra-string/modules.html#levenshteinDistance
[damerauLevenshteinDistance]: https://nodef.github.io/extra-string/modules.html#damerauLevenshteinDistance
