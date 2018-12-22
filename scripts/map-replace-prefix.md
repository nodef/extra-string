Replace [prefix] of [string] using [map].

```javascript
const mapReplacePrefix = require('@extra-string/map-replace-prefix');
// mapReplacePrefix(<string>, <map>, [max prefix length])

mapReplacePrefix('dishonoured', new Map([['dis', ''], ['un', ''], ['in', '']]));
// 'honoured'
mapReplacePrefix('dishonoured', new Map([['honour', 'respect'], ['flatter', 'mock']]));
// 'dishonoured' (only prefix)
mapReplacePrefix('dishonoured', new Map([['dis', 'redis'], ['redis', 'super']]), 5);
// 'redishonoured' (only once)
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[prefix]: https://en.wikipedia.org/wiki/Prefix
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
