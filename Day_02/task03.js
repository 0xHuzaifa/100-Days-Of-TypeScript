"use strict";
/*
* Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in
* lowercase, uppercase, and titlecase.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "huzaifa AHMED";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.toLocaleLowerCase().replace(/(^|\s)\S/g, word => word.toUpperCase()));
