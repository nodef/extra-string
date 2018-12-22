Get [Jaccard index] between strings.

```javascript
const jaccardIndex = require('@extra-string/jaccard-index');
// jaccardIndex(<string-1>, <string-2>, [ngram=2])

jaccardIndex('pocket', 'pocket');
// 1
jaccardIndex('monster', 'rocket');
// 0
jaccardIndex('pikachu', 'raichu', 3);
// 0.125
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Jaccard index]: https://en.wikipedia.org/wiki/Jaccard_index
