//******* Array - looping - tasks
// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// Otput:['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let color_rev = [];
for (let color of colors) {
    color_rev.unshift(color);
}
console.log(color_rev);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
// Output:[12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];
let even_num = [];
for (let number of numbers) {
    if (number % 2 == 0) {
        even_num.push(number);
    }
}
console.log(even_num);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// Output:'TomTimTinTik'
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatS = '';
for (let name of names) {
    concatS += name;
}
console.log(concatS)

// Task 4(Hard)
// Reverse the words of a sentence.Only the position of the word will be reversed.check out the output
// Input: const statement = 'I am a hard working person'
// Output:'person working hard a am I'
const statements = 'I am a hard working person'
const sentence_split = statements.split(' ');
let reversed = '';
for (let sentence of sentence_split) {
    reversed = sentence + ' ' + reversed ;
}
console.log(reversed)