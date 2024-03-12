"use strict";
/*
* Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

* Explain & TIP: Use age to check the life stage.
* This practice shows how to handle multiple conditions with an if-else chain.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
