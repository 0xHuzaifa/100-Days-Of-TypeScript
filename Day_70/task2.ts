/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/

// Define an interface 'Person' with a method 'greet'
interface Person {
    name: string;
    age: number;
    greet(message: string): void;
}

// Create an object that adheres to the 'Person' interface
const huzaifa: Person = {
    name: "Huzaifa",
    age: 24,
    greet(message: string) {
        console.log(`${this.name} is saying ${message}`)
    }
}

huzaifa.greet("Hello World!");