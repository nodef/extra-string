function objectReplaceSuffix(str, obj, l=0) {
  // 1. get max suffix length
  if(!l) for(var k in obj) {
    l = l<k.length? k.length:l;
  }
  // 2. replace suffix
  for(var i=l; i; i--) {
    var k = str.substr(-i);
    if(obj[k]!=null) return str.substr(0, str.length-i)+obj[k];
  }
  return str;
};
module.exports = objectReplaceSuffix;
