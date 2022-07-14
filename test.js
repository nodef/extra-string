const string = require('./');
const assert = require('assert');


// 1. Basic tests.
function example1() {
  var a = string.longestCommonInfix('dismiss', 'mississipi');
  assert.equal(a, 'miss');
  // → 'miss'

  var a = string.longestUncommonInfixes('chocolatier', 'engineer');
  assert.deepEqual(a, ['chocolati', 'engine']);
  // → ['chocolati', 'engine']

  var a = string.toKebabCase('Malwa Plateau');
  assert.equal(a, 'malwa-plateau');
  // → 'malwa-plateau'

  var a = '6.626 x 10' + string.toSuperscript('-34');
  assert.equal(a, '6.626 x 10⁻³⁴');
  // → '6.626 x 10⁻³⁴' (Planck's constant)

  var a = string.tverskyDistance('pikachu', 'raichu', 3, 0.2, 0.4);
  assert.equal(a, 0.6666666666666667);
  // → 0.6666666666666667
}
example1();




function testLongestCommonInfix() {
  var a = string.longestCommonInfix('mangala', 'mangalyaan');
  assert.equal(a, 'mangal');
  var a = string.longestCommonInfix('easter', 'tertiary');
  assert.equal(a, 'ter');
  var a = string.longestCommonInfix('dismiss', 'mississipi');
  assert.equal(a, 'miss');
}
testLongestCommonInfix();


function testLongestCommonPrefix() {
  var a = string.longestCommonPrefix('peacock', 'peahen');
  assert.equal(a, 'pea');
  var a = string.longestCommonPrefix('inception', 'interstellar');
  assert.equal(a, 'in');
  var a = string.longestCommonPrefix('mars', 'tars');
  assert.equal(a, '');
}
testLongestCommonPrefix();


function testLongestCommonSuffix() {
  var a = string.longestCommonSuffix('peacock', 'hancock');
  assert.equal(a, 'cock');
  var a = string.longestCommonSuffix('mars', 'tars');
  assert.equal(a, 'ars');
  var a = string.longestCommonSuffix('chief', 'master');
  assert.equal(a, '');
}
testLongestCommonSuffix();


function testLongestUncommonInfixes() {
  var a = string.longestUncommonInfixes('rollcage', 'ridecage');
  assert.deepEqual(a, ['oll', 'ide']);
  var a = string.longestUncommonInfixes('riverbed', 'roverbed');
  assert.deepEqual(a, ['i', 'o']);
  var a = string.longestUncommonInfixes('chocolatier', 'engineer');
  assert.deepEqual(a, ['chocolati', 'engine']);
}
testLongestUncommonInfixes();


function testToKebabCase() {
  var a = string.toKebabCase('Malwa Plateau');
  assert.equal(a, 'malwa-plateau');
  var a = string.toKebabCase('::chota::nagpur::', null, '_');
  assert.equal(a, 'chota_nagpur');
  var a = string.toKebabCase('deccan___plateau', /_+/g, '.');
  assert.equal(a, 'deccan.plateau');
}
testToKebabCase();


function testToSuperscript() {
  var a = string.toSuperscript('hello world');
  assert.equal(a, 'ʰᵉˡˡᵒ ʷᵒʳˡᵈ');
  var a = string.toSuperscript('DECCAN PLATEAU');
  assert.equal(a, 'ᴰᴱCCᴬᴺ ᴾᴸᴬᵀᴱᴬᵁ');
  var a = '6.626 x 10' + string.toSuperscript('-34');
  assert.equal(a, '6.626 x 10⁻³⁴');
}
testToSuperscript();


function testTverskyDistance() {
  var a = string.tverskyDistance('pocket', 'pocket', 2);
  assert.equal(a, 0);
  var a = string.tverskyDistance('monster', 'rocket', 2);
  assert.equal(a, 1);
  var a = string.tverskyDistance('pikachu', 'raichu', 3, 0.2, 0.4);
  assert.equal(a, 0.6666666666666667);
}
testTverskyDistance();
