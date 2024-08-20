function add(n1: number, n2: number) {
    return n1 + n2;
} 

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}


printResult(add(5, 12));

// console.log(printResult(add(5, 12))); // If we use a return value of a function that doesn't return  anything it gives "undefined" value

let combineValues: (a: number, b: number) => number; //We are saying accept any function with two number parametres that returns a number

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
    return result
})