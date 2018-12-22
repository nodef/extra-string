function toCamelCase(str, cap, sep) {
  var wrd = str.split(sep||/\W+/g), z = cap? '':wrd[0].toLowerCase();
  for(var i=cap? 0:1, I=wrd.length; i<I; i++)
    z += wrd[i].slice(0, 1).toUpperCase()+wrd[i].slice(1).toLowerCase();
  return z;
};
module.exports = toCamelCase;
