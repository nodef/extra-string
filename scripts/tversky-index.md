Get [Tversky index] between strings.

```javascript
const tverskyIndex = require('@extra-string/tversky-index');
// tverskyIndex(<string-1>, <string-2>, [α=1], [β=1], [ngram=2])

tverskyIndex('pocket', 'pocket');
// 1
tverskyIndex('monster', 'rocket');
// 0
tverskyIndex('pikachu', 'raichu', 0.2, 0.4, 3);
// 0.3333333333333333
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Tversky index]: https://en.wikipedia.org/wiki/Tversky_index
