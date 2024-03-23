/*
* Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers
* and returns their product. Round the result to two decimal places.

* Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long.
* Rounding can help keep numbers manageable.
*/
function add(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(add(5.5249, 9.268932));
console.log(add(0.1, 0.2));
export {};
