function mapReplace(str, map) {
  for(var [k, v] of map)
    str = str.replace(k, v);
  return str;
};
module.exports = mapReplace;
