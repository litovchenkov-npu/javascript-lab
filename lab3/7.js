function createTextChecker(textArray) {
    return function(element) {
        return textArray.includes(element);
    };
}

const checkText = createTextChecker(['a', 'b', 'c']);

console.log(checkText('a'));
console.log(checkText('x'));
console.log(checkText('c'));