/*
* Question 59: Add a Special Number: Make a program that creates custom adders.
* These adders can add a specific number to any other number you give them later.

* Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it.
* This program makes that magic box for you!
*/
class customNumber {
    constructor(specificNumber) {
        this.specificNumber = specificNumber;
    }
    add(input) {
        return this.specificNumber + input;
    }
}
const magicBox = new customNumber(5); // Create a custom adder with a special number of 5
console.log(magicBox.add(5)); // Output: 10 (5 + 5)
console.log(magicBox.add(9)); // Output: 14 (9 + 5)
export {};
