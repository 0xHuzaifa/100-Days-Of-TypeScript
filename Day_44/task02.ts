/*
* Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

* Explain & TIP: Classes can be modularized in the same way as functions. 
* This encapsulation and reusability is a cornerstone of modern JavaScript application structure.
*/

export class Person {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    greet() {
        console.log(`Hello my name ${this.name}`);
    }
}
