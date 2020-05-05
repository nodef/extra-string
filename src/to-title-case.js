function toTitleCase(str, sep) {
  var wrd = str.split(sep||/\W+/g), z = '';
  for(var i=0, I=wrd.length; i<I; i++)
    z += wrd[i].slice(0, 1).toUpperCase()+wrd[i].slice(1).toLowerCase()+' ';
  if(z) z = z.substr(0, z.length-1);
  return z;
};
module.exports = toTitleCase;
