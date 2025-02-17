// Find the cheapest phone from an array of phone object
const mobiles = [
    { name: 'samsung', price: 40000, camera: '48mp', color: 'black' },
    { name: 'walton', price: 15000, camera: '15mp', color: 'green' },
    { name: 'Xiaomi ', price: 35000, camera: '48mp', color: 'blue' },
    { name: 'redmi', price: 30000, camera: '48mp', color: 'white' },
    { name: 'vivo ', price: 32000, camera: '48mp', color: 'red' },
    { name: 'iPhone', price: 150000, camera: '48mp', color: 'purple' },
]

function cheapestPhone(obj) {
    let cheapest = mobiles[0];
    for (const mobile of mobiles) {
        if (mobile.price < cheapest.price) {
            cheapest = mobile;
        }
    }
    return cheapest;
}
const price = cheapestPhone(mobiles);
console.log(price);