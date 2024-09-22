// /* 
// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
// */

for (a = 1; a <= 100; a++){
    if (Math.sqrt(a) % 1 === 0) {
        console.log(a)
        break;
    }
  
}

for(let i = 1; i <= 100; i++) {
    // Calculate the square root of the current number
    let sqrt = Math.sqrt(i);

    // Check if the square root is an integer
    if (Number.isInteger(sqrt)) {
        console.log('The first square number is:', i);
        break; // Stop the loop when the first square number is found
    }
}