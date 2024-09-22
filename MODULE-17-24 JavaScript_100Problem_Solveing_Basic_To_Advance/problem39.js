// use add and multiplication to calculate wood requirement
// chair = 3
// table = 10
//bed = 50 

function woodCalculate(chairQuantity, tableQuantity, bedQuantity) {
    const parChairWood = 3;
    const parTableWood = 10;
    const parBedWood = 50;

    const chareTotalWood = chairQuantity * parChairWood;
    const tableTotalWood = tableQuantity * parTableWood;
    const badTotalWood = bedQuantity * parBedWood;

    const result = chareTotalWood + tableTotalWood + badTotalWood;
    return result;
}

const totalWood = woodCalculate(2, 3, 2);
console.log(totalWood);

// use add and multiplication to calculate wood requirement
// shirt price  = 500;
// pant price = 700;
// shoe price = 1200; 

function clothPrice(shirtQuantity, pantQuantity, shoeQuantity) {
    const parShirtPrice = 700;
    const parPantPrice = 900;
    const parShoePrice = 1500;

    const shirtPriceTotal = parShirtPrice * shirtQuantity;
    const pantPriceTotal = parPantPrice * pantQuantity;
    const shoePriceTotal =  parShoePrice * shoeQuantity;

    const total = shirtPriceTotal + pantPriceTotal + shoePriceTotal;
    return total;
}

const totalPrice = clothPrice(10, 8, 5);
console.log(totalPrice);