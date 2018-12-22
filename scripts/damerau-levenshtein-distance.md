Get [Damerau-Levenshtein distance] between strings.

```javascript
const damerauLevenshteinDistance = require('@extra-string/damerau-levenshtein-distance');
// damerauLevenshteinDistance(<string-1>, <string-2>, [insertion cost=1], [deletion cost=1], [substitution cost=1], [transposition cost=1])

damerauLevenshteinDistance('gnu', 'gun');
// 1
damerauLevenshteinDistance('software', 'softwear');
// 2
damerauLevenshteinDistance('level field', 'lvele feidl', 1, 1, 1, 0.1);
// 0.4
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Damerau-Levenshtein distance]: https://en.wikipedia.org/wiki/Damerau–Levenshtein_distance
