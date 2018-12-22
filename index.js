const exports0 = '\t\n\x0b\x0c\r ';
const exports1 = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
const exports2 = '0123456789abcdefABCDEF';
const exports3 = '01234567';
const exports4 = '0123456789';
const exports5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const exports6 = 'abcdefghijklmnopqrstuvwxyz';
const exports7 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const exports8 = exports4+
exports7+
exports1+
exports0;
function is(a) {
  return typeof a==='string';
}
const exports10 = function(a, i) {
  return a.charCodeAt(i);
};
const exports11 = String.fromCharCode;
function keys(str) {
  var z = [];
  for(var i=0, I=str.length; i<I; i++)
    z.push(i);
  return z;
}
function values(str) {
  return str.split('');
}
function entries(str) {
  var z = [];
  for(var i=0, I=str.length; i<I; i++)
    z.push([i, str[i]]);
  return z;
}
const exports15 = function(a, l) {
  return a.substr(0, l);
};
const exports16 = function(a, i, l) {
  return a.substr(i, l);
};
const exports17 = function(a, l) {
  return a.substring(a.length-l, a.length);
};
function ngrams(str, n) {
  var z = [];
  for(var i=0, I=str.length-n+1; i<I; i++)
    z[i] = str.substr(i, n);
  return z;
}
function symbolAt(str, set, i=0, L=0) {
  if(!L) for(var k of set) {
    L = L<k.length? k.length:L;
  }
  for(var l=L; l; l--) {
    var sym = str.substr(i, l);
    if(set.has(sym)) return sym;
  }
}
function commonInfix(s1, s2) {
  var zi = 0, zl = 0;
  for(var i=0, I=s1.length; i<I; i++) {
    for(var j=0, J=s2.length, jl=0; j<J; j++) {
      jl = s1[i+jl]===s2[j]? jl+1:0;
      if(jl>zl) { zi = j-jl+1; zl = jl; }
    }
  }
  return s2.substr(zi, zl);
}
function commonPrefix(s1, s2) {
  for(var i=0, I=Math.max(s1.length, s2.length); i<I; i++)
    if(s1[i]!==s2[i]) break;
  return s1.substring(0, i);
}
function commonSuffix(s1, s2) {
  for(var i=s1.length-1, j=s2.length-1; i>=0 && j>=0; i--, j--)
    if(s1[i]!==s2[j]) break;
  return s1.substring(i+1);
}
function uncommonInfix(s1, s2) {
  // 1. get common prefix length
  var l1 = s1.length, l2 = s2.length;
  for(var i=0, I=Math.min(l1, l2); i<I; i++)
    if(s1[i]!==s2[i]) break;
  if(i===l1 && i===l2) return ['', ''];
  // 2. get common suffix length
  for(var j=1, J=I-i; j<=J; j++)
    if(s1[l1-j]!==s2[l2-j]) break;
  return [s1.substring(i, l1-j+1), s2.substring(i, l2-j+1)];
}
function of() {
  var z = '';
  for(var i=0, I=arguments.length; i<I; i++)
    z += arguments[i];
  return z;
}
function from(it, fn, ths) {
  var z = '';
  if(fn) for(var v of it)
  { z += fn.call(ths, v); }
  else for(var v of it)
  { z += v; }
  return z;
}
var Val = ' '.repeat(64);
const exports26 = function(n) {
  if(n>Val.length) Val = ' '.repeat(n+Val.length);
  return Val.substr(0, n);
};
const FSUP = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵝᵞᵟᶿᶥᵠᵡᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂᶦᶫᶰᶸᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ';
const TSUP = '0123456789+-=()βγδθιφχABDEGHIJKLMNOPRTUVWILNUabcdefghijklmnoprstuvwxyz';
const FSUB = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₔᵦᵧᵨᵩᵪₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ';
const TSUB = '0123456789+-=()əβγρφχaehijklmnoprstuvx';
function toBaseLine(str, sup, sub) {
  var s = 0, z = '';
  var sup = sup||[], sub = sub||[];
  var bgn = ['', sup[0]||'', sub[0]||''];
  var end = ['', sup[1]||'', sub[1]||''];
  for(var c of str) {
    var isup = FSUP.indexOf(c), isub = FSUB.indexOf(c);
    var sn = isup>=0? 1:(isub>=0? 2:0);
    if(sn!==s) z += end[s]+bgn[sn];
    z += TSUP[isup]||TSUB[isub]||c;
    s = sn;
  }
  return z+end[s];
}
function toCamelCase(str, cap, sep) {
  var wrd = str.split(sep||/\W+/g), z = cap? '':wrd[0].toLowerCase();
  for(var i=cap? 0:1, I=wrd.length; i<I; i++)
    z += wrd[i].slice(0, 1).toUpperCase()+wrd[i].slice(1).toLowerCase();
  return z;
}
function toSnakeCase(str, jon, sep) {
  var wrd = str.split(sep||/\W+/g), z = '';
  for(var i=0, I=wrd.length; i<I; i++) {
    if(!wrd[i].length) continue;
    z += wrd[i].toLowerCase()+(jon||'_');
  }
  return z.substring(0, z.length-1);
}
const SYM = '        ₍₎ ₊ ₋  ₀₁₂₃₄₅₆₇₈₉   ₌                                   ₐ   ₑ  ₕᵢⱼₖₗₘₙₒₚ ᵣₛₜᵤᵥ ₓ       ';
function toSubscript(str) {
  var z = '';
  for(var c of str) {
    var d = SYM[c.charCodeAt()-32]||' ';
    z += d===' '? c:d;
  }
  return z;
}
const SYM31 = '        ⁽⁾ ⁺ ⁻  ⁰¹²³⁴⁵⁶⁷⁸⁹   ⁼   ᴬᴮ ᴰᴱ ᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾ ᴿ ᵀᵁ ᵂ         ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ ʳˢᵗᵘᵛʷˣʸᶻ     ';
function toSuperscript(str) {
  var z = '';
  for(var c of str) {
    var d = SYM31[c.charCodeAt()-32]||' ';
    z += d===' '? c:d;
  }
  return z;
}
function toTitleCase(str, sep) {
  var wrd = str.split(sep||/\W+/g), z = '';
  for(var i=0, I=wrd.length; i<I; i++)
    z += wrd[i].slice(0, 1).toUpperCase()+wrd[i].slice(1).toLowerCase()+' ';
  if(z) z = z.substr(0, z.length-1);
  return z;
}
function replacePrefix(str, pre, rep) {
  return str.startsWith(pre)? rep+str.substr(pre.length):str;
}
function replaceSuffix(str, suf, rep) {
  return str.endsWith(suf)? str.substr(0, str.length-suf.length)+rep:str;
}
function mapReplace(str, map) {
  for(var [k, v] of map)
    str = str.replace(k, v);
  return str;
}
function mapReplacePrefix(str, map, l=0) {
  // 1. get max prefix length
  if(!l) for(var k of map.keys()) {
    l = l<k.length? k.length:l;
  }
  // 2. replace prefix
  for(var i=l; i; i--) {
    var k = str.substr(0, i);
    if(map.has(k)) return map.get(k)+str.substr(i);
  }
  return str;
}
function mapReplaceSuffix(str, map, l=0) {
  // 1. get max suffix length
  if(!l) for(var k of map.keys()) {
    l = l<k.length? k.length:l;
  }
  // 2. replace suffix
  for(var i=l; i; i--) {
    var k = str.substr(-i);
    if(map.has(k)) return str.substr(0, str.length-i)+map.get(k);
  }
  return str;
}
function objectReplace(str, obj) {
  for(var k in obj)
    str = str.replace(k, obj[k]);
  return str;
}
function objectReplacePrefix(str, obj, l=0) {
  // 1. get max prefix length
  if(!l) for(var k in obj) {
    l = l<k.length? k.length:l;
  }
  // 2. replace prefix
  for(var i=l; i; i--) {
    var k = str.substr(0, i);
    if(obj[k]!=null) return obj[k]+str.substr(i);
  }
  return str;
}
function objectReplaceSuffix(str, obj, l=0) {
  // 1. get max suffix length
  if(!l) for(var k in obj) {
    l = l<k.length? k.length:l;
  }
  // 2. replace suffix
  for(var i=l; i; i--) {
    var k = str.substr(-i);
    if(obj[k]!=null) return str.substr(0, str.length-i)+obj[k];
  }
  return str;
}
function every(str, fn, ths) {
  for(var i=0, I=str.length; i<I; i++)
    if(!fn.call(ths, str[i], i, str)) return false;
  return true;
}
function filter(str, fn, ths) {
  var z = '';
  for(var i=0, I=str.length; i<I; i++)
    if(fn.call(ths, str[i], i, str)) z += str[i];
  return z;
}
function find(str, fn, ths) {
  for(var i=0, I=str.length; i<I; i++)
    if(fn.call(ths, str[i], i, str)) return str[i];
}
function findIndex(str, fn, ths) {
  for(var i=0, I=str.length; i<I; i++)
    if(fn.call(ths, str[i], i, str)) return i;
  return -1;
}
function reduceRight(str, fn, val) {
  var I = str.length-1;
  if(val===undefined) val = str[I--];
  for(var i=I; i>=0; i--)
    val = fn(val, str[i], i, str);
  return val;
}
function localeCompare(s1, s2) {
  return s1.localeCompare(s2);
}
function matchingNgrams(s1, s2, n) {
  var m = new Map(), z = [];
  for(var i=0, I=s1.length-n+1; i<I; i++) {
    var g = s1.substr(i, n);
    m.set(g, (m.get(g)||0)+1);
  }
  for(var i=0, I=s2.length-n+1; i<I; i++) {
    var g = s2.substr(i, n), c = m.get(g);
    if(c) { z.push(g); m.set(c-1); }
  }
  return z;
}
function matchingNgramCount(s1, s2, n) {
  var m = new Map(), z = 0;
  for(var i=0, I=s1.length-n+1; i<I; i++) {
    var g = s1.substr(i, n);
    m.set(g, (m.get(g)||0)+1);
  }
  for(var i=0, I=s2.length-n+1; i<I; i++) {
    var g = s2.substr(i, n), c = m.get(g);
    if(c) { z++; m.set(c-1); }
  }
  return z;
}
function euclideanDistance(s1, s2) {
  var z = 0;
  for(var i=0, I=s1.length; i<I; i++) {
    var d = (s1.charCodeAt(i)-s2.charCodeAt(i))/65535;
    z += d*d;
  }
  return Math.sqrt(z);
}
function hammingDistance(s1, s2) {
  var l1 = s1.length, z = 0;
  if(l1!==s2.length) return NaN;
  for(var i=0; i<l1; i++)
    if(s1[i]!==s2[i]) z++;
  return z;
}
function jaccardDistance(s1, s2, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? 1-g/(G-g):0;
}
function jaccardIndex(s1, s2, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? g/(G-g):1;
}
function matches(s1, s2) {
  // 1. prepare strike-off buffer
  var S2 = Array.from(s2), l1 = s1.length, l2=s2.length;
  var d = 0.5*Math.max(l1, l2)-1, m1 = '', m2 = '';
  // 2. get match in first string
  for(var i=0; i<l1; i++) {
    var j = S2.lastIndexOf(s1[i], i);
    if(j<0 || i-j>d) j = S2.indexOf(s1[i], i+1);
    if(j>=0 && j-i<=d) { m1 += s1[i]; S2[j] = null; }
  }
  // 3. get match in second string
  for(j=0; j<l2; j++)
    if(S2[j]===null) m2 += s2[j];
  return [m1, m2];
}
function transpositions(s1, s2) {
  var z = s1.length;
  for(var i=0, I=z; i<I; i++)
    if(s1[i]===s2[i]) z--;
  return z? z-1:0;
}
function jaroDistance(s1, s2) {
  var s = matches(s1, s2), m = s[0].length;
  var t = transpositions(s[0], s[1]);
  return m? (m/s1.length+m/s2.length+(m-t)/m)/3:0;
}
function jaroWinklerDistance(s1, s2, p, bt) {
  var p = p||0.1, bt = bt||0.7;
  var dj = jaroDistance(s1, s2);
  if(dj<bt) return dj;
  var l = commonPrefix(s1, s2.substr(0, 4)).length;
  return dj+(l*p*(1-dj));
}
function levenshteinDistance(s1, s2, ins=1, del=1, sub=1) {
  // 1. remove common prefix, suffix
  var s = uncommonInfix(s1, s2);
  var s1 = s[0], s2 = s[1];
  var l1 = s1.length, l2 = s2.length;
  // 2. get distance in 1st row
  var d0 = [], d1 = [];
  for(var j=0, v=0; j<=l2; v+=ins)
    d0[j++] = v;
  // 4. get distance in remaining rows
  for(var i=1; i<=l1; i++) {
    // a. get distance in 1st column
    var di = i&1? d1:d0;
    var dh = i&1? d0:d1;
    di[0] = dh[0]+del;
    // b. get distance of remaining columns
    for(var j=1; j<=l2; j++) {
      var cost = s1[i-1]===s2[j-1]? 0:sub;
      di[j] = Math.min(dh[j]+del, di[j-1]+ins, dh[j-1]+cost);
    }
  }
  // 5. return minimum distance
  return (l1&1? d1:d0)[l2];
}
function damerauLevenshteinDistance(s1, s2, ins=1, del=1, sub=1, tra=1) {
  // 1. remove common prefix, suffix
  var s = uncommonInfix(s1, s2);
  var s1 = s[0], s2 = s[1];
  var l1 = s1.length, l2 = s2.length
  var I = l1+2, J = l2+2, L = l1+l2;
  // 2. prepare 1st 2 rows
  var d0 = [L], d1 = [L];
  var d = [d0, d1], da = new Map();
  for(var j=1, v=0; j<J; j++, v+=ins) {
    d0[j] = L;
    d1[j] = v;
  }
  // 3. prepare remaining rows
  for(var i=2; i<I; i++) {
    // a. prepare 1st 2 columns
    var db = 0, dh = d[i-1];
    var di = [L, dh[1]+del];
    d[i] = di;
    // b. prepare remaining columns
    for(var j=2; j<J; j++) {
      var k = da.get(s2[j-2])||0, l = db, cost = sub;
      if(s1[i-2]===s2[j-2]) { db = j-1; cost = 0; }
      di[j] = Math.min(di[j-1]+ins, dh[j]+del, dh[j-1]+cost, d[k][l]+(i-k-2)+tra+(j-l-2));
    }
    da.set(s1[i-2], i-1);
  }
  // 4. return minimum distance
  return d[l1+1][l2+1];
}
function sorensenDiceDistance(s1, s2, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? 1-(g+g)/G:0;
}
function sorensenDiceIndex(s1, s2, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? (g+g)/G:1;
}
function tverskyDistance(s1, s2, a=1, b=1, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? 1-g/(g+a*(g1-g)+b*(g2-g)):0;
}
function tverskyIndex(s1, s2, a=1, b=1, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? g/(g+a*(g1-g)+b*(g2-g)):1;
}
// 1. Contants
String.WHITESPACE = exports0;
String.PUNCTUATION = exports1;
String.HEX_DIGITS = exports2;
String.OCT_DIGITS = exports3;
String.DIGITS = exports4;
String.UPPERCASE = exports5;
String.LOWERCASE = exports6;
String.LETTERS = exports7;
String.PRINTABLE = exports8;

