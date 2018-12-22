Filter characters that pass the test, like `Array.filter()`.

```javascript
const filter = require('@extra-string/filter');
// filter(<string>, <testFn>, [thisArg])

filter('g00df00d', (v) => v<='f');
// '00df00d'
filter('badfood', (v) => v<='f');
// 'badfd'
filter('', (v) => v<='f');
// ''
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)
