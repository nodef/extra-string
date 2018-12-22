Get [Euclidean distance] between strings, with **normalized [single UTF-16 code]**.

```javascript
const euclideanDistance = require('string-euclideandistance');
// euclideanDistance(<string-1>, <string-2>)

euclideanDistance('a', 'b');
// 0.000015259021896696422 (normalized distance between 1 character code)
euclideanDistance('logo', 'pogo');
// 0.00006103608758678569
euclideanDistance('doctor', 'broker');
// 0.00028053370429312937
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Euclidean distance]: https://en.wikipedia.org/wiki/Euclidean_distance
[single UTF-16 code]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
