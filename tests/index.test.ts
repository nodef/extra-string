import * as stxing from "../src";
import {fromCharCode}           from "../src";
import {fromCodePoint}          from "../src";
import {concat}                 from "../src";
import {repeat}                 from "../src";
import {valueOf}                from "../src";
import {length}                 from "../src";
import {charAt}                 from "../src";
import {charCodeAt}             from "../src";
import {codePointAt}            from "../src";
import {localeCompare}          from "../src";
import {includes}               from "../src";
import {startsWith}             from "../src";
import {endsWith}               from "../src";
import {indexOf}                from "../src";
import {lastIndexOf}            from "../src";
import {search}                 from "../src";
import {match}                  from "../src";
import {matchAll}               from "../src";
import {toString}               from "../src";
import {slice}                  from "../src";
import {substring}              from "../src";
import {split}                  from "../src";
import {trimStart}              from "../src";
import {trimEnd}                from "../src";
import {trim}                   from "../src";
import {padStart}               from "../src";
import {padEnd}                 from "../src";
import {toUpperCase}            from "../src";
import {toLocaleUpperCase}      from "../src";
import {toLowerCase}            from "../src";
import {toLocaleLowerCase}      from "../src";
import {replace}                from "../src";
import {normalize}              from "../src";
import {}        from "../src";
import {longestCommonInfix}     from "../src";
import {longestCommonPrefix}    from "../src";
import {longestCommonSuffix}    from "../src";
import {longestUncommonInfixes} from "../src";
import {toKebabCase}            from "../src";
import {toSuperscript}          from "../src";
import {tverskyDistance}        from "../src";




// 1. Basic tests.
test("example1", () => {
  var a = stxing.longestCommonInfix("dismiss", "mississipi");
  expect(a).toBe("miss");
  // → "miss"

  var b = stxing.longestUncommonInfixes("chocolatier", "engineer");
  expect(b).toStrictEqual(["chocolati", "engine"]);
  // → ["chocolati", "engine"]

  var a = stxing.toKebabCase("Malwa Plateau");
  expect(a).toBe("malwa-plateau");
  // → "malwa-plateau"

  var a = "6.626 x 10" + stxing.toSuperscript("-34");
  expect(a).toBe("6.626 x 10⁻³⁴");
  // → "6.626 x 10⁻³⁴" (Planck"s constant)

  var d = stxing.tverskyDistance("pikachu", "raichu", 3, 0.2, 0.4);
  expect(d).toBe(0.6666666666666667);
  // → 0.6666666666666667
});




