function replaceSuffix(str, suf, rep) {
  return str.endsWith(suf)? str.substr(0, str.length-suf.length)+rep:str;
};
module.exports = replaceSuffix;
