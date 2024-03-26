/*
* Question 74: Swapping Variables: Demonstrate how to swap the values of two variables.
* Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

* Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value
* while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.
*/
// Method 1
// let a: number = 5;
// let b: number = 10;
// let c: number;
// console.log('a value before swap', a);
// console.log('b value before swap', b);
// console.log('\n');
// c = a
// a = b
// b = c
// console.log('a value after swap', a);
// console.log('b value after swap', b);
// Method 2
let a = 5;
let b = 10;
console.log('a value before swap', a);
console.log('b value before swap', b);
console.log('\n');
a = a + b;
b = a - b;
a = a - b;
console.log('a value after swap', a);
console.log('b value after swap', b);
export {};
