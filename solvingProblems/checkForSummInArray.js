function checkForSumInArray(array, sum) {
    // написать функцию, которая принимает массив и число.
    // И проверяет есть ли в массиве 2 элемента, которые дают сумму
    const set = new Set();
    for (let item of array) {
        if (set.has(item)) return true;
        set.add(sum - item)
    }
    return false
}

console.log(checkForSumInArray([6, 4, 3, 2, 1, 7], 9))
console.log(checkForSumInArray([6, 4, 3, 2, 1, 7], 1239))