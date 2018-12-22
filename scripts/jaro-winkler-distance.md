Get [Jaro-Winkler distance] between strings.

```javascript
const jaroWinklerDistance = require('@extra-string/jaro-winkler-distance');
// jaroWinklerDistance(<string-1>, <string-2>, [scaling-factor=0.1], [boost-threshold=0.7])

jaroWinklerDistance('no', 'match');
// 0
jaroWinklerDistance('teapot', 'teapot');
// 1
jaroWinklerDistance('jelly', 'jellyfish');
// 0.9111111111111111
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Jaro-Winkler distance]: https://en.wikipedia.org/wiki/Jaro–Winkler_distance
