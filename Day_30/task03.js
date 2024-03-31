/*
* Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is
* NaN (Not a Number) and return a boolean result.

* Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't
* turn out to be a number. It's useful for validating inputs or results of calculations.
*/
function checkNaN(param) {
    return isNaN(param);
}
console.log(checkNaN('Hello World'));
console.log(checkNaN(12345));
console.log(checkNaN(12.388));
console.log(checkNaN(true));
export {};
