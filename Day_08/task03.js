"use strict";
/*
* Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

* Explain & TIP: Experiment with different types of conditions to see how they work.
* This builds a deeper understanding of logic in programming.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
// @ts-ignore
console.log("apple" == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
