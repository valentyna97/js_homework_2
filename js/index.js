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
    let fibArr = [1, 1];
    for (let i = 0; i < n - 2; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2])
    }
    return fibArr.pop();
}


function fibonacciMethodTree(n) {
    if (n <= 1) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fibonacciMethodTree(n - 1) + fibonacciMethodTree(n - 2);
    }
}

const fibMethodOne = fibonacciMethodOne(n);
alert('Сycle method ' + fibMethodOne);
const fibMethodTwo = fibonacciMethodOne(n);
alert('Array method ' + fibMethodTwo);
const fibMethodTree = fibonacciMethodOne(n);
alert('Recursive method ' + fibMethodTree);
