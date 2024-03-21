/*
* Question 59: Add a Special Number: Make a program that creates custom adders. 
* These adders can add a specific number to any other number you give them later.

* Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. 
* This program makes that magic box for you!
*/

// Method 1

class customNumber {
    private readonly specificNumber;

    constructor(specificNumber: number) {
        this.specificNumber = specificNumber;
    }

    add(input: number) {
        return this.specificNumber + input;    
    }
}

const magicBox = new customNumber(5); // Create a custom adder with a special number of 5
console.log(magicBox.add(5)); 
console.log(magicBox.add(9)); 


// Method 2

function makeAddr(valueToAdd: number): (add: number) => number {
    return function(add: number): number {
        return add + valueToAdd;
    }
}

const addFive = makeAddr(5);
console.log(addFive(5));
console.log(addFive(9));
