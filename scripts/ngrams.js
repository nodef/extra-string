function ngrams(str, n) {
  var z = [];
  for(var i=0, I=str.length-n+1; i<I; i++)
    z[i] = str.substr(i, n);
  return z;
};
module.exports = ngrams;
