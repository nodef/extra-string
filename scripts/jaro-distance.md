Get [Jaro distance] between strings ([rosettacode]).

```javascript
const jaroDistance = require('@extra-string/jaro-distance');
// jaroDistance(<string-1>, <string-2>)

jaroDistance('no', 'match');
// 0
jaroDistance('teapot', 'teapot');
// 1
jaroDistance('jellyfish', 'smellyfish');
// 0.8962962962962964
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Jaro distance]: https://en.wikipedia.org/wiki/Jaro–Winkler_distance#Jaro_distance
[rosettacode]: https://rosettacode.org/wiki/Jaro_distance
