Create string from iterable, like `Array.from()`.

```javascript
const from = require('@extra-string/from');
// from(<iterable>, [mapFn], [thisArg])

from(['a', 'b']);
// 'ab'
from('abc', (v) => String.fromCharCode(v.charCodeAt()+1));
// 'bcd'
from(new Set().add('a').add('b'));
// 'ab'
from(new Map().set('a', 1).set('b', 2));
// 'a,1b,2'
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)
