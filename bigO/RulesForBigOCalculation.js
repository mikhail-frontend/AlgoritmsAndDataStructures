//TODO 1) Worst case

// Это означает, что мы анализируем время выполнения алгоритма в самом неблагоприятном сценарии,
// когда количество операций достигает максимума. Например, представьте функцию, которая ищет определенный элемент в массиве:

function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// В худшем случае этот алгоритм будет перебирать каждый элемент массива до его конца, чтобы найти целевой элемент.
// Если массив очень большой и целевой элемент находится в конце массива, то время выполнения будет максимальным.

//TODO 2) Remove constants

// Правило гласит, что мы можем игнорировать константы при анализе времени выполнения алгоритма.
// Например, рассмотрим следующую функцию:

function printArray(arr) {
    for (let i = 0; i < 10; i++) {
        console.log(arr[i]);
    }
}

// В этом случае у нас есть цикл, который выполняется всегда 10 раз, независимо от размера массива.
// Поэтому время выполнения этой функции можно считать O(10),
// но по правилу "Убрать константы" мы можем просто записать O(1).


//TODO 3) Different terms for inputs

// Разные термины для входных данных (Different terms for inputs):
// Если у нас есть алгоритм с несколькими входными параметрами,
// мы должны использовать разные термины для каждого из них при анализе времени выполнения. Например:

function nestedLoop(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr1[i] + arr2[j]);
        }
    }
}
// Здесь у нас есть два массива, и мы перебираем каждый элемент первого массива с каждым элементом второго массива.
// В этом случае время выполнения будет O(n * m), где n - длина первого массива, а m - длина второго массива.



//TODO 4) Drop non-dominants

// Убрать недоминирующие элементы (Drop non-dominants):
// Это правило гласит, что мы можем игнорировать менее важные члены при анализе времени выполнения алгоритма. Например:

function complexAlgorithm(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    for (let j = 0; j < n * n; j++) {
        console.log(j);
    }
}
// В этом примере у нас есть два цикла. Первый цикл выполняется n раз, а второй цикл выполняется n^2 раз.
// Когда n становится очень большим, n^2 будет намного больше, чем n.
// Поэтому мы можем игнорировать первый цикл и сказать, что время выполнения этой функции составляет O(n^2), игнорируя O(n).

