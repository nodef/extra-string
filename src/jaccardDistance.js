const matchingNgramCount = require('./matching-ngram-count');
function jaccardDistance(s1, s2, n=2) {
  var g1 = Math.max(s1.length-n+1, 0), g2 = Math.max(s2.length-n+1, 0);
  var G = g1+g2, g = matchingNgramCount(s1, s2, n);
  return G? 1-g/(G-g):0;
};
module.exports = jaccardDistance;
