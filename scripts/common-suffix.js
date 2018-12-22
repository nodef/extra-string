function commonSuffix(s1, s2) {
  for(var i=s1.length-1, j=s2.length-1; i>=0 && j>=0; i--, j--)
    if(s1[i]!==s2[j]) break;
  return s1.substring(i+1);
};
module.exports = commonSuffix;
