function reduceRight(str, fn, val) {
  var I = str.length-1;
  if(val===undefined) val = str[I--];
  for(var i=I; i>=0; i--)
    val = fn(val, str[i], i, str);
  return val;
};
module.exports = reduceRight;
