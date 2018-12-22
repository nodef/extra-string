Convert string to [camel case].

```javascript
const toCamelCase = require('@extra-string/to-camel-case');
// toCamelCase(<string>, [capitalize=0], [separator=/\W+/g])

toCamelCase('Western Ghats');
// 'westernGhats'
toCamelCase('cardamom--hills', 1);
// 'CardamomHills'
toCamelCase('EAstErn__ghAts', 1, '_');
// 'EasternGhats'
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[camel case]: https://en.wikipedia.org/wiki/Camel_case
