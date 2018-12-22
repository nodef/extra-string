Convert string to [baseline characters], **limited support**.

Only the following characters can be baselined:
- `⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₔᵝᵞᵟᶿᶥᵠᵡᵦᵧᵨᵩᵪ`
- `ᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂᶦᶫᶰᶸᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ`

```javascript
const toBaseLine = require('@extra-string/to-baseline');
// toBaseLine(<string>, [superseparator], [subseparator])

toBaseLine('ax²+bx+c');
// 'ax2+bx+c'
toBaseLine('H₂SO₄ beaker');
// 'H2SO4 beaker'
toBaseLine('6.626 x 10⁻³⁴', ['^']);
// '6.626 x 10^-34'
toBaseLine('1010₂', null, [' (base-', ')']);
// '1010 (base-2)'
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[baseline characters]: https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts
