// Problem 9: Find the Factorial of a Number
function Factorial(n) {
    for(let i = n - 1; i > 0; i--) {
        n *= i;
    }
    return n;
}

let num = 5;
let fact = Factorial(num);
console.log(fact);