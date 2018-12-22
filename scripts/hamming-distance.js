function hammingDistance(s1, s2) {
  var l1 = s1.length, z = 0;
  if(l1!==s2.length) return NaN;
  for(var i=0; i<l1; i++)
    if(s1[i]!==s2[i]) z++;
  return z;
};
module.exports = hammingDistance;
