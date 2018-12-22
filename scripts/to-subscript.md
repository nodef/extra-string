Convert string to [subscript characters], **limited support**.

Only following characters can be superscripted:
- `() + - 0123456789 =`
- `a e hijklmnop rstuv x `

```javascript
const toSubscript = require('@extra-string/to-subscript');
// toSubscript(<string>)

toSubscript('hello world');
// 'ₕₑₗₗₒ wₒᵣₗd'
toSubscript('DECCAN PLATEAU');
// 'DECCAN PLATEAU'
'KNO'+toSubscript('3');
// 'KNO₃' (Potassium Nitrate)
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[subscript characters]: https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts
