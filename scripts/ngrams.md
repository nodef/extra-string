Get [n-grams] of string.

```javascript
const ngrams = require('@extra-string/ngrams');
// ngrams(<string>, <n>)

ngrams('card', 2);
// ['ca', 'ar', 'rd']
ngrams('triple-h', 3);
// ['tri', 'rip', 'ipl', 'ple', 'le-', 'e-h']
ngrams('brocklesner', 10);
// ['brocklesne', 'rocklesner']
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[n-grams]: https://en.wikipedia.org/wiki/N-gram
