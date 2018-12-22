Replace [suffix] of [string] using [object].

```javascript
const objectReplaceSuffix = require('@extra-string/object-replace-suffix');
// objectReplaceSuffix(<string>, <object>, [max suffix length])

objectReplaceSuffix('ender', {'er': '', 'ing': '', 'ed': ''});
// 'end
objectReplaceSuffix('ender', {'end': 'right', 'start': 'left'});
// 'ender' (only suffix)
objectReplaceSuffix('ender', {'er': ' game', 'game': 'play'}, 4);
// 'end game' (only once)
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[suffix]: https://en.wikipedia.org/wiki/Suffix
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
