Return a portion of a string.

```javascript
var mid = require('@extra-string/mid');
// mid(<string>, <start>, <length>) 
 
mid('Thai Sweet Chilli Sauce', 5, 5);  // 'Sweet' 
mid('Thai Sweet Chilli Sauce', 5, 12); // 'Sweet Chilli' 
mid('Thai Sweet Chilli Sauce', 5);     // 'Sweet Chilli Sauce' 
mid('Thai Sweet Chilli Sauce', 5, -1); // '' 
mid('Thai Sweet Chilli Sauce', -5);    // 'Sauce' 
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)
