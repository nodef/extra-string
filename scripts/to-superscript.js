const SYM = '        ⁽⁾ ⁺ ⁻  ⁰¹²³⁴⁵⁶⁷⁸⁹   ⁼   ᴬᴮ ᴰᴱ ᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾ ᴿ ᵀᵁ ᵂ         ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ ʳˢᵗᵘᵛʷˣʸᶻ     ';
function toSuperscript(str) {
  var z = '';
  for(var c of str) {
    var d = SYM[c.charCodeAt()-32]||' ';
    z += d===' '? c:d;
  }
  return z;
};
module.exports = toSuperscript;
