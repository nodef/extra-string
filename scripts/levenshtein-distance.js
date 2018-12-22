const uncommonInfix = require('./uncommon-infix');
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
};
module.exports = levenshteinDistance;
