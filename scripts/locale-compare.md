Compare two [strings] in current locale.

```javascript
const localeCompare = require('@extra-string/locale-compare');
// localeCompare(<string-1>, <string-2>)

localeCompare('abra', 'bulbasaur');
// -1
localeCompare('bulbasaur', 'bulbasaur');
// 0
localeCompare('charmeleon', 'bulbasaur');
// 1
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
