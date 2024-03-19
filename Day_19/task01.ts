/*
* Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list 
* where each number is twice its original value.

* Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.
*/

const numbers: number[] = [2, 4, 6, 7, 9];
const doubleNumbers = numbers.map(number => number * 2);

console.log(numbers);
console.log(doubleNumbers);
