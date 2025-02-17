// js problems-part2 - practice - tasks
// Task - 1:
// Find the lowest number in the array below.
const heights = [167, 190, 120, 165, 137];
function lowestNum(numbers) {
    let lowest = numbers[0];
    for (const num of numbers) {
        if (num < lowest) {
            lowest = num;
        }
    }
    return lowest;
}
const result = lowestNum(heights);
console.log('lowest number : ',result);

// Task - 2:
// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(names) {
    let smallest = names[0];
    for (const name of names) {
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
}
const result2 = smallestName(heights2);
console.log('the smallest name : ', result2);

// Task - 3:
// Your task is to calculate the total budget required to buy electronics:
// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk
// Write a JavaScript function named (calculateElectronicsBudget() ) that takes in the number of (laptop, tablets, and mobile) and returns the (total money required).
function calculateElectronicsBudget(laptopQuantity,tabletsQuantity,mobileQuantity) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const totalLaptopPrice = laptop * laptopQuantity;
    const totalTabletPrice = tablet * tabletsQuantity;
    const totalMobilePrice = mobile * mobileQuantity;

    const totalMoneyRequired = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalMoneyRequired
}
const result3 = calculateElectronicsBudget(2, 4, 10);
console.log(result3)


// Task - 4:
// You are given an array of phone objects, each containing information about the model, brand, and price.Your task is to write a JavaScript function named (findAveragePhonePrice() ) that takes this array as input and returns the (average price of phone).
// Input:-
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(inputs) {
    let sum = 0;
    for (input of inputs) {
        sum += input.price;
    }
    const averagePriceOfPhone =(sum / phones.length);
    return `average price of phone : ${Math.round(averagePriceOfPhone)}`;
}

const result4 = findAveragePhonePrice(phones);
console.log(result4);