// *** calculate the average of the odd number in an array
// *** Function take an array as parameter
// *** Give me the average of the odd numbers in the array
function averageOddArray(numbers) {
    //get odd numbers array  first 
    const counts = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            counts.push(number);
        }
    }
    // get the sum of odd numbers array
    let sum = 0;
    for (const count of counts) {
        sum += count;
    }
    // get the average 
    const arrayLength = counts.length;
    const total = (sum / arrayLength).toFixed(2);
    return total;
}
const oldArray = [2, 5, 7, 99, 89, 31, 33, 32, 41, 45, 56, 57, 51, 37, 11];
const average = averageOddArray(oldArray);
console.log(average);