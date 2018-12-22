const matchingNgramCount = require('./matching-ngram-count');
function tverskyIndex(s1, s2, a=1, b=1, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? g/(g+a*(g1-g)+b*(g2-g)):1;
};
module.exports = tverskyIndex;
