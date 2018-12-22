function objectReplace(str, obj) {
  for(var k in obj)
    str = str.replace(k, obj[k]);
  return str;
};
module.exports = objectReplace;
