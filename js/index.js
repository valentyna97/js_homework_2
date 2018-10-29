const n = parseFloat(prompt('enter number of Fibonacci'));

function fibonacciMethodOne(n) {
    let firstNumber = 1;
    let secondNumber = 1;
    if (n === 1 || n === 2) {
        alert(firstNumber);
    }
    else if (n > 2) {
        for (let i = 3; i <= n; i++) {
            const nextNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = nextNumber;
        }
    }
    return secondNumber;
}

function fibonacciMethodTwo(n) {
    let fibarray = [1, 1];
    for(let i = 2; i < n; i++) {
        fibarray.push( fibarray[i - 1] + fibarray[i - 2] );
    }
    return fibarray.pop();
}


function fibonacciMethodTree(n) {
    if (n ===0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fibonacciMethodTree(n - 1) + fibonacciMethodTree(n - 2);
    }
}

const fibMethodOne = fibonacciMethodOne(n);
alert('Сycle method ' + fibMethodOne);
const fibMethodTwo = fibonacciMethodTwo(n);
alert('Array method ' + fibMethodTwo);
const fibMethodTree = fibonacciMethodTree(n);
alert('Recursive method ' + fibMethodTree);
