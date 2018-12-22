Get [set]-listed [symbol] at specified index in string.

```javascript
const symbolAt = require('@extra-string/symbol-at');
// symbolAt(<string>, <symbol set>, [index=0], [max symbol length])

symbolAt('rho+pi', new Set().add('pi').add('rho').add('+').add('-'), 0);
// 'rho'
symbolAt('rho+pi', new Set().add('pi').add('rho').add('+').add('-'), 2);
// undefined (no match at 2)
symbolAt('rho+pi', new Set().add('pi').add('rho').add('+').add('-'), 3);
// '+'
symbolAt('rho+pi', new Set(['pi', 'rho', '+', '-']), 4, 3);
// 'pi' (longest symbol='rho')
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[symbol]: https://en.wikipedia.org/wiki/Symbol_(formal)
