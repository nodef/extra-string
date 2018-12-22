Get [Sørensen-Dice distance] between strings.

```javascript
const sorensenDiceDistance = require('@extra-string/sorensen-dice-distance');
// sorensenDiceDistance(<string-1>, <string-2>, [ngram=2])

sorensenDiceDistance('pocket', 'pocket');
// 0
sorensenDiceDistance('monster', 'rocket');
// 1
sorensenDiceDistance('pikachu', 'raichu', 3);
// 0.7777777777777778
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[Sørensen-Dice distance]: https://en.wikipedia.org/wiki/Sørensen–Dice_coefficient
