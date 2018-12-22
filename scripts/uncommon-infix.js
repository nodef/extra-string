function uncommonInfix(s1, s2) {
  // 1. get common prefix length
  var l1 = s1.length, l2 = s2.length;
  for(var i=0, I=Math.min(l1, l2); i<I; i++)
    if(s1[i]!==s2[i]) break;
  if(i===l1 && i===l2) return ['', ''];
  // 2. get common suffix length
  for(var j=1, J=I-i; j<=J; j++)
    if(s1[l1-j]!==s2[l2-j]) break;
  return [s1.substring(i, l1-j+1), s2.substring(i, l2-j+1)];
};
module.exports = uncommonInfix;