// 2. Datatype methods
String.is = is;

// 3. About methods
String.asc = exports10;
String.chr = exports11;
String.keys = keys;
String.values = values;
String.entries = entries;
String.left = exports15;
String.mid = exports16;
String.right = exports17;
String.ngrams = ngrams;
String.symbolAt = symbolAt;

// 4. Search methods
String.commonInfix = commonInfix;
String.commonPrefix = commonPrefix;
String.commonSuffix = commonSuffix;
String.uncommonInfix = uncommonInfix;

// 5. Generate methods
String.of = of;
String.from = from;
String.space = exports26;

// 6. Transform methods
String.toBaseline = toBaseLine;
String.toCamelCase = toCamelCase;
String.toSnakeCase = toSnakeCase;
String.toSubscript = toSubscript;
String.toSuperscript = toSuperscript;
String.toTitleCase = toTitleCase;
String.replacePrefix = replacePrefix;
String.replaceSuffix = replaceSuffix;
String.mapReplace = mapReplace;
String.mapReplacePrefix = mapReplacePrefix;
String.mapReplaceSuffix = mapReplaceSuffix;
String.objectReplace = objectReplace;
String.objectReplacePrefix = objectReplacePrefix;
String.objectReplaceSuffix = objectReplaceSuffix;

// 7. Functional methods
String.every = every;
String.filter = filter;
String.find = find;
String.findIndex = findIndex;
String.reduceRight = reduceRight;

// 8. Evaluate methods
String.localeCompare = localeCompare;
String.matchingNgrams = matchingNgrams;
String.matchingNgramCount = matchingNgramCount;
String.euclideanDistance = euclideanDistance;
String.hammingDistance = hammingDistance;
String.jaccardDistance = jaccardDistance;
String.jaccardIndex = jaccardIndex;
String.jaroDistance = jaroDistance;
String.jaroWinklerDistance = jaroWinklerDistance;
String.levenshteinDistance = levenshteinDistance;
String.damerauLevenshteinDistance = damerauLevenshteinDistance;
String.sorensenDiceDistance = sorensenDiceDistance;
String.sorensenDiceIndex = sorensenDiceIndex;
String.tverskyDistance = tverskyDistance;
String.tverskyIndex = tverskyIndex;
module.exports = String;
