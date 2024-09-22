// Calculate the total price from object

const products = [
    { name: 'potato', price: 60 },
    { name: 'pepper', price: 200 },
    { name: 'ladysFinger', price: 60 }
]

function calculatePrice() {
    let sum = 0;
    for (const product of products) {
        sum += product.price ;
    }
    return sum;
}
const totalPrice = calculatePrice(products);
console.log(totalPrice);