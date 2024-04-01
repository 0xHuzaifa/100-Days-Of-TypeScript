/*
* Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

* Explain & TIP: The .filter() method creates a new array with all elements
* that pass the test implemented by the provided function.
*/
function numberGreaterThanTen(numberArray) {
    return numberArray.filter((num) => num >= 10);
}
const numbers = [1, 5, 10, 7, 20, 15, 3, 50];
console.log(numberGreaterThanTen(numbers));
export {};
