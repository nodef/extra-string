Check if value is [string].

```javascript
const is = require('@extra-string/is');
// is(<value>)

is('panini');
// true
is("valmiki");
// true
is(String('vyasa'));
// true
is({shakespeare: 'literature'});
// false
is(71811313518);
// false (what's this?)
is();
// false
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
