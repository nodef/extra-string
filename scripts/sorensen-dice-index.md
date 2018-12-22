Get [Sørensen-Dice index] between strings.

```javascript
const sorensenDiceIndex = require('@extra-string/sorensen-dice-index');
// sorensenDiceIndex(<string-1>, <string-2>, [ngram=2])

sorensenDiceIndex('pocket', 'pocket');
// 1
sorensenDiceIndex('monster', 'rocket');
// 0
sorensenDiceIndex('pikachu', 'raichu', 3);
// 0.2222222222222222
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Sørensen-Dice index]: https://en.wikipedia.org/wiki/Sørensen–Dice_coefficient
