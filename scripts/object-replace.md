Replace parts of [string] using [object].

```javascript
const objectReplace = require('@extra-string/object-replace');
// objectReplace(<string>, <object>)

objectReplace('alpha beta', {'alpha': 'α', 'beta': 'β'});
// 'α β'
objectReplace('gamma DELTA', {'gamma': 'γ', 'delta': 'δ'});
// 'γ DELTA'
objectReplace('Epsilon ZETA'.toLowerCase(), {'epsilon': 'ε', 'zeta': 'ζ'});
// 'ε ζ'
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
