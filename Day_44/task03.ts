/*
* Question 132: Discuss the difference between default and named exports in JavaScript modules.

* Explain & TIP: JavaScript provides two main types of exports: default and named. 
* A module can have only one default export, but multiple named exports. 
* This flexibility supports various use cases in module design.
*/

// Importing named exports
import { add, subtract } from './task3.3.js';
console.log(add(5, 3)); 
console.log(subtract(10, 4)); 

// Importing the default export
import MyPerson from './task3.3.3.js';
const person = new MyPerson('Huzaifa', 30);

person.greet()
