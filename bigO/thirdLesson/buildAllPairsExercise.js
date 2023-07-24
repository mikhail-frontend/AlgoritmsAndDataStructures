

const boxes = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h', 'i'];
function logAllPairsOfArray(array) {
    const t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // console.log(array[i], array[j])
        }
    }
    const t1 = performance.now();
    console.log(t1 - t0, 'teacher')
}

logAllPairsOfArray(new Array(1000).fill(0))

function buildAllPairs(array, index = 0) {
    const t0 = performance.now();
    if (!Array.isArray(array)) return [];
    let result = []
    for (let i = index; i < array.length; i++) {
        const element = array[i];
        const previousElements = array.slice(0, i);
        const nextElements = array.slice(i + 1);
        for (let j = 0; j < previousElements.length; j++) {
            result.push(`${element}${previousElements[j]}`)
        }
        for (let k = 0; k < nextElements.length; k++) {
            result.push(`${element}${nextElements[k]}`)
        }
    }
    const t1 = performance.now();
    console.log(t1 - t0, 'Misha')
    return result;
}

function keepOnlyUniqueElements(array) {
    if (!Array.isArray(array)) return [];
    return array.reduce((acc, curr) => {
        if(!acc.includes(curr))  acc.push(curr);
        return acc
    }, [])
}


console.log({
    AllPairs:  buildAllPairs(new Array(1000).fill(0)),
    onlyUnique: keepOnlyUniqueElements(buildAllPairs(new Array(1000).fill(0)))
})

