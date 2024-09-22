/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (a = 1; a <= 40; a++){
    if (a % 2 != 0) {
        continue;
    }
    console.log('continue to skip odd number :' , a);
}
/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (a = 55; a <= 85; a += 2){
    if (a % 5 == 0) {
        continue;
    }
    console.log('Skip the numbers divisible by 5', a);
}