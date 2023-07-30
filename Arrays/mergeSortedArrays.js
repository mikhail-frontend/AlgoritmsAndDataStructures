const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b)
// Временная сложность: O((m + n) log(m + n)), где m - длина arr1, n - длина arr2. Первая часть, [...arr1, ...arr2],
// займет O(m + n) времени для объединения массивов. Затем, метод sort() выполнит сортировку объединенного массива,
// что требует O((m + n) log(m + n)) времени.
//     Сложность по памяти: O(m + n), так как используется временный массив для объединения arr1 и arr2.
//     Читаемость: Хорошая. Код короткий и использует распространенные методы JavaScript для объединения и сортировки массивов.

function mergeSortedArrays2(arr1, arr2) {
    const mergedArray = [];
    let arr1Index = 0;
    let arr2Index = 0;

    while (arr1[arr1Index] || arr2[arr2Index]) {
        if (arr1[arr1Index] >= arr2[arr2Index] || typeof arr1[arr1Index] !== 'number') {
            mergedArray.push(arr2[arr2Index]);
            arr2Index++
        } else if (arr2[arr2Index] > arr1[arr1Index] || typeof arr2[arr2Index] !== 'number') {
            mergedArray.push(arr1[arr1Index]);
            arr1Index++
        }
    }
    return mergedArray;
}

mergeSortedArrays2([1, 3, 4], [2, 55, 77]);
mergeSortedArrays2([-1, 0, 1, 3, 4], [2, 3, 5, 99]);
mergeSortedArrays2([1, 3, 4], [2, 3, 5]);
