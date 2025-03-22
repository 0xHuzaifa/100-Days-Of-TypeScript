/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/

// Declaration Syntax:

// Interface
interface PersonExInterface {
    name: string;
    age: number;
}

// Type
type PersonExType = {
    name: string;
    age: number;
}

// Extending And Implementing:
interface AnimalExInterface {
    type: string
}

interface Dog extends AnimalExInterface {
    bark(): void;
}

class Labrador implements Dog {
    type: string = "dog";
    bark(): void {
        console.log("woof!")
    }
}

const labrador = new Labrador();
console.log(labrador.type);
labrador.bark();


// Type
type AnimalExType = {
    type: string;
}

type Monkey = AnimalExType & {
    bark(): void;
} 

const Gorilla: Monkey = {
    type: "monkey",
    bark() {
        console.log("Ouou aa aa!!");
    },
}
console.log(Gorilla.type)
Gorilla.bark()

// compatibility
interface Car {
    brand: string
}

interface Car {
    model: string
}

const myCar: Car = {
    brand: "SRT",
    model: '1997'
}