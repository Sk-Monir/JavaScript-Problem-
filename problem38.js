// Who is the tallest ?
// Find the max number in array
const numbers = [10, 60, 70, 64, 85, 40, 50, 96, 85, 47, 24, 69];
function findMax(array) {
    let max = array[0];
    for (const tall of array) {
        if (tall > max) {
            max = tall
        }
    }
    return max;
}
const tallest = findMax(numbers);
console.log('tallest value in array : ',tallest);


// // Find the max number in array
const numbers2 = [60, 70, 64, 85, 40, 50, 96, 85, 47, 69];
function findMin(array2) {
    let min = numbers2[0];
    for (const small of array2) {
        if (small < min) {
            min = small
        }
    }
    return min;
}
const smallest = findMin(numbers2);
console.log('Smallest value in array : ',smallest);