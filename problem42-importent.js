// Calculate the total cost of the products in a shopping card  from object

const products = [
    { name: 'potato', price: 60, quantity: 5 },
    { name: 'pepper', price: 200, quantity: 1 },
    { name: 'ladysFinger', price: 80, quantity: 1 }
]

function calculatePrice() {
    let sum = 0;
    for (const product of products) {
        const totalItemCost = product.price * product.quantity
        sum = totalItemCost + sum;
    }
    return sum;
}
const totalPrice = calculatePrice(products);
console.log(totalPrice);