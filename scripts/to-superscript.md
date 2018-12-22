Convert string to [superscript characters], **limited support**.

Only following characters can be superscripted:
- `() + - 0123456789 =`
- `AB DE GHIJKLMNOP R TU W `
- `abcdefghijklmnop rstuvwxyz`

```javascript
const toSuperscript = require('@extra-string/to-superscript');
// toSuperscript(<string>)

toSuperscript('hello world');
// 'ʰᵉˡˡᵒ ʷᵒʳˡᵈ'
toSuperscript('DECCAN PLATEAU');
// 'ᴰᴱCCᴬᴺ ᴾᴸᴬᵀᴱᴬᵁ'
'6.626 x 10'+toSuperscript('-34');
// '6.626 x 10⁻³⁴' (Planck's constant)
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[superscript characters]: https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts
