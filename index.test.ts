// Copyright (C) 2025 Subhajit Sahu
// SPDX-License-Identifier: AGPL-3.0-or-later
// See LICENSE for full terms

import {assert, assertEquals} from "jsr:@std/assert";
import * as xstring from "./index.ts";
import {
  type ReplaceFunction,
  fromCharCode,
  fromCodePoint,
  concat,
  repeat,
  valueOf,
  length,
  charAt,
  charCodeAt,
  codePointAt,
  localeCompare,
  includes,
  startsWith,
  endsWith,
  indexOf,
  lastIndexOf,
  search,
  match,
  matchAll,
  toString,
  slice,
  substring,
  split,
  trimStart,
  trimEnd,
  trim,
  padStart,
  padEnd,
  toUpperCase,
  toLocaleUpperCase,
  toLowerCase,
  toLocaleLowerCase,
  replace,
  normalize,
  filter,
  longestCommonInfix,
  longestCommonPrefix,
  longestCommonSuffix,
  longestUncommonInfixes,
  toKebabCase,
  toSuperscript,
  tverskyDistance,
} from "./index.ts";




// 1. Basic tests.
Deno.test("example1", () => {
  const a = xstring.longestCommonInfix("dismiss", "mississipi");
  assertEquals(a, "miss");
  // → "miss"

  const b = xstring.longestUncommonInfixes("chocolatier", "engineer");
  assertEquals(b, ["chocolati", "engine"]);
  // → ["chocolati", "engine"]

  const c = xstring.toKebabCase("Malwa Plateau");
  assertEquals(c, "malwa-plateau");
  // → "malwa-plateau"

  const d = "6.626 x 10" + xstring.toSuperscript("-34");
  assertEquals(d, "6.626 x 10⁻³⁴");
  // → "6.626 x 10⁻³⁴" (Planck"s constant)

  const e = xstring.tverskyDistance("pikachu", "raichu", 3, 0.2, 0.4);
  assertEquals(e, 0.6666666666666667);
  // → 0.6666666666666667
});




