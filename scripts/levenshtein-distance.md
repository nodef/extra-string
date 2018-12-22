Get [Levenshtein distance] between strings.

```javascript
const levenshteinDistance = require('string-levenshteindistance');
// levenshteinDistance(<string-1>, <string-2>, [insertion cost=1], [deletion cost=1], [substition cost=1])

levenshteinDistance('hareram', 'hareram');
// 0
levenshteinDistance('church', 'torch');
// 3
levenshteinDistance('mr. bean', 'ben 10', 1, 0.1, 1);
// 3.5
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Levenshtein distance]: https://en.wikipedia.org/wiki/Levenshtein_distance
