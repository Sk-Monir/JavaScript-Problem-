// Problem 04 : Calculate Admission Final Score
// Function Name Must be calculateFinalScore()

// Rakib is working as a programmer in a software company.His younger brother, Rajiv, has given the entrance exam to a famous university.The result of the admission test will be determined based on various criteria.Rajib's test scores, school grades, and parent's profession(if "farmer") must be combined to calculate his final score.Since you are Rakib's colleague and a good programmer, Rakib wants you to create a function calculateFinalScore() that returns Rajib's various data.It will take the final score as input.If the final score is 80 or above, he / she can get admission.Otherwise, he cannot get admission.

// Scoring Criteria
// 1.testScore: 50 points max
// 2. schoolGrade: 30 points maximum
// 3.Parent Profession: If "farmer", 20 points

// Input: will take an object as input.The object must have name, testScore, schoolGrade, isFFamily properties.where
// typeof name = string
// typeof testScore= number(testScore <= 50)
// typeof schoolGrade = number(schoolGrade <= 30)
// typeof isFFamily = boolean

// Output:
// It will return a boolean value: true / false

// Challenge : If the input is not an object, it will give an error message "Invalid Input".

// SAMPLE INPUT                                                                    SAMPLE OUTPUT
// { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily : true }             true
// { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily : false }            false
// "hello"                                                                         Invalid Input
// { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily : true }             false
// { name: "Rajib", testScore: 50, schoolGrade: 30, isFFamily: false }             true
// { name: "Rajib", testScore: 35, schoolGrade: 25, isFFamily: true }              true
// { name: "Rajib", testScore: 55, schoolGrade: 30, isFFamily: false }             Invalid Input
// { name: "Rajib", testScore: 45, schoolGrade: 35, isFFamily: false }             Invalid Input
// { name: "Rajib", testScore: -75, schoolGrade: 30, isFFamily: false }            Invalid Input
// { name: "Rajib", testScore: 45, schoolGrade: -25, isFFamily: false }            Invalid Input

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' ||
        typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' ||
        typeof obj.schoolGrade !== 'number' ||
        typeof obj.isFFamily !== 'boolean' ||
        obj.testScore < 0 || obj.testScore > 50 ||
        obj.schoolGrade < 0 || obj.schoolGrade > 30
    ) {
        return 'Invalid Input';
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily === true) {
        finalScore += 20;
    }

    if (finalScore >= 80) {
        return true;
    }
    return false;
}


const result = calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true });
console.log(result);
