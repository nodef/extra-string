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
};
module.exports = matchingNgrams;
