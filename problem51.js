// Problem-01 : Tax Calculator
// Function Name Must be calculateTax()

// Your function will take two inputs:
// Monthly Income - A positive number representing Aaron's monthly income.
// Monthly Cost - A positive number that represents Aaron's monthly cost.
// The function will calculate 20 % of the difference between income and expenses and return it as tax.

// Input:
// First input: A positive number which is the monthly income. (0 <= income)
// Second input: A positive number which is the monthly cost. (0 <= expense)
// Income will always equal or exceed expenses. (income >= expense)

// Output: The function will return the calculated tax.Output can also be decimal number.

// Challenge : If any input is not a positive number, or if the amount of expense is greater than income, then the string "Invalid Input" will be returned.

// Hints 💡: If income is 10000 taka and expense is 3000 taka, the difference between his income and expenses will be
// 10000 - 3000 = Rs.7000.So his tax will be(7000 * .20) = 1400 taka.

// SAMPLE INPUT                                                              SAMPLE OUTPUT
// 10000, 3000                                                               1400
// 34000, 1753                                                               6449.400000000001
// 5000, 1500                                                                700
// 7000, 7000                                                                0
// -5000, 2000                                                               Invalid Input
// 6000, -1500                                                               Invalid Input

function calculateTax(income, expenses) {
    if (typeof income !== 'number' ||
        typeof expenses !== 'number' ||
        income < 0 || expenses < 0 ||
        expenses  > income ) {
        return 'Invalid Input'
    }
    const totalSavings = income - expenses;
    const totalTax = totalSavings * 0.2;
    return totalTax;
 }


const result = calculateTax(6000, 5000)
console.log(result);