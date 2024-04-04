/*
* Question 102: Calculate and log the absolute difference between the number -5 and 5.

* Explain & TIP: The Math.abs() function returns the absolute value of a number, 
* which is useful for finding the magnitude of a difference without regard to direction.
*/

function difference(num1: number, num2: number): number {
    return Math.abs(num1 - num2)
}

console.log(difference(-5, 5));
console.log(difference(-2, 9));
console.log(difference(-23, 15));
