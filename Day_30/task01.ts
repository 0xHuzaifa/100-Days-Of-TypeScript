/*
* Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input 
* and returns the number rounded to the nearest integer.

* Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. 
* It looks at the decimal part and decides whether to round up or down.
*/

function round(param: number): number {
    return Math.round(param);
}

console.log(round(2.678));
console.log(round(0.678));
console.log(round(3.2357));
