Convert string to [title case].

```javascript
const toTitleCase = require('@extra-string/to-title-case');
// toTitleCase(<string>, [separator=/\W+/g])

toTitleCase('Geminid meteor shower')
// 'Geminid Meteor Shower'
toTitleCase('geminid-meteor-shower');
// 'Geminid Meteor Shower'
toTitleCase('geminid_meteor_shower', '_');
// 'Geminid Meteor Shower'
```


[![extra-string](https://i.imgur.com/y4YVIau.jpg)](https://www.npmjs.com/package/extra-string)

[title case]: https://en.wikipedia.org/wiki/Letter_case#Case_styles