test("fromCharCode.1", () => {
  var a = fromCharCode(189, 43, 190, 61);
  expect(a).toBe("½+¾=");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


test("fromCharCode.2", () => {
  var a = fromCharCode(65, 66, 67);
  expect(a).toBe("ABC");
  var a = fromCharCode(0x2014);
  expect(a).toBe("—");
  var a = fromCharCode(0x12014);
  expect(a).toBe("—");  // the digit 1 is truncated and ignored
  var a = fromCharCode(8212);
  expect(a).toBe("—");  // 8212 is the decimal form of 0x2014
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode


test("fromCharCode.3", () => {
  var a = fromCharCode(0xD83C, 0xDF03);
  expect(a).toBe("🌃");
  var a = fromCharCode(55356, 57091);
  expect(a).toBe("🌃");
  var a = fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07);
  expect(a).toBe("𝌆a𝌇");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode




test("fromCodePoint.1", () => {
  var a = fromCodePoint(9731, 9733, 9842, 0x2F804);
  expect(a).toBe("☃★♲你");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint


test("fromCodePoint.2", () => {
  var a = fromCodePoint(42);
  expect(a).toBe("*");
  var a = fromCodePoint(65, 90);
  expect(a).toBe("AZ");
  var a = fromCodePoint(0x404);
  expect(a).toBe("Є");
  var a = fromCodePoint(0x2F804);
  expect(a).toBe("你");
  var a = fromCodePoint(194564);
  expect(a).toBe("你");
  var a = fromCodePoint(0x1D306, 0x61, 0x1D307);
  expect(a).toBe("𝌆a𝌇");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint


test("fromCodePoint.3", () => {
  var a = fromCodePoint(0x1F303);
  expect(a).toBe("🌃");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint




test("concat.1", () => {
  var str1 = "Hello";
  var str2 = "World";
  var a = concat(str1, " ", str2);
  expect(a).toBe("Hello World");
  var a = concat(str2, ", ", str1);
  expect(a).toBe("World, Hello");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat


test("concat.2", () => {
  var hello = "Hello, ";
  var a = concat(hello, "Kevin", ". Have a nice day.");
  expect(a).toBe("Hello, Kevin. Have a nice day.");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat


test("concat.3", () => {
  var greetList = ["Hello", " ", "Venkat", "!"];
  var a = concat(...greetList);
  expect(a).toBe("Hello Venkat!");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat


test("concat.4", () => {
  var a = concat({});
  expect(a).toBe("[object Object]");
  var a = concat([]);
  expect(a).toBe("");
  var a = concat(null);
  expect(a).toBe("null");
  var a = concat(true);
  expect(a).toBe("true");
  var a = concat(4, 5);
  expect(a).toBe("45");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat




test("repeat", () => {
  var a = repeat("abc", 0);
  expect(a).toBe("");
  var a = repeat("abc", 1);
  expect(a).toBe("abc");
  var a = repeat("abc", 2);
  expect(a).toBe("abcabc");
  var a = repeat("abc", 3.5);
  expect(a).toBe("abcabcabc");  // count will be converted to integer
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat




test("valueOf", () => {
  var a = valueOf("foo");
  expect(a).toBe("foo");
  var a = valueOf("Hello world");
  expect(a).toBe("Hello world");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf




test("length", () => {
  var str   = "Life, the universe and everything. Answer:";
  expect(length(str))  .toBe(42);
  var x     = "Mozilla";
  expect(length(x))    .toBe(7);
  var empty = "";
  expect(length(empty)).toBe(0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length




test("charAt.1", () => {
  var sentence = "The quick brown fox jumps over the lazy dog.";
  var a = charAt(sentence, 4);
  expect(a).toBe("q");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt


test("charAt.2", () => {
  var anyString = "Brave new world";
  var a = charAt(anyString, 0);
  expect(a).toBe("B");
  var a = charAt(anyString, 1);
  expect(a).toBe("r");
  var a = charAt(anyString, 2);
  expect(a).toBe("a");
  var a = charAt(anyString, 3);
  expect(a).toBe("v");
  var a = charAt(anyString, 4);
  expect(a).toBe("e");
  var a = charAt(anyString, 999);
  expect(a).toBe("");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt




test("charCodeAt", () => {
  var sentence = "The quick brown fox jumps over the lazy dog.";
  var a = charCodeAt(sentence, 4);
  expect(a).toBe(113);
  var a = charCodeAt("ABC", 0);
  expect(a).toBe(65);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt




test("codePointAt", () => {
  var a = codePointAt("☃★♲", 1);
  expect(a).toBe(9733);
  var a = codePointAt("ABC", 0);
  expect(a).toBe(65);
  var a = codePointAt("😍", 0);
  expect(a).toBe(128525);
  var a = codePointAt("😍", 1);
  expect(a).toBe(56845);
  var a = codePointAt("ABC", 42);
  expect(a).toBeUndefined();
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt




test("localeCompare.1", () => {
  var a = "réservé";
  var b = "RESERVE";
  var x = localeCompare(a, b);
  expect(x).toBeGreaterThan(0);
  var x = localeCompare(a, b, "en", {sensitivity: "base"});
  expect(x).toBe(0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare


test("localeCompare.2", () => {
  var a = localeCompare("a", "c");
  expect(a).toBeLessThan(0);
  var a = localeCompare("check", "against");
  expect(a).toBeGreaterThan(0);
  var a = localeCompare("a", "a");
  expect(a).toBe(0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare


test("localeCompare.3", () => {
  var a = localeCompare("ä", "z", "de");
  expect(a).toBeLessThan(0);
  var a = localeCompare("ä", "z", "sv");
  expect(a).toBeGreaterThan(0);
  var a = localeCompare("ä", "a", "de", {sensitivity: "base"});
  expect(a).toBe(0);
  var a = localeCompare("ä", "a", "sv", {sensitivity: "base"});
  expect(a).toBeGreaterThan(0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare


test("localeCompare.4", () => {
  var a = localeCompare("2", "10");
  expect(a).toBeGreaterThan(0);
  var a = localeCompare("2", "10", undefined, {numeric: true});
  expect(a).toBeLessThan(0);
  var a = localeCompare("2", "10", "en-u-kn-true");
  expect(a).toBeLessThan(0);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare




test("includes.1", () => {
  var sentence = "The quick brown fox jumps over the lazy dog.";
  var a = includes(sentence, "fox");
  expect(a).toBe(true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


test("includes.2", () => {
  var a = includes("Blue Whale", "blue");
  expect(a).toBe(false);
  var a = includes("Blue Whale".toLowerCase(), "blue");
  expect(a).toBe(true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


test("includes.3", () => {
  var str = "To be, or not to be, that is the question.";
  var a = includes(str, "To be");
  expect(a).toBe(true);
  var a = includes(str, "question");
  expect(a).toBe(true);
  var a = includes(str, "nonexistent");
  expect(a).toBe(false);
  var a = includes(str, "To be", 1);
  expect(a).toBe(false);
  var a = includes(str, "TO BE");
  expect(a).toBe(false);
  var a = includes(str, "");
  expect(a).toBe(true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes




test("startsWith.1", () => {
  var str1 = "Saturday night plans";
  var a = startsWith(str1, "Sat");
  expect(a).toBe(true);
  var a = startsWith(str1, "Sat", 3);
  expect(a).toBe(false);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


test("startsWith.2", () => {
  var str = "To be, or not to be, that is the question.";
  var a = startsWith(str, "To be");
  expect(a).toBe(true);
  var a = startsWith(str, "not to be");
  expect(a).toBe(false);
  var a = startsWith(str, "not to be", 10);
  expect(a).toBe(true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith




test("endsWith.1", () => {
  var str1 = "Cats are the best!";
  var a = endsWith(str1, "best!");
  expect(a).toBe(true);
  var a = endsWith(str1, "best", 17);
  expect(a).toBe(true);
  var str2 = "Is this a question?";
  var a = endsWith(str2, "question");
  expect(a).toBe(false);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


test("endsWith.2", () => {
  var str = "To be, or not to be, that is the question.";
  var a = endsWith(str, "question.");
  expect(a).toBe(true);
  var a = endsWith(str, "to be");
  expect(a).toBe(false);
  var a = endsWith(str, "to be", 19);
  expect(a).toBe(true);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith




test("indexOf.1", () => {
  var paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
  var a = indexOf(paragraph, "dog");
  expect(a).toBe(40);
  var a = indexOf(paragraph, "dog", 41);
  expect(a).toBe(52);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


test("indexOf.2", () => {
  var str = "hello world";
  var a = indexOf(str, "");
  expect(a).toBe(0);
  var a = indexOf(str, "", 0);
  expect(a).toBe(0);
  var a = indexOf(str, "", 3);
  expect(a).toBe(3);
  var a = indexOf(str, "", 8);
  expect(a).toBe(8);
  var a = indexOf(str, "", 11);
  expect(a).toBe(11);
  var a = indexOf(str, "", 13);
  expect(a).toBe(11);
  var a = indexOf(str, "", 22);
  expect(a).toBe(11);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


test("indexOf.3", () => {
  var str = "Blue Whale";
  var a = indexOf(str, "Blue");
  expect(a).toBe(0);
  var a = indexOf(str, "Blute");
  expect(a).toBe(-1);
  var a = indexOf(str, "Whale", 0);
  expect(a).toBe(5);
  var a = indexOf(str, "Whale", 5);
  expect(a).toBe(5);
  var a = indexOf(str, "Whale", 7);
  expect(a).toBe(-1);
  var a = indexOf(str, "");
  expect(a).toBe(0);
  var a = indexOf(str, "", 9);
  expect(a).toBe(9);
  var a = indexOf(str, "", 10);
  expect(a).toBe(10);
  var a = indexOf(str, "", 11);
  expect(a).toBe(10);
  var a = indexOf(str, "blue");
  expect(a).toBe(-1);
  var a = indexOf(str, "Blue");
  expect(a).not.toBe(-1);
  var a = indexOf(str, "Bloe");
  expect(a).toBe(-1);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


test("indexOf.4", () => {
  var str = "Brave new world";
  var a = indexOf(str, "w");
  expect(a).toBe(8);
  var a = indexOf(str, "new");
  expect(a).toBe(6);
  var a = indexOf("brie, pepper jack, cheddar", "cheddar");
  expect(a).toBe(19);
  var a = indexOf("Brie, Pepper Jack, Cheddar", "cheddar");
  expect(a).toBe(-1);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf


test("indexOf.5", () => {
  var myString    = "brie, pepper jack, cheddar";
  var myCapString = "Brie, Pepper Jack, Cheddar";
  var a = indexOf(myString, "cheddar");
  expect(a).toBe(19);
  var a = indexOf(myCapString, "cheddar");
  expect(a).toBe(-1);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf




test("lastIndexOf.1", () => {
  var paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
  var a = lastIndexOf(paragraph, "dog");
  expect(a).toBe(52);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf


test("lastIndexOf.2", () => {
  var str = "canal";
  var a = lastIndexOf(str, "a");
  expect(a).toBe(3);
  var a = lastIndexOf(str, "a", 2);
  expect(a).toBe(1);
  var a = lastIndexOf(str, "a", 0);
  expect(a).toBe(-1);
  var a = lastIndexOf(str, "x");
  expect(a).toBe(-1);
  var a = lastIndexOf(str, "c", -5);
  expect(a).toBe(0);
  var a = lastIndexOf(str, "c", 0);
  expect(a).toBe(0);
  var a = lastIndexOf(str, "");
  expect(a).toBe(5);
  var a = lastIndexOf(str, "", 2);
  expect(a).toBe(2);
  var a = lastIndexOf("Blue Whale, Killer Whale", "blue");
  expect(a).toBe(-1);
  var a = lastIndexOf("Brave, Brave New World", "Brave");
  expect(a).toBe(7);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf


test("lastIndexOf.3", () => {
  var a = lastIndexOf("Blue Whale, Killer Whale", "blue");
  expect(a).toBe(-1);
  var a = lastIndexOf("Brave, Brave New World", "Brave");
  expect(a).toBe(7);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf




test("search.1", () => {
  var paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
  var a = search(paragraph, /[^\w\s]/g);
  expect(a).toBe(43);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search


test("search.2", () => {
  var str = "hey JudE";
  var a = search(str, /[A-Z]/g);
  expect(a).toBe(4);
  var a = search(str, /[.]/g);
  expect(a).toBe(-1);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search




test("match.1", () => {
  var paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
  var a = match(paragraph, /[A-Z]/g);
  expect(a).toStrictEqual(["T", "I"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


test("match.2", () => {
  var str = "For more information, see Chapter 3.4.5.1";
  var a = match(str, /see (chapter \d+(\.\d)*)/i);
  expect([...a]).toStrictEqual(["see Chapter 3.4.5.1", "Chapter 3.4.5.1", ".1"]);
  expect(a.index).toBe(22);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


test("match.3", () => {
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var a = match(str, /[A-E]/gi);
  expect(a).toStrictEqual(["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


test("match.4", () => {
  var paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
  var a = match(paragraph, /(?<animal>fox|cat) jumps over/);
  expect(a.groups?.animal).toBe("fox");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


test("match.5", () => {
  var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.";
  var a = match(str1, "number");
  expect([...a]).toStrictEqual(["number"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match




test("matchAll.1", () => {
  var str = "test1test2";
  var a = [...matchAll(str, /t(e)(st(\d?))/g)];
  expect([...a[0]]).toStrictEqual(["test1", "e", "st1", "1"]);
  expect(a[0].index).toBe(0);
  expect(a[0].length).toBe(4);
  expect([...a[1]]).toStrictEqual(["test2", "e", "st2", "2"]);
  expect(a[1].index).toBe(5);
  expect(a[1].length).toBe(4);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll


test("matchAll.2", () => {
  var re  = new RegExp('[a-c]', 'g');
  re.lastIndex = 1;
  var str = "abc";
  var a = Array.from(matchAll(str, re), m => `${re.lastIndex} ${m[0]}`);
  expect(a).toStrictEqual(["1 b", "1 c"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll




test("toString", () => {
  var a = toString("foo");
  expect(a).toBe("foo");
  var a = toString("Hello world");
  expect(a).toBe("Hello world");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString




test("slice.1", () => {
  var str = "The quick brown fox jumps over the lazy dog.";
  expect(slice(str, 31))    .toBe("the lazy dog.");
  expect(slice(str, 4, 19)) .toBe("quick brown fox");
  expect(slice(str, -4))    .toBe("dog.");
  expect(slice(str, -9, -5)).toBe("lazy");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


test("slice.2", () => {
  var str1 = "The morning is upon us.";
  var str2 = slice(str1, 1, 8);
  var str3 = slice(str1, 4, -2);
  var str4 = slice(str1, 12);
  var str5 = slice(str1, 30);
  expect(str2).toBe("he morn");
  expect(str3).toBe("morning is upon u");
  expect(str4).toBe("is upon us.");
  expect(str5).toBe("");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


test("slice.3", () => {
  var str = "The morning is upon us.";
  expect(slice(str, -3))     .toBe("us.");
  expect(slice(str, -3, -1)) .toBe("us");
  expect(slice(str, 0, -1))  .toBe("The morning is upon us");
  expect(slice(str, 4, -1))  .toBe("morning is upon us");
  expect(slice(str, -11, 16)).toBe("is u");
  expect(slice(str, 11, -7)) .toBe(" is u");
  expect(slice(str, -5, -1)) .toBe("n us");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice




test("substring.1", () => {
  var str = "Mozilla";
  var a = substring(str, 1, 3);
  expect(a).toBe("oz");
  var a = substring(str, 2);
  expect(a).toBe("zilla");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring


test("substring.2", () => {
  var anyString = "Mozilla";
  var a = substring(anyString, 0, 1);
  expect(a).toBe("M");
  var a = substring(anyString, 1, 0);
  expect(a).toBe("M");
  var a = substring(anyString, 0, 6);
  expect(a).toBe("Mozill");
  var a = substring(anyString, 4);
  expect(a).toBe("lla");
  var a = substring(anyString, 4, 7);
  expect(a).toBe("lla");
  var a = substring(anyString, 7, 4);
  expect(a).toBe("lla");
  var a = substring(anyString, 0, 7);
  expect(a).toBe("Mozilla");
  var a = substring(anyString, 0, 10);
  expect(a).toBe("Mozilla");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring


test("substring.3", () => {
  var text = "Mozilla";
  var a = substring(text, text.length - 4);
  expect(a).toBe("illa");
  var a = substring(text, text.length - 5);
  expect(a).toBe("zilla");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring


test("substring.4", () => {
  var text = "Mozilla";
  var a = substring(text, 2, 5);
  expect(a).toBe("zil");
  var a = substring(text, 5, 2);
  expect(a).toBe("zil");
  var a = substring(text, -5, 2);
  expect(a).toBe("Mo");
  var a = substring(text, -5, -2);
  expect(a).toBe("");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring




test("split.1", () => {
  var str = "The quick brown fox jumps over the lazy dog.";
  var a = split(str, " ");
  expect(a[3]).toBe("fox");
  var a = split(str, "");
  expect(a[8]).toBe("k");
  var a = split(str);
  expect(a).toStrictEqual([str]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


test("split.2", () => {
  var emptyString = "";
  var a = split(emptyString);
  expect(a).toStrictEqual([""]);
  var a = split(emptyString, "");
  expect(a).toStrictEqual([]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


test("split.3", () => {
  var tempestString = "Oh brave new world that has such people in it.";
  var a = split(tempestString, " ");
  expect(a.join(" / ")).toBe("Oh / brave / new / world / that / has / such / people / in / it.");
  expect(a.length).toBe(10);
  var a = split(tempestString);
  expect(a.join(" / ")).toBe("Oh brave new world that has such people in it.");
  expect(a.length).toBe(1);
  var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
  var a = split(monthString, ",");
  expect(a.join(" / ")).toBe("Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec");
  expect(a.length).toBe(12);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


test("split.4", () => {
  var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";
  var a = split(names, /\s*(?:;|$)\s*/);
  expect(a).toStrictEqual(["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", ""]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


test("split.5", () => {
  var myString = "Hello World. How are you doing?";
  var a = split(myString, " ", 3);
  expect(a).toStrictEqual(["Hello", "World.", "How"]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


test("split.6", () => {
  var myString = "Hello 1 word. Sentence number 2.";
  var a = split(myString, /(\d)/);
  expect(a).toStrictEqual(["Hello ", "1", " word. Sentence number ", "2", "."]);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split




test("trimStart.1", () => {
  var greeting = "   Hello world!   ";
  var a = trimStart(greeting);
  expect(a).toBe("Hello world!   ");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart


test("trimStart.2", () => {
  var str = "   foo  ";
  var a = trimStart(str);
  expect(a.length).toBe(5);
  expect(a).toBe("foo  ");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart




test("trimEnd.1", () => {
  var greeting = "   Hello world!   ";
  var a = trimEnd(greeting);
  expect(a).toBe("   Hello world!");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd


test("trimEnd.2", () => {
  var str = "   foo  ";
  var a = trimEnd(str);
  expect(a.length).toBe(6);
  expect(a).toBe("   foo");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd




test("trim.1", () => {
  var greeting = "   Hello world!   ";
  var a = trim(greeting);
  expect(a).toBe("Hello world!");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim


test("trim.2", () => {
  var str = "   foo  ";
  var a = trim(str);
  expect(a).toBe("foo");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim




test("padStart.1", () => {
  var str1 = "5";
  var a = padStart(str1, 2, "0");
  expect(a).toBe("05");
  var fullNumber   = "2034399002125581";
  var last4Digits  = fullNumber.slice(-4);
  var maskedNumber = padStart(last4Digits, fullNumber.length, '*');
  expect(maskedNumber).toBe("************5581");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


test("padStart.2", () => {
  var str = "abc";
  var a = padStart(str, 10);
  expect(a).toBe("       abc");
  var a = padStart(str, 10, "foo");
  expect(a).toBe("foofoofabc");
  var a = padStart(str, 6, "123465");
  expect(a).toBe("123abc");
  var a = padStart(str, 8, "0");
  expect(a).toBe("00000abc");
  var a = padStart(str, 1);
  expect(a).toBe("abc");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


test("padStart.3", () => {
  var num = 123;
  var a = padStart(num.toString(), 5, "0");
  expect(a).toBe("00123");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart




test("padEnd.1", () => {
  var str1 = "Breaded Mushrooms";
  var a = padEnd(str1, 25, ".");
  expect(a).toBe("Breaded Mushrooms........");
  var str2 = "200";
  var a = padEnd(str2, 5);
  expect(a).toBe("200  ");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd


test("padEnd.2", () => {
  var str = "abc";
  var a = padEnd(str, 10);
  expect(a).toBe("abc       ");
  var a = padEnd(str, 10, "foo");
  expect(a).toBe("abcfoofoof");
  var a = padEnd(str, 6, "123456");
  expect(a).toBe("abc123");
  var a = padEnd(str, 1);
  expect(a).toBe("abc");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd




test("toUpperCase", () => {
  var sentence = "The quick brown fox jumps over the lazy dog.";
  var a = toUpperCase(sentence);
  expect(a).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  var a = toUpperCase("alphabet");
  expect(a).toBe("ALPHABET");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase




test("toLocaleUpperCase.1", () => {
  var city = "istanbul";
  var a = toLocaleUpperCase(city, "en-US");
  expect(a).toBe("ISTANBUL");
  var a = toLocaleUpperCase(city, "TR");
  expect(a).toBe("İSTANBUL");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase


test("toLocaleUpperCase.2", () => {
  var a = toLocaleUpperCase("alphabet");
  expect(a).toBe("ALPHABET");
  var a = toLocaleUpperCase("Gesäß");
  expect(a).toBe("GESÄSS");
  var a = toLocaleUpperCase("i\u0307", "lt-LT");
  expect(a).toBe("I");
  var locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
  var a = toLocaleUpperCase("i\u0307", locales);
  expect(a).toBe("I");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase




test("toLowerCase", () => {
  var sentence = "The quick brown fox jumps over the lazy dog.";
  var a = toLowerCase(sentence);
  expect(a).toBe("the quick brown fox jumps over the lazy dog.");
  var a = toLowerCase("ALPHABET");
  expect(a).toBe("alphabet");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase




test("toLocaleLowerCase.1", () => {
  var dotted = "İstanbul";
  var a = toLocaleLowerCase(dotted, "en-US");
  expect(a).toBe("i̇stanbul");
  var a = toLocaleLowerCase(dotted, "tr");
  expect(a).toBe("istanbul");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase


test("toLocaleLowerCase.2", () => {
  var a = toLocaleLowerCase("ALPHABET");
  expect(a).toBe("alphabet");
  var a = toLocaleLowerCase("\u0130", "tr");
  expect(a).toBe("i");
  var a = toLocaleLowerCase("\u0130", "en-US");
  expect(a).not.toBe("i");
  var locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
  var a = toLocaleLowerCase("\u0130", locales);
  expect(a).toBe("i");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase




test("replace.1", () => {
  var p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
  var a = replace(p, "dog", "monkey");
  expect(a).toBe("The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?");
  var a = replace(p, /Dog/i, "ferret");
  expect(a).toBe("The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


test("replace.2", () => {
  function replacer(match, p1, p2, p3, offset, string) {
    return [p1, p2, p3].join(" - ");
  }
  var newString = replace("abc12345#$*%", /([^\d]*)(\d*)([^\w]*)/, replacer);
  expect(newString).toBe("abc - 12345 - #$*%");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


test("replace.3", () => {
  var str    = "Twas the night before Xmas...";
  var newstr = replace(str, /xmas/i, "Christmas");
  expect(newstr).toBe("Twas the night before Christmas...");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


test("replace.4", () => {
  var str    = "Apples are round, and apples are juicy.";
  var newstr = replace(str, /apples/gi, "oranges");
  expect(newstr).toBe("oranges are round, and oranges are juicy.");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


test("replace.5", () => {
  var str    = "John Smith";
  var newstr = replace(str, /(\w+)\s(\w+)/, "$2, $1");
  expect(newstr).toBe("Smith, John");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


test("replace.6", () => {
  function f2c(x) {
    function convert(str, p1, offset, s) {
      return `${(p1 - 32) * 5 / 9}C`;
    }
    const s = String(x);
    const test = /(-?\d+(?:\.\d*)?)F\b/g;
    return s.replace(test, convert);
  }
  expect(f2c("212F")).toBe("100C");
  expect(f2c("0F"))  .toBe("-17.77777777777778C");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace




test("normalize.1", () => {
  var name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
  var name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";
  expect(name1).toBe("Amélie");
  expect(name2).toBe("Amélie");
  expect(name1).not.toBe(name2);
  expect(name1.length).not.toBe(name2.length);
  var name1NFC = normalize(name1, "NFC");
  var name2NFC = normalize(name2, "NFC");
  expect(name1NFC).toBe("Amélie");
  expect(name2NFC).toBe("Amélie");
  expect(name1NFC).toBe(name2NFC);
  expect(name1NFC.length).toBe(name2NFC.length);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize


test("normalize.2", () => {
  var string1 = "\u00F1";
  var string2 = "\u006E\u0303";
  expect(string1).toBe("ñ");
  expect(string2).toBe("ñ");
  expect(string1).not.toBe(string2);
  expect(string1.length).toBe(1);
  expect(string2.length).toBe(2);
  string1 = normalize(string1, "NFD");
  string2 = normalize(string2, "NFD");
  expect(string1).toBe(string2);
  expect(string1.length).toBe(2);
  expect(string2.length).toBe(2);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize


test("normalize.3", () => {
  var string1 = "\u00F1";
  var string2 = "\u006E\u0303";
  expect(string1).toBe("ñ");
  expect(string2).toBe("ñ");
  string1 = normalize(string1, "NFC");
  string2 = normalize(string2, "NFC");
  expect(string1).toBe(string2);
  expect(string1.length).toBe(1);
  expect(string2.length).toBe(1);
  expect(string2.codePointAt(0)?.toString(16)).toBe("f1");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize


test("normalize.4", () => {
  var string1 = "\uFB00";
  var string2 = "\u0066\u0066";
  expect(string1).toBe("ﬀ");
  expect(string2).toBe("ff");
  expect(string1).not.toBe(string2);
  expect(string1.length).toBe(1);
  expect(string2.length).toBe(2);
  string1 = normalize(string1, "NFKD");
  string2 = normalize(string2, "NFKD");
  expect(string1).toBe("ff");
  expect(string2).toBe("ff");
  expect(string1).toBe(string2);
  expect(string1.length).toBe(2);
  expect(string2.length).toBe(2);
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize


test("normalize.5", () => {
  var str = "\u1E9B\u0323";
  var a = normalize(str, "NFC");
  expect(a).toBe("\u1E9B\u0323");
  var a = normalize(str);
  expect(a).toBe("\u1E9B\u0323");
  var a = normalize(str, "NFD");
  expect(a).toBe("\u017F\u0323\u0307");
  var a = normalize(str, "NFKC");
  expect(a).toBe("\u1E69");
  var a = normalize(str, "NFKD");
  expect(a).toBe("\u0073\u0323\u0307");
});
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize




test("longestCommonInfix", () => {
  var a = longestCommonInfix("mangala", "mangalyaan");
  expect(a).toBe("mangal");
  var a = longestCommonInfix("easter", "tertiary");
  expect(a).toBe("ter");
  var a = longestCommonInfix("dismiss", "mississipi");
  expect(a).toBe("miss");
});




test("longestCommonPrefix", () => {
  var a = longestCommonPrefix("peacock", "peahen");
  expect(a).toBe("pea");
  var a = longestCommonPrefix("inception", "interstellar");
  expect(a).toBe("in");
  var a = longestCommonPrefix("mars", "tars");
  expect(a).toBe("");
});




test("longestCommonSuffix", () => {
  var a = longestCommonSuffix("peacock", "hancock");
  expect(a).toBe("cock");
  var a = longestCommonSuffix("mars", "tars");
  expect(a).toBe("ars");
  var a = longestCommonSuffix("chief", "master");
  expect(a).toBe("");
});




test("longestUncommonInfixes", () => {
  var a = longestUncommonInfixes("rollcage", "ridecage");
  expect(a).toStrictEqual(["oll", "ide"]);
  var a = longestUncommonInfixes("riverbed", "roverbed");
  expect(a).toStrictEqual(["i", "o"]);
  var a = longestUncommonInfixes("chocolatier", "engineer");
  expect(a).toStrictEqual(["chocolati", "engine"]);
});




test("toKebabCase", () => {
  var a = toKebabCase("Malwa Plateau");
  expect(a).toBe("malwa-plateau");
  var a = toKebabCase("::chota::nagpur::", null, "_");
  expect(a).toBe("chota_nagpur");
  var a = toKebabCase("deccan___plateau", /_+/g, ".");
  expect(a).toBe("deccan.plateau");
});




test("toSuperscript", () => {
  var a = toSuperscript("hello world");
  expect(a).toBe("ʰᵉˡˡᵒ ʷᵒʳˡᵈ");
  var a = toSuperscript("DECCAN PLATEAU");
  expect(a).toBe("ᴰᴱCCᴬᴺ ᴾᴸᴬᵀᴱᴬᵁ");
  var a = "6.626 x 10" + toSuperscript("-34");
  expect(a).toBe("6.626 x 10⁻³⁴");
});




test("tverskyDistance", () => {
  var a = tverskyDistance("pocket", "pocket", 2);
  expect(a).toBe(0);
  var a = tverskyDistance("monster", "rocket", 2);
  expect(a).toBe(1);
  var a = tverskyDistance("pikachu", "raichu", 3, 0.2, 0.4);
  expect(a).toBe(0.6666666666666667);
});
