function commonPrefix(s1, s2) {
  for(var i=0, I=Math.max(s1.length, s2.length); i<I; i++)
    if(s1[i]!==s2[i]) break;
  return s1.substring(0, i);
};
module.exports = commonPrefix;
