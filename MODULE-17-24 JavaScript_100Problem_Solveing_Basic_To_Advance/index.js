// //ternary operator
// const age = 17;
// age >= 18 ? console.log('vote dow') : console.log('Ghumai tako');


// let result = 10 < "5";
// console.log(result);


// // array
// // 1.Array declaration
// const num1 = [1, 2, 3, 4];
// console.log(Array.isArray(num1));
// // output: true

// // 2. Check How many element in array
// // const num1 = [1, 2, 3, 4];
// console.log(num1.length);
// // output: 4

// // 3.put index number get value
// // const num1 = [1, 2, 3, 4];
// console.log(num1[2]);
// // output: 3
// const num1 = [1, 2, 3, 4];
// var element = num1[3];
// console.log(element);
// // output: 4

// //4. set or update
// const num1 = [2, 4, 5, 8 ,10];
// num1[2] =6;
// console.log(num1);

// // 6.get index by array value
// const num1 = [2, 4, 5, 8, 10];
// const positionIndex = num1.indexOf(5);
// console.log(positionIndex);

// // output: 2

// // 7.add new value in array at last index  push()
// const num1 = [2, 4, 5, 8, 10];
//  num1.push(12);
// console.log(num1);
// // output: [ 2, 4, 5, 8, 10, 12 ]


// // 8.remove value to array at last index pop()
// const num1 = [2, 4, 5, 8, 10];
// num1.pop() ;
// console.log(num1);
// //output: [ 2, 4, 5, 8 ]


// // 9.add new value in array at first index  unshift()
// const num1 = [2, 4, 5, 8, 10];
// num1.unshift(0);
// console.log(num1);
// //output: [ 0, 2, 4, 5, 8 ]

// // 10.remove first index value to array shift()
// const num1 = [2, 4, 5, 8, 10];
// console.log(num1);
// num1.shift();
// console.log(num1);
// //output: [4, 5, 8, 10 ]
// // 11. check item is available in array
// console.log(num1.includes(5));
//output: true

// //11.Array to string Conversion
// const num1 = [2, 4, 5, 8, 10];
// const stringConversion = num1.join();
// console.log(stringConversion);
// console.log(Array.isArray(stringConversion));
// //output :2,4,5,8,10
// //output :false


// //  // 12.how to reverrse a array // // //

// // 1st way use reverse()
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// num.reverse();
// console.log(num);

// 2nd way use (for in) loop
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const reverse = [];
// for( const num of nums){
//     reverse.unshift(num);
// }
// console.log(reverse);


// // 3rd way use (for  loop
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const rev = [];
// for (i = 0; i < nums.length; i++){
//     const num = nums[i];
//     rev.unshift(num);
// }
// console.log(rev);

// // 4th way use (for  loop discriminate way
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const rev = [];
// for (let i = nums.length - 1; i >= 0; i--){
//     let num = nums[i];
//     rev.push(num);
// }
// console.log(rev);

// 13.sort() =
// const text = ['monir', 'kamal', 'jamal', 'rohan', 'kawakader', 'abul', 'dabul', 'cabul', 'mamun'];
// text.sort();
// console.log(text);
// *** assendung => smaller to learge 
// const num1 = [1, 5, 7, 8, 9, 6, 3, 4, 5, 2, 9];




// loop

// 1. for off
// const num1 = [2, 4, 5, 8, 10];
// for (const number of num1) {
//     console.log(number);
// }


// 2. What will be the output of the following code snippet ?

// for (let i = 0; i < 5; i += 3) {
//     console.log(i);
// }

// // 4. while loop

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }


// String
// string reverse

// //way number : 1
// const sentence = 'I am being a web Developer';

// let reverse = '';
// for (const letter of sentence){
//     reverse = letter +  reverse;
// }
// console.log(reverse);

//way number : 2
// const sentence = 'I am being a web Developer';

// let reverse2 ='';
// for (x = 0; x <= sentence.length; x++){
//     const letter = sentence[x];
//     reverse2 = letter + reverse2;
// }
// console.log(reverse2);

// //way number : 3
// const sentence = 'I am being a web Developer';
// const reverse = sentence.split('').reverse().join('');
// console.log(reverse)

// for in ( object )
// get all  key and value with for in loop - way 1.
// const mobile = { brand: "samsung", color: "white", price: 50000, cover: true };

// for (const details in mobile) {
//     // console.log(details)
//     console.log(details ,' : ',mobile[details]);
// }

// get all  key and value with for in loop - way 2.
// const mobile = { brand: "samsung", color: "white", price: 50000, cover: true };

// const prob = Object.keys(mobile)// now it's a  array
// for (const data of prob) {
//     console.log(data, ':', mobile[data]);
// }


// let str = "Mississippi";
// console.log(str.indexOf("i", 3));


//What is the output of the following code snippet ?

// const myObject = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// for (let prop in myObject) {
//     console.log(myObject[prop]);
// }

// const x = ""
// if (!x.length) {
//     console.log("Hey")
// } else {
//     console.log("Hi")
// }
// const str = "Hello";
// str[0] = "h";
// console.log(str);

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}   

