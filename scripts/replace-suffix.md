Replace [suffix] match in [string] with specified value.

```javascript
const replaceSuffix = require('@extra-string/replace-suffix');
// replaceSuffix(<string>, <suffix>, <replaced value>)

replaceSuffix('tinman', 'man', 'woman');
// 'tinwoman'
replaceSuffix('muscleman', 'cle', 'cled');
// 'muscleman'
replaceSuffix('laughed', 'ed', '');
// 'laugh'
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[suffix]: https://en.wikipedia.org/wiki/Suffix
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
