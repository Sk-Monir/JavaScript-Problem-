//*** Remove duplicate items form an array
const babuKoibarKaba = [2, 5, 2, 7, 9, 6, 3, 45, 4, 85, 5, 4, 5, 7, 2, 1, 5, 4, 8, 2, 5, 45, 64, 21, 45, 98,];
function babuEkBarPaba(array) {
    const ekBarNaw = [];
    for (const count of array) {
        if (ekBarNaw.includes(count) === false) {
            ekBarNaw.push(count);
        }
    }
    return ekBarNaw;
}
const babuEiBarPaba = babuEkBarPaba(babuKoibarKaba);
console.log(babuEiBarPaba);