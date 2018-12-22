Get matching [n-grams] between strings.

```javascript
const matchingNgrams = require('@extra-string/matching-ngrams');
// matchingNgrams(<string-1>, <string-2>, <n>)

matchingNgrams('worm', 'storm', 2);
// ['or', 'rm']
matchingNgrams('astronaut', 'astronomer', 3);
// ['ast', 'str', 'tro', 'ron']
matchingNgrams('coconut', 'cotton', 2);
// ['co', 'on']
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[n-grams]: https://en.wikipedia.org/wiki/N-gram
