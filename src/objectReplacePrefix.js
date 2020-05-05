function objectReplacePrefix(str, obj, l=0) {
  // 1. get max prefix length
  if(!l) for(var k in obj) {
    l = l<k.length? k.length:l;
  }
  // 2. replace prefix
  for(var i=l; i; i--) {
    var k = str.substr(0, i);
    if(obj[k]!=null) return obj[k]+str.substr(i);
  }
  return str;
};
module.exports = objectReplacePrefix;
