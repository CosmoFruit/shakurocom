export {};

// string - целевая строка поиска
// charArray - до 2 символов, наибольший индекс между которых нужно найти
function searchMaxIndex(string: string, ...charArray: string[]): any {
  if (string && !string.match(/^$/)) {
    if (charArray.length === 2) {
      const indexArrayOfChar = [];

      charArray.forEach(char => indexArrayOfChar.push(string.lastIndexOf(char)));

      return Math.max(...indexArrayOfChar);
    }

    if (charArray.length === 1) {
      return (char) => searchMaxIndex(string, charArray[0], ...char);
    }

    return (chars) => searchMaxIndex(string, ...chars);
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
