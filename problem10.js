/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const ticket = 800;
const age = 10;
const student = true;
if (age < 10) {
    console.log('ticket free');
    
} else if (age >= 60) {
    console.log('Your 15% discount :' + ( ticket - ( ticket *  15 / 100)));
}
else if (student == true) {
    console.log('Your 50% discount :' + ticket * 50/100 );
} else {
    console.log('Regular ticket fare :' + ticket );
}