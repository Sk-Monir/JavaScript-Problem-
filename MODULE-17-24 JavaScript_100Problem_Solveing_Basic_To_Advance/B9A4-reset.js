function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
        return 'Invalid Number'
    } else {
        tickPrice = 120;
        totalEarn = ticketSale * tickPrice;
        totalCost = 500 + (8 * 50);
        totalSavings = totalEarn - totalCost;
        return totalSavings;
    }
}

function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid'
    } else {
        const lastChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        const nameLastChar = name[name.length - 1].toLowerCase();
        if (lastChar.includes(nameLastChar)) {
            return 'Good Name';
        }
        else {
            return 'Bad Name';
        }
    }
}

function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return 'Invalid Array'
    }
    else {
        let newArray = [];
        for (const arrayItem of array) {
            if (typeof arrayItem === 'number' && isNaN(arrayItem) === false) {
                newArray.push(arrayItem);
            }
        }
        return newArray;
    }
}

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