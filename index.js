// 1. Contants
String.WHITESPACE = require('./whitespace');
String.PUNCTUATION = require('./punctuation');
String.HEX_DIGITS = require('./hex-digits');
String.OCT_DIGITS = require('./oct-digits');
String.DIGITS = require('./digits');
String.UPPERCASE = require('./uppercase');
String.LOWERCASE = require('./lowercase');
String.LETTERS = require('./letters');
String.PRINTABLE = require('./printable');

// 2. Datatype methods
String.is = require('./is');

// 3. About methods
String.asc = require('./asc');
String.chr = require('./chr');
String.keys = require('./keys');
String.values = require('./values');
String.entries = require('./entries');
String.left = require('./left');
String.mid = require('./mid');
String.right = require('./right');
String.ngrams = require('./ngrams');
String.symbolAt = require('./symbol-at');

// 4. Search methods
String.commonInfix = require('./common-infix');
String.commonPrefix = require('./common-prefix');
String.commonSuffix = require('./common-suffix');
String.uncommonInfix = require('./uncommon-infix');

// 5. Generate methods
String.of = require('./of');
String.from = require('./from');
String.space = require('./space');

// 6. Transform methods
String.toBaseline = require('./to-baseline');
String.toCamelCase = require('./to-camel-case');
String.toSnakeCase = require('./to-snake-case');
String.toSubscript = require('./to-subscript');
String.toSuperscript = require('./to-superscript');
String.toTitleCase = require('./to-title-case');
String.replacePrefix = require('./replace-prefix');
String.replaceSuffix = require('./replace-suffix');
String.mapReplace = require('./map-replace');
String.mapReplacePrefix = require('./map-replace-prefix');
String.mapReplaceSuffix = require('./map-replace-suffix');
String.objectReplace = require('./object-replace');
String.objectReplacePrefix = require('./object-replace-prefix');
String.objectReplaceSuffix = require('./object-replace-suffix');

// 7. Functional methods
String.every = require('./every');
String.filter = require('./filter');
String.find = require('./find');
String.findIndex = require('./find-index');
String.reduceRight = require('./reduce-right');

// 8. Evaluate methods
String.localeCompare = require('./locale-compare');
String.matchingNgrams = require('./matching-ngrams');
String.matchingNgramCount = require('./matching-ngram-count');
String.euclideanDistance = require('./euclidean-distance');
String.hammingDistance = require('./hamming-distance');
String.jaccardDistance = require('./jaccard-distance');
String.jaccardIndex = require('./jaccard-index');
String.jaroDistance = require('./jaro-distance');
String.jaroWinklerDistance = require('./jaro-winkler-distance');
String.levenshteinDistance = require('./levenshtein-distance');
String.damerauLevenshteinDistance = require('./damerau-levenshtein-distance');
String.sorensenDiceDistance = require('./sorensen-dice-distance');
String.sorensenDiceIndex = require('./sorensen-dice-index');
String.tverskyDistance = require('./tversky-distance');
String.tverskyIndex = require('./tversky-index');
module.exports = String;
