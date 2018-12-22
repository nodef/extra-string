Reduce characters to a string from right, like `Array.reduceRight()`.

```javascript
const reduceRight = require('@extra-string/reduce-right');
// reduceRight(<string>, <reduceFn>, [initialValue])

reduceRight('abc', (acc, v) => acc+v);
// 'cba'
reduceRight('123', (acc, v) => acc+v, '-');
// '-321'
reduceRight('a', (acc, v) => acc+v);
// 'a'
reduceRight('', (acc, v) => acc+v);
// undefined
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)
