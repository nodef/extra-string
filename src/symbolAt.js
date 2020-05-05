function symbolAt(str, set, i=0, L=0) {
  if(!L) for(var k of set) {
    L = L<k.length? k.length:L;
  }
  for(var l=L; l; l--) {
    var sym = str.substr(i, l);
    if(set.has(sym)) return sym;
  }
};
module.exports = symbolAt;
