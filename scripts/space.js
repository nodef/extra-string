var Val = ' '.repeat(64);
module.exports = function(n) {
  if(n>Val.length) Val = ' '.repeat(n+Val.length);
  return Val.substr(0, n);
};