Deno.test("fromCharCode.1", () => {
  const a = fromCharCode(189, 43, 190, 61);
  assertEquals(a, "½+¾=");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


Deno.test("fromCharCode.2", () => {
  const a = fromCharCode(65, 66, 67);
  assertEquals(a, "ABC");
  const b = fromCharCode(0x2014);
  assertEquals(b, "—");
  const c = fromCharCode(0x12014);
  assertEquals(c, "—");  // the digit 1 is truncated and ignored
  const d = fromCharCode(8212);
  assertEquals(d, "—");  // 8212 is the decimal form of 0x2014
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


Deno.test("fromCharCode.3", () => {
  const a = fromCharCode(0xD83C, 0xDF03);
  assertEquals(a, "🌃");
  const b = fromCharCode(55356, 57091);
  assertEquals(b, "🌃");
  const c = fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07);
  assertEquals(c, "𝌆a𝌇");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode




Deno.test("fromCodePoint.1", () => {
  const a = fromCodePoint(9731, 9733, 9842, 0x2F804);
  assertEquals(a, "☃★♲你");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint


Deno.test("fromCodePoint.2", () => {
  const a = fromCodePoint(42);
  assertEquals(a, "*");
  const b = fromCodePoint(65, 90);
  assertEquals(b, "AZ");
  const c = fromCodePoint(0x404);
  assertEquals(c, "Є");
  const d = fromCodePoint(0x2F804);
  assertEquals(d, "你");
  const e = fromCodePoint(194564);
  assertEquals(e, "你");
  const f = fromCodePoint(0x1D306, 0x61, 0x1D307);
  assertEquals(f, "𝌆a𝌇");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint


Deno.test("fromCodePoint.3", () => {
  const a = fromCodePoint(0x1F303);
  assertEquals(a, "🌃");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint




Deno.test("concat.1", () => {
  const str1 = "Hello";
  const str2 = "World";
  const a = concat(str1, " ", str2);
  assertEquals(a, "Hello World");
  const b = concat(str2, ", ", str1);
  assertEquals(b, "World, Hello");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat


Deno.test("concat.2", () => {
  const hello = "Hello, ";
  const a = concat(hello, "Kevin", ". Have a nice day.");
  assertEquals(a, "Hello, Kevin. Have a nice day.");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat


Deno.test("concat.3", () => {
  const greetList = ["Hello", " ", "Venkat", "!"];
  const a = concat(...greetList);
  assertEquals(a, "Hello Venkat!");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat


Deno.test("concat.4", () => {
  const a = concat({});
  assertEquals(a, "[object Object]");
  const b = concat([]);
  assertEquals(b, "");
  const c = concat(null);
  assertEquals(c, "null");
  const d = concat(true);
  assertEquals(d, "true");
  const e = concat(4, 5);
  assertEquals(e, "45");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat




Deno.test("repeat", () => {
  const a = repeat("abc", 0);
  assertEquals(a, "");
  const b = repeat("abc", 1);
  assertEquals(b, "abc");
  const c = repeat("abc", 2);
  assertEquals(c, "abcabc");
  const d = repeat("abc", 3.5);
  assertEquals(d, "abcabcabc");  // count will be converted to integer
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat




Deno.test("valueOf", () => {
  const a = valueOf("foo");
  assertEquals(a, "foo");
  const b = valueOf("Hello world");
  assertEquals(b, "Hello world");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf




Deno.test("length", () => {
  const str   = "Life, the universe and everything. Answer:";
  assertEquals(length(str), 42);
  const x     = "Mozilla";
  assertEquals(length(x), 7);
  const empty = "";
  assertEquals(length(empty), 0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length




Deno.test("charAt.1", () => {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const a = charAt(sentence, 4);
  assertEquals(a, "q");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt


Deno.test("charAt.2", () => {
  const anyString = "Brave new world";
  const a = charAt(anyString, 0);
  assertEquals(a, "B");
  const b = charAt(anyString, 1);
  assertEquals(b, "r");
  const c = charAt(anyString, 2);
  assertEquals(c, "a");
  const d = charAt(anyString, 3);
  assertEquals(d, "v");
  const e = charAt(anyString, 4);
  assertEquals(e, "e");
  const f = charAt(anyString, 999);
  assertEquals(f, "");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt




Deno.test("charCodeAt", () => {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const a = charCodeAt(sentence, 4);
  assertEquals(a, 113);
  const b = charCodeAt("ABC", 0);
  assertEquals(b, 65);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt




Deno.test("codePointAt", () => {
  const a = codePointAt("☃★♲", 1);
  assertEquals(a, 9733);
  const b = codePointAt("ABC", 0);
  assertEquals(b, 65);
  const c = codePointAt("😍", 0);
  assertEquals(c, 128525);
  const d = codePointAt("😍", 1);
  assertEquals(d, 56845);
  const e = codePointAt("ABC", 42);
  assertEquals(e, undefined);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt




Deno.test("localeCompare.1", () => {
  const a = "réservé";
  const b = "RESERVE";
  const x = localeCompare(a, b);
  assert(x > 0);
  const y = localeCompare(a, b, "en", {sensitivity: "base"});
  assertEquals(y, 0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare


Deno.test("localeCompare.2", () => {
  const a = localeCompare("a", "c");
  assert(a < 0);
  const b = localeCompare("check", "against");
  assert(b > 0);
  const c = localeCompare("a", "a");
  assertEquals(c, 0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare


Deno.test("localeCompare.3", () => {
  const a = localeCompare("ä", "z", "de");
  assert(a < 0);
  const b = localeCompare("ä", "z", "sv");
  assert(b > 0);
  const c = localeCompare("ä", "a", "de", {sensitivity: "base"});
  assertEquals(c, 0);
  const d = localeCompare("ä", "a", "sv", {sensitivity: "base"});
  assert(d > 0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare


Deno.test("localeCompare.4", () => {
  const a = localeCompare("2", "10");
  assert(a > 0);
  const b = localeCompare("2", "10", undefined, {numeric: true});
  assert(b < 0);
  const c = localeCompare("2", "10", "en-u-kn-true");
  assert(c < 0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare




Deno.test("includes.1", () => {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const a = includes(sentence, "fox");
  assertEquals(a, true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


Deno.test("includes.2", () => {
  const a = includes("Blue Whale", "blue");
  assertEquals(a, false);
  const b = includes("Blue Whale".toLowerCase(), "blue");
  assertEquals(b, true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


Deno.test("includes.3", () => {
  const str = "To be, or not to be, that is the question.";
  const a = includes(str, "To be");
  assertEquals(a, true);
  const b = includes(str, "question");
  assertEquals(b, true);
  const c = includes(str, "nonexistent");
  assertEquals(c, false);
  const d = includes(str, "To be", 1);
  assertEquals(d, false);
  const e = includes(str, "TO BE");
  assertEquals(e, false);
  const f = includes(str, "");
  assertEquals(f, true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes




Deno.test("startsWith.1", () => {
  const str1 = "Saturday night plans";
  const a = startsWith(str1, "Sat");
  assertEquals(a, true);
  const b = startsWith(str1, "Sat", 3);
  assertEquals(b, false);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


Deno.test("startsWith.2", () => {
  const str = "To be, or not to be, that is the question.";
  const a = startsWith(str, "To be");
  assertEquals(a, true);
  const b = startsWith(str, "not to be");
  assertEquals(b, false);
  const c = startsWith(str, "not to be", 10);
  assertEquals(c, true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith




Deno.test("endsWith.1", () => {
  const str1 = "Cats are the best!";
  const a = endsWith(str1, "best!");
  assertEquals(a, true);
  const b = endsWith(str1, "best", 17);
  assertEquals(b, true);
  const str2 = "Is this a question?";
  const c = endsWith(str2, "question");
  assertEquals(c, false);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


Deno.test("endsWith.2", () => {
  const str = "To be, or not to be, that is the question.";
  const a = endsWith(str, "question.");
  assertEquals(a, true);
  const b = endsWith(str, "to be");
  assertEquals(b, false);
  const c = endsWith(str, "to be", 19);
  assertEquals(c, true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith




Deno.test("indexOf.1", () => {
  const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
  const a = indexOf(paragraph, "dog");
  assertEquals(a, 40);
  const b = indexOf(paragraph, "dog", 41);
  assertEquals(b, 52);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


Deno.test("indexOf.2", () => {
  const str = "hello world";
  const a = indexOf(str, "");
  assertEquals(a, 0);
  const b = indexOf(str, "", 0);
  assertEquals(b, 0);
  const c = indexOf(str, "", 3);
  assertEquals(c, 3);
  const d = indexOf(str, "", 8);
  assertEquals(d, 8);
  const e = indexOf(str, "", 11);
  assertEquals(e, 11);
  const f = indexOf(str, "", 13);
  assertEquals(f, 11);
  const g = indexOf(str, "", 22);
  assertEquals(g, 11);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


Deno.test("indexOf.3", () => {
  const str = "Blue Whale";
  const a = indexOf(str, "Blue");
  assertEquals(a, 0);
  const b = indexOf(str, "Blute");
  assertEquals(b, -1);
  const c = indexOf(str, "Whale", 0);
  assertEquals(c, 5);
  const d = indexOf(str, "Whale", 5);
  assertEquals(d, 5);
  const e = indexOf(str, "Whale", 7);
  assertEquals(e, -1);
  const f = indexOf(str, "");
  assertEquals(f, 0);
  const g = indexOf(str, "", 9);
  assertEquals(g, 9);
  const h = indexOf(str, "", 10);
  assertEquals(h, 10);
  const i = indexOf(str, "", 11);
  assertEquals(i, 10);
  const j = indexOf(str, "blue");
  assertEquals(j, -1);
  const k = indexOf(str, "Blue");
  assert(k !== -1);
  const l = indexOf(str, "Bloe");
  assertEquals(l, -1);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


Deno.test("indexOf.4", () => {
  const str = "Brave new world";
  const a = indexOf(str, "w");
  assertEquals(a, 8);
  const b = indexOf(str, "new");
  assertEquals(b, 6);
  const c = indexOf("brie, pepper jack, cheddar", "cheddar");
  assertEquals(c, 19);
  const d = indexOf("Brie, Pepper Jack, Cheddar", "cheddar");
  assertEquals(d, -1);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


Deno.test("indexOf.5", () => {
  const myString    = "brie, pepper jack, cheddar";
  const myCapString = "Brie, Pepper Jack, Cheddar";
  const a = indexOf(myString, "cheddar");
  assertEquals(a, 19);
  const b = indexOf(myCapString, "cheddar");
  assertEquals(b, -1);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf




Deno.test("lastIndexOf.1", () => {
  const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
  const a = lastIndexOf(paragraph, "dog");
  assertEquals(a, 52);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf


Deno.test("lastIndexOf.2", () => {
  const str = "canal";
  const a = lastIndexOf(str, "a");
  assertEquals(a, 3);
  const b = lastIndexOf(str, "a", 2);
  assertEquals(b, 1);
  const c = lastIndexOf(str, "a", 0);
  assertEquals(c, -1);
  const d = lastIndexOf(str, "x");
  assertEquals(d, -1);
  const e = lastIndexOf(str, "c", -5);
  assertEquals(e, 0);
  const f = lastIndexOf(str, "c", 0);
  assertEquals(f, 0);
  const g = lastIndexOf(str, "");
  assertEquals(g, 5);
  const h = lastIndexOf(str, "", 2);
  assertEquals(h, 2);
  const i = lastIndexOf("Blue Whale, Killer Whale", "blue");
  assertEquals(i, -1);
  const j = lastIndexOf("Brave, Brave New World", "Brave");
  assertEquals(j, 7);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf


Deno.test("lastIndexOf.3", () => {
  const a = lastIndexOf("Blue Whale, Killer Whale", "blue");
  assertEquals(a, -1);
  const b = lastIndexOf("Brave, Brave New World", "Brave");
  assertEquals(b, 7);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf




Deno.test("search.1", () => {
  const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
  const a = search(paragraph, /[^\w\s]/g);
  assertEquals(a, 43);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search


Deno.test("search.2", () => {
  const str = "hey JudE";
  const a = search(str, /[A-Z]/g);
  assertEquals(a, 4);
  const b = search(str, /[.]/g);
  assertEquals(b, -1);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search




Deno.test("match.1", () => {
  const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
  const a = match(paragraph, /[A-Z]/g);
  assertEquals(a, ["T", "I"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


Deno.test("match.2", () => {
  const str = "For more information, see Chapter 3.4.5.1";
  const a = match(str, /see (chapter \d+(\.\d)*)/i) as RegExpExecArray;
  assertEquals([...a], ["see Chapter 3.4.5.1", "Chapter 3.4.5.1", ".1"]);
  assertEquals(a.index, 22);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


Deno.test("match.3", () => {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const a = match(str, /[A-E]/gi);
  assertEquals(a, ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


Deno.test("match.4", () => {
  const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
  const a = match(paragraph, /(?<animal>fox|cat) jumps over/) as RegExpExecArray;
  assertEquals(a.groups?.animal, "fox");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


Deno.test("match.5", () => {
  const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.";
  const a = match(str1, "number") as RegExpExecArray;
  assertEquals([...a], ["number"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match




Deno.test("matchAll.1", () => {
  const str = "test1test2";
  const a = [...matchAll(str, /t(e)(st(\d?))/g)];
  assertEquals([...a[0]], ["test1", "e", "st1", "1"]);
  assertEquals(a[0].index, 0);
  assertEquals(a[0].length, 4);
  assertEquals([...a[1]], ["test2", "e", "st2", "2"]);
  assertEquals(a[1].index, 5);
  assertEquals(a[1].length, 4);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll


Deno.test("matchAll.2", () => {
  const re  = new RegExp('[a-c]', 'g');
  re.lastIndex = 1;
  const str = "abc";
  const a = Array.from(matchAll(str, re), m => `${re.lastIndex} ${m[0]}`);
  assertEquals(a, ["1 b", "1 c"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll




Deno.test("toString", () => {
  const a = toString("foo");
  assertEquals(a, "foo");
  const b = toString("Hello world");
  assertEquals(b, "Hello world");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString




Deno.test("slice.1", () => {
  const str = "The quick brown fox jumps over the lazy dog.";
  assertEquals(slice(str, 31), "the lazy dog.");
  assertEquals(slice(str, 4, 19), "quick brown fox");
  assertEquals(slice(str, -4), "dog.");
  assertEquals(slice(str, -9, -5), "lazy");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


Deno.test("slice.2", () => {
  const str1 = "The morning is upon us.";
  const str2 = slice(str1, 1, 8);
  const str3 = slice(str1, 4, -2);
  const str4 = slice(str1, 12);
  const str5 = slice(str1, 30);
  assertEquals(str2, "he morn");
  assertEquals(str3, "morning is upon u");
  assertEquals(str4, "is upon us.");
  assertEquals(str5, "");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


Deno.test("slice.3", () => {
  const str = "The morning is upon us.";
  assertEquals(slice(str, -3), "us.");
  assertEquals(slice(str, -3, -1), "us");
  assertEquals(slice(str, 0, -1), "The morning is upon us");
  assertEquals(slice(str, 4, -1), "morning is upon us");
  assertEquals(slice(str, -11, 16), "is u");
  assertEquals(slice(str, 11, -7), " is u");
  assertEquals(slice(str, -5, -1), "n us");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice




Deno.test("substring.1", () => {
  const str = "Mozilla";
  const a = substring(str, 1, 3);
  assertEquals(a, "oz");
  const b = substring(str, 2);
  assertEquals(b, "zilla");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring


Deno.test("substring.2", () => {
  const anyString = "Mozilla";
  const a = substring(anyString, 0, 1);
  assertEquals(a, "M");
  const b = substring(anyString, 1, 0);
  assertEquals(b, "M");
  const c = substring(anyString, 0, 6);
  assertEquals(c, "Mozill");
  const d = substring(anyString, 4);
  assertEquals(d, "lla");
  const e = substring(anyString, 4, 7);
  assertEquals(e, "lla");
  const f = substring(anyString, 7, 4);
  assertEquals(f, "lla");
  const g = substring(anyString, 0, 7);
  assertEquals(g, "Mozilla");
  const h = substring(anyString, 0, 10);
  assertEquals(h, "Mozilla");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring


Deno.test("substring.3", () => {
  const text = "Mozilla";
  const a = substring(text, text.length - 4);
  assertEquals(a, "illa");
  const b = substring(text, text.length - 5);
  assertEquals(b, "zilla");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring


Deno.test("substring.4", () => {
  const text = "Mozilla";
  const a = substring(text, 2, 5);
  assertEquals(a, "zil");
  const b = substring(text, 5, 2);
  assertEquals(b, "zil");
  const c = substring(text, -5, 2);
  assertEquals(c, "Mo");
  const d = substring(text, -5, -2);
  assertEquals(d, "");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring




Deno.test("split.1", () => {
  const str = "The quick brown fox jumps over the lazy dog.";
  const a = split(str, " ");
  assertEquals(a[3], "fox");
  const b = split(str, "");
  assertEquals(b[8], "k");
  const c = split(str);
  assertEquals(c, [str]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


Deno.test("split.2", () => {
  const emptyString = "";
  const a = split(emptyString);
  assertEquals(a, [""]);
  const b = split(emptyString, "");
  assertEquals(b, []);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


Deno.test("split.3", () => {
  const tempestString = "Oh brave new world that has such people in it.";
  const a = split(tempestString, " ");
  assertEquals(a.join(" / "), "Oh / brave / new / world / that / has / such / people / in / it.");
  assertEquals(a.length, 10);
  const b = split(tempestString);
  assertEquals(b.join(" / "), "Oh brave new world that has such people in it.");
  assertEquals(b.length, 1);
  const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
  const c = split(monthString, ",");
  assertEquals(c.join(" / "), "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec");
  assertEquals(c.length, 12);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


Deno.test("split.4", () => {
  const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
  const a = split(names, /\s*(?:;|$)\s*/);
  assertEquals(a, ["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", ""]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


Deno.test("split.5", () => {
  const myString = "Hello World. How are you doing?";
  const a = split(myString, " ", 3);
  assertEquals(a, ["Hello", "World.", "How"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


Deno.test("split.6", () => {
  const myString = "Hello 1 word. Sentence number 2.";
  const a = split(myString, /(\d)/);
  assertEquals(a, ["Hello ", "1", " word. Sentence number ", "2", "."]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split




Deno.test("trimStart.1", () => {
  const greeting = "   Hello world!   ";
  const a = trimStart(greeting);
  assertEquals(a, "Hello world!   ");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart


Deno.test("trimStart.2", () => {
  const str = "   foo  ";
  const a = trimStart(str);
  assertEquals(a.length, 5);
  assertEquals(a, "foo  ");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart




Deno.test("trimEnd.1", () => {
  const greeting = "   Hello world!   ";
  const a = trimEnd(greeting);
  assertEquals(a, "   Hello world!");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd


Deno.test("trimEnd.2", () => {
  const str = "   foo  ";
  const a = trimEnd(str);
  assertEquals(a.length, 6);
  assertEquals(a, "   foo");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd




Deno.test("trim.1", () => {
  const greeting = "   Hello world!   ";
  const a = trim(greeting);
  assertEquals(a, "Hello world!");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim


Deno.test("trim.2", () => {
  const str = "   foo  ";
  const a = trim(str);
  assertEquals(a, "foo");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim




Deno.test("padStart.1", () => {
  const str1 = "5";
  const a = padStart(str1, 2, "0");
  assertEquals(a, "05");
  const fullNumber   = "2034399002125581";
  const last4Digits  = fullNumber.slice(-4);
  const maskedNumber = padStart(last4Digits, fullNumber.length, '*');
  assertEquals(maskedNumber, "************5581");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


Deno.test("padStart.2", () => {
  const str = "abc";
  const a = padStart(str, 10);
  assertEquals(a, "       abc");
  const b = padStart(str, 10, "foo");
  assertEquals(b, "foofoofabc");
  const c = padStart(str, 6, "123465");
  assertEquals(c, "123abc");
  const d = padStart(str, 8, "0");
  assertEquals(d, "00000abc");
  const e = padStart(str, 1);
  assertEquals(e, "abc");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


Deno.test("padStart.3", () => {
  const num = 123;
  const a = padStart(num.toString(), 5, "0");
  assertEquals(a, "00123");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart




Deno.test("padEnd.1", () => {
  const str1 = "Breaded Mushrooms";
  const a = padEnd(str1, 25, ".");
  assertEquals(a, "Breaded Mushrooms........");
  const str2 = "200";
  const b = padEnd(str2, 5);
  assertEquals(b, "200  ");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd


Deno.test("padEnd.2", () => {
  const str = "abc";
  const a = padEnd(str, 10);
  assertEquals(a, "abc       ");
  const b = padEnd(str, 10, "foo");
  assertEquals(b, "abcfoofoof");
  const c = padEnd(str, 6, "123456");
  assertEquals(c, "abc123");
  const d = padEnd(str, 1);
  assertEquals(d, "abc");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd




Deno.test("toUpperCase", () => {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const a = toUpperCase(sentence);
  assertEquals(a, "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  const b = toUpperCase("alphabet");
  assertEquals(b, "ALPHABET");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase




Deno.test("toLocaleUpperCase.1", () => {
  const city = "istanbul";
  const a = toLocaleUpperCase(city, "en-US");
  assertEquals(a, "ISTANBUL");
  const b = toLocaleUpperCase(city, "TR");
  assertEquals(b, "İSTANBUL");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase


Deno.test("toLocaleUpperCase.2", () => {
  const a = toLocaleUpperCase("alphabet");
  assertEquals(a, "ALPHABET");
  const b = toLocaleUpperCase("Gesäß");
  assertEquals(b, "GESÄSS");
  const c = toLocaleUpperCase("i\u0307", "lt-LT");
  assertEquals(c, "I");
  const locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
  const d = toLocaleUpperCase("i\u0307", locales);
  assertEquals(d, "I");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase




Deno.test("toLowerCase", () => {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const a = toLowerCase(sentence);
  assertEquals(a, "the quick brown fox jumps over the lazy dog.");
  const b = toLowerCase("ALPHABET");
  assertEquals(b, "alphabet");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase




Deno.test("toLocaleLowerCase.1", () => {
  const dotted = "İstanbul";
  const a = toLocaleLowerCase(dotted, "en-US");
  assertEquals(a, "i̇stanbul");
  const b = toLocaleLowerCase(dotted, "tr");
  assertEquals(b, "istanbul");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase


Deno.test("toLocaleLowerCase.2", () => {
  const a = toLocaleLowerCase("ALPHABET");
  assertEquals(a, "alphabet");
  const b = toLocaleLowerCase("\u0130", "tr");
  assertEquals(b, "i");
  const c = toLocaleLowerCase("\u0130", "en-US");
  assert(c !== "i");
  const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
  const d = toLocaleLowerCase("\u0130", locales);
  assertEquals(d, "i");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase




Deno.test("replace.1", () => {
  const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
  const a = replace(p, "dog", "monkey");
  assertEquals(a, "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?");
  const b = replace(p, /Dog/i, "ferret");
  assertEquals(b, "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


Deno.test("replace.2", () => {
  function replacer(_match: string, p1: string, p2: string, p3: string, _offset: string, _string: string) {
    return [p1, p2, p3].join(" - ");
  }
  const newString = replace("abc12345#$*%", /([^\d]*)(\d*)([^\w]*)/, replacer as ReplaceFunction);
  assertEquals(newString, "abc - 12345 - #$*%");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


Deno.test("replace.3", () => {
  const str    = "Twas the night before Xmas...";
  const newstr = replace(str, /xmas/i, "Christmas");
  assertEquals(newstr, "Twas the night before Christmas...");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


Deno.test("replace.4", () => {
  const str    = "Apples are round, and apples are juicy.";
  const newstr = replace(str, /apples/gi, "oranges");
  assertEquals(newstr, "oranges are round, and oranges are juicy.");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


Deno.test("replace.5", () => {
  const str    = "John Smith";
  const newstr = replace(str, /(\w+)\s(\w+)/, "$2, $1");
  assertEquals(newstr, "Smith, John");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


Deno.test("replace.6", () => {
  function f2c(x: string) {
    function convert(_str: string, p1: string, _offset: string, _s: string) {
      return `${(parseFloat(p1) - 32) * 5 / 9}C`;
    }
    const s = String(x);
    const test = /(-?\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
  }
  assertEquals(f2c("212F"), "100C");
  assertEquals(f2c("0F"), "-17.77777777777778C");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace




Deno.test("normalize.1", () => {
  const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
  const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";
  assertEquals(name1, "Amélie");
  assertEquals(name2, "Amélie");
  assert(name1 as string !== name2 as string);
  assert(name1.length !== name2.length);
  const name1NFC = normalize(name1, "NFC");
  const name2NFC = normalize(name2, "NFC");
  assertEquals(name1NFC, "Amélie");
  assertEquals(name2NFC, "Amélie");
  assertEquals(name1NFC, name2NFC);
  assertEquals(name1NFC.length, name2NFC.length);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize


Deno.test("normalize.2", () => {
  let string1 = "\u00F1";
  let string2 = "\u006E\u0303";
  assertEquals(string1, "ñ");
  assertEquals(string2, "ñ");
  assert(string1 !== string2);
  assertEquals(string1.length, 1);
  assertEquals(string2.length, 2);
  string1 = normalize(string1, "NFD");
  string2 = normalize(string2, "NFD");
  assertEquals(string1, string2);
  assertEquals(string1.length, 2);
  assertEquals(string2.length, 2);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize


Deno.test("normalize.3", () => {
  let string1 = "\u00F1";
  let string2 = "\u006E\u0303";
  assertEquals(string1, "ñ");
  assertEquals(string2, "ñ");
  string1 = normalize(string1, "NFC");
  string2 = normalize(string2, "NFC");
  assertEquals(string1, string2);
  assertEquals(string1.length, 1);
  assertEquals(string2.length, 1);
  assertEquals(string2.codePointAt(0)?.toString(16), "f1");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize


Deno.test("normalize.4", () => {
  let string1 = "\uFB00";
  let string2 = "\u0066\u0066";
  assertEquals(string1, "ﬀ");
  assertEquals(string2, "ff");
  assert(string1 !== string2);
  assertEquals(string1.length, 1);
  assertEquals(string2.length, 2);
  string1 = normalize(string1, "NFKD");
  string2 = normalize(string2, "NFKD");
  assertEquals(string1, "ff");
  assertEquals(string2, "ff");
  assertEquals(string1, string2);
  assertEquals(string1.length, 2);
  assertEquals(string2.length, 2);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize


Deno.test("normalize.5", () => {
  const str = "\u1E9B\u0323";
  const a = normalize(str, "NFC");
  assertEquals(a, "\u1E9B\u0323");
  const b = normalize(str);
  assertEquals(b, "\u1E9B\u0323");
  const c = normalize(str, "NFD");
  assertEquals(c, "\u017F\u0323\u0307");
  const d = normalize(str, "NFKC");
  assertEquals(d, "\u1E69");
  const e = normalize(str, "NFKD");
  assertEquals(e, "\u0073\u0323\u0307");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize




Deno.test("filter.1", () => {
  const str = "ABCDEFGHIJ";
  const a = filter(str, v => (v.charCodeAt(0) & 1)===0);
  assertEquals(a, "BDFHJ");
  const b = filter(str, v => (v.charCodeAt(0) & 1)===1);
  assertEquals(b, "ACEGI");
});


Deno.test("filter.2", () => {
  const a = filter("g00df00d", v => v<="f");
  assertEquals(a, "00df00d");
  const b = filter("badfood", v => v<="f");
  assertEquals(b, "badfd");
  const c = filter("", v => v<="f");
  assertEquals(c, "");
});




Deno.test("longestCommonInfix", () => {
  const a = longestCommonInfix("mangala", "mangalyaan");
  assertEquals(a, "mangal");
  const b = longestCommonInfix("easter", "tertiary");
  assertEquals(b, "ter");
  const c = longestCommonInfix("dismiss", "mississipi");
  assertEquals(c, "miss");
});




Deno.test("longestCommonPrefix", () => {
  const a = longestCommonPrefix("peacock", "peahen");
  assertEquals(a, "pea");
  const b = longestCommonPrefix("inception", "interstellar");
  assertEquals(b, "in");
  const c = longestCommonPrefix("mars", "tars");
  assertEquals(c, "");
});




Deno.test("longestCommonSuffix", () => {
  const a = longestCommonSuffix("peacock", "hancock");
  assertEquals(a, "cock");
  const b = longestCommonSuffix("mars", "tars");
  assertEquals(b, "ars");
  const c = longestCommonSuffix("chief", "master");
  assertEquals(c, "");
});




Deno.test("longestUncommonInfixes", () => {
  const a = longestUncommonInfixes("rollcage", "ridecage");
  assertEquals(a, ["oll", "ide"]);
  const b = longestUncommonInfixes("riverbed", "roverbed");
  assertEquals(b, ["i", "o"]);
  const c = longestUncommonInfixes("chocolatier", "engineer");
  assertEquals(c, ["chocolati", "engine"]);
});




Deno.test("toKebabCase", () => {
  const a = toKebabCase("Malwa Plateau");
  assertEquals(a, "malwa-plateau");
  const b = toKebabCase("::chota::nagpur::", null, "_");
  assertEquals(b, "chota_nagpur");
  const c = toKebabCase("deccan___plateau", /_+/g, ".");
  assertEquals(c, "deccan.plateau");
  const d = toKebabCase("Some text_with-mixed CASE");
  assertEquals(d, "some-text-with-mixed-case");
  const e = toKebabCase("IAmListeningToFMWhileLoadingDifferentURL");
  assertEquals(e, "i-am-listening-to-fm-while-loading-different-url");
});




Deno.test("toSuperscript", () => {
  const a = toSuperscript("hello world");
  assertEquals(a, "ʰᵉˡˡᵒ ʷᵒʳˡᵈ");
  const b = toSuperscript("DECCAN PLATEAU");
  assertEquals(b, "ᴰᴱCCᴬᴺ ᴾᴸᴬᵀᴱᴬᵁ");
  const c = "6.626 x 10" + toSuperscript("-34");
  assertEquals(c, "6.626 x 10⁻³⁴");
});




Deno.test("tverskyDistance", () => {
  const a = tverskyDistance("pocket", "pocket", 2);
  assertEquals(a, 0);
  const b = tverskyDistance("monster", "rocket", 2);
  assertEquals(b, 1);
  const c = tverskyDistance("pikachu", "raichu", 3, 0.2, 0.4);
  assertEquals(c, 0.6666666666666667);
});
