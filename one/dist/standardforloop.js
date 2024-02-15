"use strict";
for (let i = 0; i <= 2; i++) {
    console.log(i);
}
let people = { name: "vighnesh", age: 20, job: "senior developer" };
for (let key in people) {
    if (people.hasOwnProperty(key)) {
        console.log(key + ": " + people[key]);
    }
}
let no = [1, 4, 67, 2, 3];
for (let number of no) {
    console.log(number);
}
//# sourceMappingURL=standardforloop.js.map