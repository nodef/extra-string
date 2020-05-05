function commonInfix(s1, s2) {
  var zi = 0, zl = 0;
  for(var i=0, I=s1.length; i<I; i++) {
    for(var j=0, J=s2.length, jl=0; j<J; j++) {
      jl = s1[i+jl]===s2[j]? jl+1:0;
      if(jl>zl) { zi = j-jl+1; zl = jl; }
    }
  }
  return s2.substr(zi, zl);
};
module.exports = commonInfix;
