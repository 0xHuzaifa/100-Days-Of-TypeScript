/*
* Question 139: List three reserved words in JavaScript and create a valid use case for each.

* Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used 
* as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax 
* errors and make your code more readable.
*/

// 1. typeOf. valid use case
const value: number = 66;
if (typeof value === 'number') {
    console.log('Value is a number \n')
}


// 2. return. valid use case
function add(num1: number, num2: number) {
    return num1 + num2;
}

console.log(add(5, 5));


// 3. try-catch. valid use case
try {
    throw new Error("something went wrong");
    
} catch (error: any) {
    console.error('\nError catch', error.message);
}