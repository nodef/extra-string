function from(it, fn, ths) {
  var z = '';
  if(fn) for(var v of it)
  { z += fn.call(ths, v); }
  else for(var v of it)
  { z += v; }
  return z;
};
module.exports = from;
