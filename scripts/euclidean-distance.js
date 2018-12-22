function euclideanDistance(s1, s2) {
  var z = 0;
  for(var i=0, I=s1.length; i<I; i++) {
    var d = (s1.charCodeAt(i)-s2.charCodeAt(i))/65535;
    z += d*d;
  }
  return Math.sqrt(z);
};
module.exports = euclideanDistance;
