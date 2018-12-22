Convert string to [snake case].

```javascript
const toSnakeCase = require('@extra-string/to-snake-case');
// toSnakeCase(<string>, [joiner=_], [separator=/\W+/g])

toSnakeCase('Malwa Plateau');
// 'malwa_plateau'
toSnakeCase('::chota::nagpur::', '-');
// 'chota-nagpur'
toSnakeCase('deccan___plateau', '.', '_');
// 'deccan.plateau'
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[snake case]: https://en.wikipedia.org/wiki/Snake_case
