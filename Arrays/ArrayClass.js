class ArrayClass {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return lastItem
    }

    delete(index) {
        const lastItem = this.data[index];
        this.shiftItems(index);
        return lastItem
    }

    shiftItems(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const testArray = new ArrayClass();
testArray.push(1);
testArray.push(2);
testArray.push(33);
testArray.push(22);
testArray.delete(2)
console.log(testArray)