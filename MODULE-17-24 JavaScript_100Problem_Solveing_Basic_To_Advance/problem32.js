// ********* Simple function Related Practice Tasks

// Task - 1
// Take four parameters.Multiply the four numbers and then return the result
function multiplayNum(a, b, c, d) {
    result = a * b * c * d;
    return result;
}
const sum = multiplayNum(8,9,6,1);
console.log(sum);


// Task - 2
// Take a number if the number is odd multiply it by 2 and return the result.If the number is even divide it by two and return the result.
function checkNumbers(num) {
    if (num % 2 === 1) {
        num = num * 2;
        return num;
    } else {
        num = num / 2;
        return num;
    }
}
const whatResult = checkNumbers(11);
console.log(whatResult);


// Task - 3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(numbersOfArray) {
    let sum = 0;
    for (number of numbersOfArray) {
        sum += number ;
    }
    return sum;
}
const someNumbers = [5, 8, 9, 10, 47, 65, 34, 16, 95, 72, 64, 95];
const averageOfArray = make_avg(someNumbers);
console.log(averageOfArray);


// Task - 4
// Write a function called count_zero() which will take a binary string(Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(string) {
    let count = 0;
    for (binaryString of string) {
        if (binaryString == 0) {
            count++;
         }
    }
    return count;
}
const binaryStrings = '0111000100';
const result4 = count_zero(binaryStrings);
console.log(result4);


// Task - 5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd.If even return Even.If odd return Odd
function odd_even(integer) {
    if (integer % 2 === 0) {
        return 'Even ';
    } else {
        return 'Odd'
}
}
const intValue = 8;
const result5 = odd_even(intValue);
console.log(result5);