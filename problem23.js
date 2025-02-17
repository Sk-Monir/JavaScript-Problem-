/*
Display sum of all the odd numbers from 91 to 129 use for loop.

 */
console.log('Sum of all the odd numbers from 91 to 129');
sum = 0;
for (i = 91; i <= 129; i++){
    if (i % 2 == 1) {
        sum += i;
        console.log('odd number :' , i );
        console.log('sum of all the odd numbers from 91 to 129 :' ,sum);
    }
}

/*
Display sum of all the even numbers from 51 to 85 use for loop .
 */
console.log('Sum of all the even numbers from 51 to 85');

sum = 0;
for (i = 51; i <= 129; i++) {
    if (i % 2 == 0) {
        sum += i;
        console.log('Even number :', i);
        console.log('sum of all the Even numbers from 51 to 129 :', sum);
    }
}