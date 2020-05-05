function filter(str, fn, ths) {
  var z = '';
  for(var i=0, I=str.length; i<I; i++)
    if(fn.call(ths, str[i], i, str)) z += str[i];
  return z;
};
module.exports = filter;
