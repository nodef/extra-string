const commonPrefix = require('string-commonprefix');
const jaroDistance = require('string-jarodistance');
function jaroWinklerDistance(s1, s2, p, bt) {
  var p = p||0.1, bt = bt||0.7;
  var dj = jaroDistance(s1, s2);
  if(dj<bt) return dj;
  var l = commonPrefix(s1, s2.substr(0, 4)).length;
  return dj+(l*p*(1-dj));
};
module.exports = jaroWinklerDistance;
