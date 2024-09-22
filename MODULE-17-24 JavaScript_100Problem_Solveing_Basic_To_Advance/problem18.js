
/*
Display sum of all the odd numbers from 81 to 131 use in while loop .
*/
console.log('Display sum of all the odd numbers from 81 to 131 use in while loop .');
let a = 81;
let sum = 0;
while (a <= 131) {
    if (a % 2 == 1) {
        sum += a;
        console.log('sum of all the odd numbers from 81 to 131 : ', sum);
    }
    a++;
}


console.log('Display sum of all the even numbers from 206 to 311 .');

/*
Display sum of all the even numbers from 206 to 311 use in while loop .
 */
let i = 206;
let sum2 = 0;
while (i <= 311) {
    if (i % 2 == 0) {
        sum += i;
        console.log('sum of all the even numbers from 206 to 311 :', sum)
    }
    i++;
}
