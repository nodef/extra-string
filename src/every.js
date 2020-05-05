function every(str, fn, ths) {
  for(var i=0, I=str.length; i<I; i++)
    if(!fn.call(ths, str[i], i, str)) return false;
  return true;
};
module.exports = every;
