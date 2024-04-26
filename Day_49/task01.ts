/*
* Question 145: Create a function that accepts a callback and invokes it with some arguments.

* Explain & TIP: Callbacks are functions passed as arguments to another function. 
* This design pattern is very common in JavaScript for asynchronous operations, event listeners, 
* or to customize the behavior of a function with custom actions.
*/

type Callbacks = (arg1: number, arg2: number) => void;

function callbackFunction(callback: Callbacks, num1: number, num2: number) {
    callback(num1, num2);
}

function add(num1: number, num2: number) {
    console.log(num1 + num2);
}


callbackFunction(add, 5, 4);
