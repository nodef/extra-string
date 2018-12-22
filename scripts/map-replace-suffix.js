function mapReplaceSuffix(str, map, l=0) {
  // 1. get max suffix length
  if(!l) for(var k of map.keys()) {
    l = l<k.length? k.length:l;
  }
  // 2. replace suffix
  for(var i=l; i; i--) {
    var k = str.substr(-i);
    if(map.has(k)) return str.substr(0, str.length-i)+map.get(k);
  }
  return str;
};
module.exports = mapReplaceSuffix;
