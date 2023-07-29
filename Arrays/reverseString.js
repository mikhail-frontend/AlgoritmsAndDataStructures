function reverseString(str) {
    if (typeof str !== 'string') return str;
    return [...str].reverse().join('')
}

function reverseString2(str) {
    if (typeof str !== 'string') return str;
    const length = str.length; //
    let resultArray = [];
    for (let i = length -1; i >= 0; i--) {
        resultArray.push(str[i])
    }
    return resultArray.join('')
}

function reverseString3(str) {
    if (typeof str !== 'string') return str;
    const length = str.length; //
    let reversedString = '';
    for (let i = length -1; i >= 0; i--) {
        reversedString+= str[i]
    }
    return reversedString;
}

reverseString3('1234');
reverseString3('1234 3');
reverseString2('1234');
reverseString2('1234 3');
reverseString('1234');
reverseString('1234 3');
