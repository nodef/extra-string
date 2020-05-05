function toSnakeCase(str, jon, sep) {
  var wrd = str.split(sep||/\W+/g), z = '';
  for(var i=0, I=wrd.length; i<I; i++) {
    if(!wrd[i].length) continue;
    z += wrd[i].toLowerCase()+(jon||'_');
  }
  return z.substring(0, z.length-1);
};
module.exports = toSnakeCase;
