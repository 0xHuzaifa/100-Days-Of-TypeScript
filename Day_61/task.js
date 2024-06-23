// Arrow functions, the basics

// let func = (arg1, arg2,..... argN) => expression
let sum = function (a, b) {
    return a + b;
}
let sum1 = (a, b) => a + b;
sum(2, 2)
sum1(3, 3)
let double = n => n * 2;
double(4)
let hi = () => console.log('Hello');
let age = 19
let welcome = (age > 18) ?
    () => console.log('Greeting') :
    () => console.log('Hi')

// Multiline arrow functions
let sum2 = (a, b) => {
    let result = a + b
    return result
}
console.log(sum2(3,6));

// JavaScript specials
// Code structure
console.log('Hello'); console.log('Hello');
console.log('Hello');
console.log("Hello")

// Strict mode
// To fully enable all features of modern JavaScript, we should start scripts with "use strict".
'use strict';
// Variables
// Can be declared using:
// let
// const (constant, can’t be changed)
// var (old-style, will see later)
let x = 5;
x = 'jhon';
// there are 8 types of data type: int, bigint, string, float, undefined, null, object, boolean
// The typeof operator returns the type for a value, with two exceptions: 
// Interaction

/*
Interaction
We’re using a browser as a working environment, so basic UI functions will be:
prompt(question, [default])
Ask a question, and return either what the visitor entered or null if they clicked “cancel”.
confirm(question)
Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.
alert(message)
Output a message.
All these functions are modal, they pause the code execution and prevent the visitor from interacting with the page until they answer.
For instance:

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");
alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true
*/

