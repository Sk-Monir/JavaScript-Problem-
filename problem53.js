// Problem-03: Checking Digits Inside a Name
// Function Name Must be checkDigitsInName()

// Raju has created a new website for passport registration.There are many people who are entering wrong numbers along with the name while inputting the name.Which Raju does not want at all.So Raju has to help you.You will write a function called checkDigitsInName() that will take a string input and check if the name contains any digits.
// Returns true if name contains any numbers.If there is no number, return false.If the input is not a string, Invalid Input will be returned.

// Input:
// Takes a string as input.

// Output:
// It will return a boolean value: true / false
// Returns true if name contains any numbers.If there is no number, return false.

// Challenge: If the input is anything other than a string, "Invalid Input" will be returned.

// 
// SAMPLE INPUT                                      SAMPLE OUTPUT
// Raj123                                            true
// n9ayeem                                           true
// e1mu3                                             true
// Suman                                             false
// Name2024                                          true
// !@#                                               false
// ["Raj"]                                           Invalid Input

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }
    for (let i = 0; i < name.length;i++) {
        let char = name.charAt(i)
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}
console.log(checkDigitsInName(["Raj"]));