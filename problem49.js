// Problem 04 : Make A Great Password
// Function Name Must be password()

// Input:
// This function take input as object. This object can have 3 property only. As like this object
// const info = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
// object property name as like same to same ।

// Password - Structure :
// Website Name(First character is capitalized )     # user name  @birthYear

// Output:
// This function return a String value output similar to the above the structure.
// example :- Google#kolimuddin@1999

// Challenge :if any property missing or birthYear will not 4 . this function return
// a string value  'invalid'

// SAMPLE INPUT                                                                 SAMPLE OUTPUT(string)
// { name: "kolimuddin", birthYear: 1999, siteName: "google" }                  Google#kolimuddin@1999
// { name: "rahat", birthYear: 2002, siteName: "Facebook" }                     Facebook#rahat@2002
// { name: "toky", birthYear: 200, siteName: "Facebook" }                       invalid
// { name: "maisha", birthYear: 2002 }                                          invalid

function password(obj) {
    if (typeof obj !== 'object' ||
        Object.keys(obj).length !== 3 ||
        typeof obj.birthYear !== 'number' ||
        obj.birthYear.toString().length !== 4) {
        
        return 'invalid ';
    }
    else {
        const capitalize = (obj.siteName).charAt(0).toUpperCase() + (obj.siteName).slice(1);
        return `${capitalize}#${obj.name}@${obj.birthYear}`;
    }
}


const info = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
const result = password(info);
console.log(result);