function mapReplacePrefix(str, map, l=0) {
  // 1. get max prefix length
  if(!l) for(var k of map.keys()) {
    l = l<k.length? k.length:l;
  }
  // 2. replace prefix
  for(var i=l; i; i--) {
    var k = str.substr(0, i);
    if(map.has(k)) return map.get(k)+str.substr(i);
  }
  return str;
};
module.exports = mapReplacePrefix;
