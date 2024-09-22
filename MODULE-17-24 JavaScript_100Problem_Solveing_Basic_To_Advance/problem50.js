// Problem 05 : Monthly Savings of a Freelancer
// Function Name Must be monthlySavings()

// If payment  3000 tk or more than 3000 take need to give  Tax  20% to bank.
// Now after excluding the taxes from the total income and excluding the living cost, the remaining money is the savings.
// This function return total savings.
// If there is no money to savings.
// If the value of savings is less than 0 then the function will return a string that is “earn more” .

// Input:
// The function takes as input an Array(All payments) and a number(Living cost).

// Output:
// The function will return a number or string.
// ● If savings is 0 or more then 0 return a number(Total Savings)
// ● If savings is less than 0 then return String with value earn more

// Challenge: The function will then return a string 'invalid input'.
// ● If the first parameter is not an Array
// ● If the 2nd parameter is not a number

// SAMPLE INPUT                                                            SAMPLE OUTPUT
// [1000, 2000, 3000], 5400                                                0
// [1000, 2000, 2500], 5000                                                500
// [900, 2700, 3400], 10000                                                earn more -(string)
// 100, [900, 2700, 3400]                                                  invalid input

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    } else {
        let totalEarn = 0;
        let totalTax = 0
        for (const payment of arr) {
            totalEarn += payment;
            if (payment >= 3000) {
                totalTax += (payment * 0.2); 
            }
        } 
        const totalSavings = totalEarn - totalTax - livingCost;
        if (totalSavings < 0) {
            return 'earn more'
        }
        else {
            return totalSavings;
        }
    }
}


const result = monthlySavings([4000, 3600, 3400], 5000);
console.log(result);