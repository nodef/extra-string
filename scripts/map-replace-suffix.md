Replace [suffix] of [string] using [map].

```javascript
const mapReplaceSuffix = require('@extra-string/map-replace-suffix');
// mapReplaceSuffix(<string>, <map>, [max suffix length])

mapReplaceSuffix('ender', new Map([['er', ''], ['ing', ''], ['ed', '']]));
// 'end
mapReplaceSuffix('ender', new Map([['end', 'right'], ['start', 'left']]));
// 'ender' (only suffix)
mapReplaceSuffix('ender', new Map([['er', ' game'], ['game', 'play']]), 4);
// 'end game' (only once)
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[suffix]: https://en.wikipedia.org/wiki/Suffix
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
