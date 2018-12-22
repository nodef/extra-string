function findIndex(str, fn, ths) {
  for(var i=0, I=str.length; i<I; i++)
    if(fn.call(ths, str[i], i, str)) return i;
  return -1;
};
module.exports = findIndex;
