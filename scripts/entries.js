function entries(str) {
  var z = [];
  for(var i=0, I=str.length; i<I; i++)
    z.push([i, str[i]]);
  return z;
};
module.exports = entries;
