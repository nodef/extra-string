Returns a string of spaces.
- [5x Faster] than `' '.repeat(n)`.
- Uses *cache* & `substr`.

```javascript
var space = require('@extra-string/space');
// space(<length>)

space(4);  // '    '
space(6);  // '      '
space(0);  // ''
space(-1); // ''
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[5x Faster]: https://jsperf.com/spaces-substr-vs-search
