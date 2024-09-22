// *** inch to feet converter
// way -1
function inchToFeet(inch) {
    const feet = inch / 12
    return feet;
}
const inches = 66;
const converter = inchToFeet(inches);
console.log(converter)

// way -2
function inchToFeet_2(inch2) {
    const feet = inch2 / 12;
    const int = parseInt(feet)
    const inch = inch2 % 12;
    const result = int +' feet '+ inch + ' inches ';
    return result;
}
const inches_2 = 67;
const converter_2 = inchToFeet_2(inches_2);
console.log(converter_2)

// *** Mile to Kilometer 
function mileToKilometer(num) {
    const kilo = num * 1.609344;
    return kilo;
} 

const mile = 60;
const converter_3 = mileToKilometer(mile);
console.log(converter_3)