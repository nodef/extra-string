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
};
function transpositions(s1, s2) {
  var z = s1.length;
  for(var i=0, I=z; i<I; i++)
    if(s1[i]===s2[i]) z--;
  return z? z-1:0;
};
function jaroDistance(s1, s2) {
  var s = matches(s1, s2), m = s[0].length;
  var t = transpositions(s[0], s[1]);
  return m? (m/s1.length+m/s2.length+(m-t)/m)/3:0;
};
module.exports = jaroDistance;
