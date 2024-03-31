/*
* Question 89: Converting Strings to Numbers: Create a function that takes a string
* representing a number (like "123") and converts it into an actual number type.

* Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning
* number-like strings into real numbers, allowing you to perform mathematical operations on them.
*/
function convertToNumber(str) {
    // return parseInt(str);
    return parseFloat(str);
}
console.log(convertToNumber('13456'));
console.log(convertToNumber('335.13456'));
export {};
