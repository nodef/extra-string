Get [Tversky distance] between strings.

```javascript
const tverskyDistance = require('@extra-string/tversky-distance');
// tverskyDistance(<string-1>, <string-2>, [α=1], [β=1], [ngram=2])

tverskyDistance('pocket', 'pocket');
// 0
tverskyDistance('monster', 'rocket');
// 1
tverskyDistance('pikachu', 'raichu', 0.2, 0.4, 3);
// 0.6666666666666667
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Tversky distance]: https://en.wikipedia.org/wiki/Tversky_index
