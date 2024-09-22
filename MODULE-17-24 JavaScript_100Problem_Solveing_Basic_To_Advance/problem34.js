// **** Check whether a year is a leap year ?
// simple way 
function isLeapYear(isLiPi) {
    if (isLiPi % 4 === 0) {
        return true;
    } else {
        return false;
    }
}


const inputYear = 1924;
const checkYear = isLeapYear(inputYear);
console.log(checkYear);

// complex way 
function isLeapYear(isLiPi2) {
    if (isLiPi2 % 100 !== 0 && isLiPi2 % 4 === 0) {
        return true;
    } else if (isLiPi2 % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const inputYear2 = 300;
const checkYear2 = isLeapYear(inputYear2);
console.log(checkYear2);