/*
* Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops,
* each with properties make, model, and year, use array destructuring to assign the first and second
* laptops to variables. Then, log these variables.

* Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects,
* simplifying access to complex data structures.
*/
const laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
const [laptopOne, laptopTwo] = laptops;
console.log(laptopOne);
console.log(laptopTwo);
export {};
