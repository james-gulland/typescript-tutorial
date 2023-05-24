"use strict";
let sales = 123456789;
let course = 'TypeScript';
let digit = 1234;
console.log(typeof (digit));
let numbers = [1, 2, 3];
let user = [1, 'James'];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(10000));
let employee = { id: 1, name: 'James' };
let newEmployee = {
    id: 1,
    name: 'James',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(23));
console.log(kgToLbs('23'));
//# sourceMappingURL=index.js.map