// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output


const touristDestinations = ['banderbon', 'coxBazar', 'sahajek'];
console.log(touristDestinations);
touristDestinations.push('foiesleg');
console.log('Add a new tourist destination : ' + touristDestinations);
touristDestinations.splice(4, 0, 'rangamati', 'alotile');
console.log('Add two more tourist destination : ' + touristDestinations);
touristDestinations.pop();
console.log(touristDestinations);