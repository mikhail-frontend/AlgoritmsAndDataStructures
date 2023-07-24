

const nemo = ['nemo'];
const everyone = ['alex', 'mike', 'turkan', 'asur', 'vedat', 'etc'];
const large = new Array(1000000);
// linear time, O(n)
function findNemo(array) {
    let t0 = performance.now()
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('found nemo')
        }
    }
    let t1 = performance.now();

    console.log({
        'function findNemo takes(milliseconds)': t1 - t0
    })
}

function filterNemo(array) {
    let t0 = performance.now();
    array.filter(el => {
        if(el === 'nemo'){
            console.log('found nemo')
        }
    })
    let t1 = performance.now();

    console.log({
        'function filterNemo takes(milliseconds)': t1 - t0
    })
}
// filter is slower
filterNemo(large)
findNemo(large)