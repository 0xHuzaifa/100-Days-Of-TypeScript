/*
* Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
* Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division)
* on x using compound operators.

* Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment,
* making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.
*/
let x = 2;
console.log(`x initial value ${x}`);
x = x + 2;
console.log(`x + 2: ${x}`);
x -= 1;
console.log(`x -= 1: ${x}`);
x = +4; // it will not add 4 to x. it will assign 4 to x
console.log(`x =+ 4: ${x}`);
x *= 5;
console.log(`x *= 5: ${x}`);
x /= 2;
console.log(`x /= 2: ${x}`);
export {};
