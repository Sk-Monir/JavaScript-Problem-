/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

for (a = 1; a <= 200; a++) {
    console.log(a);
    if (a >= 100) {
        break;
    }
    
}
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0;
for (i = 1; i <= 200; i++) {
    sum += i;
    if (sum >= 100) {
        break;
    }
    console.log(sum);

}

