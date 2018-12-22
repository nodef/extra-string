const matchingNgramCount = require('string-matchingngramcount');
function sorensenDiceDistance(s1, s2, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? 1-(g+g)/G:0;
};
module.exports = sorensenDiceDistance;
