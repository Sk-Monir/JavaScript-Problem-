// Task-2 : Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input: The first line of the input is the marks of the five subjects mentioned above, respectively.
// Sample Input: 75.25, 65, 80, 35.45, 99.50;

// Output:Print the result in 2 decimal places.
// Sample Output: 71.04

var biology = 75.25;
var chemistry = 65;
var physics = 80;
var bangla = 35.45;
var mathematics = 99.50;
var totalMarks = (biology + chemistry + physics + bangla + mathematics);
var aboveMarks = (totalMarks / 5).toFixed(2);
console.log('Total marks all subject :- ' + totalMarks);
console.log('Average in all subject :- ' + aboveMarks);