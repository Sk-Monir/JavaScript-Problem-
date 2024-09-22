// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
// Input: The first line of the input is the taka you have.The second line is the cost of 1kg of oranges 400tk and 1kg of apples 300tk.
// Sample Input: Money :- 1000  cost :- 700
// Sample Output: 300 
var myMoney = 1000;
var oranges = 400;
var apples = 300;
var totalCost = oranges + apples;
var onCashReturn = myMoney - totalCost;

console.log('My Money : ' + myMoney);
console.log('My cost Total : ' + totalCost);
console.log('Money will return : ' + onCashReturn);