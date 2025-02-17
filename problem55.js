// Problem 05:  Predict Avarage Waiting Time
//  Function Name Must be waitingTime()

// Israt is waiting for a job interview.His serial will actually call him.A screen on the wall shows a list of those interviewed and how many minutes each one took.Israt doesn't realize how much more time he will actually have. Your job is to create a function called waitingTime() to calculate how much more time Israt will need.
// The function will take 2 inputs. 1st is an array of numbers.Interview time for those who have completed the viva.The 2nd one is the serial number of Israt.The function will calculate an average of the time of those who have viva and return as output how much time it will take for Israt from the current serial.

// Input: The function will take 2 inputs,
// One is the Array(the time of those who have viva), the other is the serial number of Israt.
// Serial Number > length of array

// Output:
// Find out the rounded average of those who have viva.Find out how many are left before Israt.And with these two things find out the waiting time of Israt and return it.
// Example: array = [3, 5, 7, 11, 6], serialNumber = 10
// So here the average interview time of 5 people is 6 minutes(rounded).
// Israt's serial number 10 means that there are 10-1 = 9 people before him.
// Since there are 5 people, there are 4 people left before Israt and Vaiba.Now you tell me how long it will take Israt ?

// Challenge  : If the first input is not an Array and if the 2nd input is not a number then Invalid Input will return.

// SAMPLE INPUT                                                        SAMPLE OUTPUT
// [3, 5, 7, 11, 6], 10                                                24
// [13, 2], 6                                                          24
// [13, 2, 6, 7, 10], 6                                                0
// [6], 4                                                              12
// 7, 10                                                               Invalid Input
// "[6,2]", 9                                                          Invalid Input
// [7, 8, 3, 4, 5], "9"                                                Invalid Input
// [3, 5, 7, 11, 6, 10, 10, 5, 3], 10                                  0

function waitingTime(waitingTimes, serialNumber) {
    if (
        !Array.isArray(waitingTimes) ||
        typeof serialNumber !== 'number' ||
        serialNumber <= waitingTimes.length 
    ) {
        return 'Invalid Input'
    }

    let totalWaitingTimes = 0;
    for (const waitingTime of waitingTimes) {
        totalWaitingTimes += waitingTime;
    }

    const averageTime = Math.round(totalWaitingTimes / waitingTimes.length);

    const serial = serialNumber - 1 - waitingTimes.length;

    const isratWaitingTime = averageTime * serial;

    return isratWaitingTime;

}


const result = waitingTime([3, 5, 7, 11, 6, 10, 10, 5, 3], 10);
console.log(result);