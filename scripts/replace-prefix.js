function replacePrefix(str, pre, rep) {
  return str.startsWith(pre)? rep+str.substr(pre.length):str;
};
module.exports = replacePrefix;
