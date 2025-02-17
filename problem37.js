// ***** js - problems - part1 - practice - tasks
// Task - 1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(input) {
    const convert = (input * 9 / 5) + 32;
    return convert;
}
const celsius = 42;
const result = celsiusToFahrenheit(celsius);
console.log(result);


// Task - 2:
// You are given an array of numbers.Count how many times the a number is repeated in the array.
function totalRepeate(input, find) {
    let count = 0;
    for (const num of input) {
        if (num === find) {
            count++;
        }
    }
    return count;
}
//sample-input:-1
// find: 5
// output: 2
const numbers = [5, 6, 11, 12, 98, 5]
const result2 = totalRepeate(numbers, 5);
console.log('output: ', result2);
//sample-input:-2
// find: 25
// output: 0
const result3 = totalRepeate(numbers, 25);
console.log('output: ', result3);

// Task - 3:
// Write a function to count the number of vowels in a string.
function vowelInString(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const text of str) {
        if (vowels.includes(text)) {
            count++;
        }
    }
    return `vowels in string :  ${count++}`;
}
const texts = 'Reference site abut Lorem Ipsum, giving information on itso';
const result4 = vowelInString(texts);
console.log(result4);

// Task - 4:
// Write a function to find the longest word in a given string.
function longestWord(str) {
    const words = str.split(' ');
    let longWord = '';
    for (const word of words) {
        if (word.length > longWord.length) {
            longWord = word;
        }
    }
    return longWord;
}
// sample - input: 
const longText = 'I am learning Programming to become a programmer';
const result5 = longestWord(longText);
console.log(result5);
// sample -
// output: Programming


// Task - 5:
// Generate a random number between 10 to 20.
// Math.random() * (max - min) + min.
const result6 = Math.floor(Math.random() * (20 - 10) + 10);
console.log(result6)