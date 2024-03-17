/*
* Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
* and a method describe() that logs a sentence about the laptop.

* Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's
properties. This introduces method definition within objects.
*/
let laptop = {
    make: "Hp",
    model: "i5",
    year: 2020,
    describe: function () {
        console.log(`${this.make}, ${this.model}, ${this.year}`);
    }
};
laptop.describe();
export {};
