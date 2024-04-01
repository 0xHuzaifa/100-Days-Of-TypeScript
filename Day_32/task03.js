/*
* Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

Explain & TIP: The .reduce() method applies a function against an accumulator and
* each element in the array (from left to right) to reduce it to a single value.
*/
const numbers = [1, 5, 10, 7, 20, 15, 3, 50];
const sum = numbers.reduce((num1, num2) => num1 + num2, 0);
console.log(sum);
export {};
