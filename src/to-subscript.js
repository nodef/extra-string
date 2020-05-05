const SYM = '        ₍₎ ₊ ₋  ₀₁₂₃₄₅₆₇₈₉   ₌                                   ₐ   ₑ  ₕᵢⱼₖₗₘₙₒₚ ᵣₛₜᵤᵥ ₓ       ';
function toSubscript(str) {
  var z = '';
  for(var c of str) {
    var d = SYM[c.charCodeAt()-32]||' ';
    z += d===' '? c:d;
  }
  return z;
};
module.exports = toSubscript;
