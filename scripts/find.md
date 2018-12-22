Get first character that satisfies the test, like `Array.find()`.

```javascript
const find = require('@extra-string/find');
// find(<string>, <testFn>, [thisArg])

find('badd0g', (v) => v>'f');
// 'g'
find('badcab', (v) => v>'f');
// undefined
find('', (v) => v>'f');
// undefined
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)
