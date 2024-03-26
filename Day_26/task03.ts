/*
* Question 78: Function Expressions vs. Function Declarations: Compare function expressions and 
* declarations by creating one of each that performs the same task, such as squaring a number.

* Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name 
* the function and can be called before they're defined, and expressions that are stored in variables 
* and are called using the variable name.
*/

// Function declaration
function squaring(num: number): number {
    let result = num**2;
    return result
}
console.log(squaring(3));


// Function Expression
const squaring2 = function(num: number): number {
    let result = num**2;
    return result
}
console.log(squaring2(3));

