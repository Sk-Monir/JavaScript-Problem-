// Task - 1:
// Count how many times a string has the letter a
const countA = 'asdfklsjhfasakjfwejfafajsjfaasasajafsfaaksdflqaaasas';
let sum = 0;
for (const count of countA) {
    if (count == 'a') {
        sum++;
    }
}
console.log(sum);

// Task - 2:
// Count how many times a string has the letter a or A
const countAa = 'asdfAklsjAhAAfasAakjfwejfafajsjfAaasasAajafsAfaaksdfAlqaaaAsasA';
let count = 0;
for (let i = 0; i < countAa.length; i++) {
    if (countAa[i].toLowerCase() === 'a') {
        count++;
    }
}

console.log(count);

// Task - 3:
// Check whether a string contains all the vowels a, e, i, o, u
const stRing = 'In publishing and graphic design, Lorem ipsum is a';
const lowerString = stRing.toLowerCase();
const vowels = ['a', 'e', 'o', 'i', 'u'];
let containsAll = true;
for (let i = 0; i < vowels.length; i++) {
    if (!lowerString.includes(vowels[i])) {
        containsAll = false;
        break;
    }
}
console.log('String contains all the vowels : ', containsAll)


// Task - 4:
// If a given string has either x, replace x by y.if the given string has X, replace it by Y.
const stRing2 = 'Ixn publixshing aynd graphyic dxesigyn, Loxyrem ipsuxym is ax';
let replaceString = stRing2.replaceAll('x', 'X').replaceAll('y', 'Y');
console.log(replaceString);



// Task - 5:
// Capitalize Every first Letter of each word in a String
const stRing3 = 'Ixn publixshing aynd graphyic dxesigyn, Loxyrem ipsuxym is ax';
const brEak = stRing3.split(' ');
let capitaz = "";
// const capitalize = brEak.toUpperCase();
for (const capitalize of brEak) {
     capitaz += capitalize[0].toUpperCase() + capitalize.slice(1)+ " ";
}
console.log(capitaz);
