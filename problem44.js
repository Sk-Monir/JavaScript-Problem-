// Simple calculator to call function inside a function

function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}

function calculator(num1, num2, operator) {
    if (operator === 'add') {
        return add(num1, num2);
    }else if (operator === 'multiply') {
        return multiply(num1, num2);
    } if (operator === 'subtract') {
        return subtract(num1, num2);
    } if (operator === 'divide') {
        return divide(num1, num2);
    } else{
        return 'invalid number';
    }
}

const result = calculator(5, 10, 'subtract')
console.log(result);
