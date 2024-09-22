
// *** Sum of All numbers of an array using  function
function sumOfNumbers(numbers) {
    let sum = 0;
    for (number of numbers) {
        sum += number;
    }
    return sum;
}
const numbers = [10, 20, 70, 50, 30, 15, 5];
const sum = sumOfNumbers(numbers);
console.log(sum);


// *** Return all the even numbers of an array using function
function allEvenNum(numbers) {
    let evenNums = [];
    for (number of numbers) {
        if (number % 2 == 0) {
            evenNums.push(number);
        }
    }
    return evenNums;
}
const someNums = [4, 8, 9, 7, 4, 10, 20, 33, 46, 12, 78, 51, 71, 91,];
const result = allEvenNum(someNums);
console.log(result)


// *** Sum of all even Number only using Function and used another function;
function sumAllEvenNums(numbers2) {
    let sum = 0;
    for (number2 of numbers2) {
        sum += number2;
    }
    return sum;
}
const total = sumAllEvenNums(result);
console.log(total);
