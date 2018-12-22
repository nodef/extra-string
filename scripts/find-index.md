Get index of first value that satisfies the test, like `Array.findIndex()`.

```javascript
const findIndex = require('@extra-string/find-index');
// findIndex(<string>, <testFn>, [thisArg])

findIndex('badd0g', (v) => v>'f');
// 5
findIndex('badcab', (v) => v>'f');
// -1
findIndex('', (v) => v>'f');
// -1
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)
