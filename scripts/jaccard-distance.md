Get [Jaccard distance] between strings.

```javascript
const jaccardDistance = require('@extra-string/jaccard-distance');
// jaccardDistance(<string-1>, <string-2>, [ngram=2])

jaccardDistance('pocket', 'pocket');
// 0
jaccardDistance('monster', 'rocket');
// 1
jaccardDistance('pikachu', 'raichu', 3);
// 0.875
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Jaccard distance]: https://en.wikipedia.org/wiki/Jaccard_index
