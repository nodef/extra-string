Check if all characters pass the test, like `Array.every()`.

```javascript
const every = require('@extra-string/every');
// every(<string>, <testFn>, <thisArg>)

every('badf00d', (v) => v<='f');
// true
every('g00df00d', (v) => v<='f');
// false
every('', (v) => v<='f');
// true
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)
