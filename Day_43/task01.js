/*
* Question 127: Convert a traditional function expression to an arrow function.

* Explain & TIP: Arrow functions provide a concise syntax for writing function expressions.
* They don't have their own bindings to this or super, and should not be used as methods.
*/
function traditionalFunction(a, b) {
    return a + b;
}
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 5));
console.log(arrowFunction(6, 6));
export {};
