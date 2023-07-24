// What is the Big O of the below function? (Hint, you may want to go line by line)

function anotherFunction() {
    console.log('function anotherFunction()')
}
function funChallenge(input) {
    let a = 10;
    a = 50 + 3;

    for (let i = 0; i < input.length; i++) {
        anotherFunction();
        let stranger = true;
        a++;
    }
    return a;
}

// My Solution with constants (writing calculations)
// O(1)+O(1)+O(1 + 1 + n) + O(1)
// result = O(n+2) + O(3)
