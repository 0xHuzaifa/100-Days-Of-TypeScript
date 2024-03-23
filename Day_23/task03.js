/*
* Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers
* and returns both the quotient and the remainder. Use an object to return both values.

* Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder).
* Returning both in an object is a neat way to keep them together.
*/
function divide(num1, num2) {
    const quotient = Math.floor(num1 / num2);
    const remainder = num1 % num2;
    return { quotient, remainder };
}
console.log(divide(5, 9));
console.log(divide(9, 3));
export {};
