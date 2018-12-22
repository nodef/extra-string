Replace [prefix] of [string] using [object].

```javascript
const objectReplacePrefix = require('@extra-string/object-replace-prefix');
// objectReplacePrefix(<string>, <object>, [max prefix length])

objectReplacePrefix('dishonoured', {'dis': '', 'un': '', 'in': ''});
// 'honoured'
objectReplacePrefix('dishonoured', {'honour': 'respect', 'flatter': 'mock'});
// 'dishonoured' (only prefix)
objectReplacePrefix('dishonoured', {'dis': 'redis', 'redis': 'super'}, 5);
// 'redishonoured' (only once)
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[prefix]: https://en.wikipedia.org/wiki/Prefix
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
