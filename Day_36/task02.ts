/*
* Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

* Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder.
* A number divisible by both 2 and 3 without a remainder is also divisible by 6.
*/


function divisible(num: number) {
    console.log((num % 2 === 0) && (num % 3 === 0)? `${num} is dividable` : `${num} is not dividable`);
}

divisible(68)
divisible(12)
divisible(20)
divisible(30)
