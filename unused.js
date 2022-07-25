function toKebabCase(x, re=null, sep="-") {
  var words = x.split(re || /\W+/g).filter(x => x);
  for (var i=0, I=words.length; i<I; ++i) {
    words[i] = words[i].replace(/[A-Z]+/g, m => m.length===1? sep+m : sep+m.slice(0, -1)+sep+m.slice(-1));
    if (words[i].startsWith(sep)) words[i] = words[i].slice(sep.length);
  }
  return words.join(sep).toLowerCase();
}


function main() {
  var a = toKebabCase('fileName');
  console.log(a);
}
main();
