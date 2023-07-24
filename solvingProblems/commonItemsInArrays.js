function  containsCommonItemsInArrays(arr1, arr2,) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

    for (let el of arr1) {
        if(arr2.includes(el)) {
            return true
        }
    }
    return false
}

// O(n*m) time complexity -> includes is O(n) !!!
// O(1) space complexity

containsCommonItemsInArrays([1, 2, 4], [2, 3, 5]);



function containsCommonItemsInArrays2(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    const hashObj = {};
    for (let elArr1 of arr1) {
        hashObj[elArr1] = true;
    }
    for (let elArr2 of arr2) {
        if(hashObj[elArr2]) return true;
    }
    return false
}

containsCommonItemsInArrays2([1, 2, 4], [2, 3, 5]);



// O(n+m) time complexity
// O(n) space complexity


const containsCommonItemsInArrays3 = (arr1, arr2) => arr1.some(item => arr2.includes(item));
// O(n*m) time complexity -> includes, some is O(n) !!!
//O(1) space complexity -> no variables are using
// but readability is the best
