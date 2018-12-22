function of() {
  var z = '';
  for(var i=0, I=arguments.length; i<I; i++)
    z += arguments[i];
  return z;
};
module.exports = of;
