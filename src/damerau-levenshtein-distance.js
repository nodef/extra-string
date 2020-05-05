const uncommonInfix = require('./uncommon-infix');
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
};
module.exports = damerauLevenshteinDistance;
