"use strict";
exports.__esModule = true;
// string - целевая строка поиска
// charArray - до 2 символов, наибольший индекс между которых нужно найти
function searchMaxIndex(string) {
    var charArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        charArray[_i - 1] = arguments[_i];
    }
    if (string && !string.match(/^$/)) {
        if (charArray.length === 2) {
            var indexArrayOfChar_1 = [];
            charArray.forEach(function (char) { return indexArrayOfChar_1.push(string.lastIndexOf(char)); });
            return Math.max.apply(Math, indexArrayOfChar_1);
        }
        if (charArray.length === 1) {
            return function (char) { return searchMaxIndex.apply(void 0, [string, charArray[0]].concat(char)); };
        }
        return function (chars) { return searchMaxIndex.apply(void 0, [string].concat(chars)); };
    }
    return -1;
}
console.log('Expect -1: ', searchMaxIndex(undefined, undefined));
console.log('Expect -1: ', searchMaxIndex(null, null));
console.log('Expect -1: ', searchMaxIndex('', undefined));
console.log('Expect -1: ', searchMaxIndex('', null));
console.log('Expect -1: ', searchMaxIndex('', ''));
console.log('Expect 7: ', searchMaxIndex('abcdabccc', 'a', 'cc'));
console.log('Expect fn: ', searchMaxIndex('abcd', ''));
console.log('Expect fn: ', searchMaxIndex('abcdabccc'));
console.log('Expect fn: ', searchMaxIndex('abcdabccc')('a'));
console.log('Expect 8: ', searchMaxIndex('abcdabccc')('a')('c'));
