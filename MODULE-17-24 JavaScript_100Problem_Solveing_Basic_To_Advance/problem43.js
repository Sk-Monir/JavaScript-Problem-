// discount price calculation

//first 100 => 100 taka;
//more than 101-200 => 90 taka;
//more than 200 => 70 taka;

function discountCalcu(quantitiy) {
    if (quantitiy <= 100) {
        const total = quantitiy * 100;
        return total;
    } else if (quantitiy <= 200) {
        const total = quantitiy * 90;
        return total;
    } else {
        const total = quantitiy * 70;
        return total;
    }

}

const product = discountCalcu(201);
console.log(product);

//Multi-layer discount price calculation

//first 100 => 100 taka;
//more than 101-200 => 90 taka;
//more than 200 => 70 taka;

function layerDiscountCalcu2(quantitiy2) {
    const first100price = 100;
    const second100price = 90;
    const avobe200price = 70;

    if (quantitiy2 <= 100) {
        const total = quantitiy2 * 100;
        return total;
    } else if (quantitiy2 <= 200) {
        const first100Total = first100price * 100;
        const remainingQuantity = quantitiy2 - 100;
        const remainingQuantityTotal = remainingQuantity * 90;
        const total = first100Total + remainingQuantityTotal;
        return total;
        
    } else {
        const first100Total = first100price * 100;
        const second100total = second100price * 100;
        const remainingQuantity = quantitiy2 - 200;
        const remainingQuantityTotal = remainingQuantity * 70;
        const total = first100Total + second100total + remainingQuantityTotal;
        return total;
    }

}

const product2 = layerDiscountCalcu2(201);
console.log(product2);