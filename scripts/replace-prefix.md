Replace [prefix] match in [string] with specified value.

```javascript
const replacePrefix = require('@extra-string/replace-prefix');
// replacePrefix(<string>, <prefix>, <replaced value>)

replacePrefix('tinman', 'tin', 'gun');
// 'gunman'
replacePrefix('muscleman', 'cle', 'cled');
// 'muscleman' (not prefix)
replacePrefix('-1.6022e-19', '-', '');
// '1.6022e-19'
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[prefix]: https://en.wikipedia.org/wiki/Prefix
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
