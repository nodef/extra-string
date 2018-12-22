Replace parts of [string] using [map].

```javascript
const mapReplace = require('@extra-string/map-replace');
// mapReplace(<string>, <map>)

mapReplace('alpha beta', new Map().set('alpha', 'α').set('beta', 'β'));
// 'α β'
mapReplace('gamma DELTA', new Map().set('gamma', 'γ').set('delta', 'δ'));
// 'γ DELTA'
mapReplace('Epsilon ZETA', new Map().set(/epsilon/gi, 'ε').set(/zeta/gi, 'ζ'));
// 'ε ζ'
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
