"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'a');
function wrapInArray(value) {
    return [value];
}
let numberArray = wrapInArray(1);
console.log(numberArray);
//# sourceMappingURL=generics.js.map