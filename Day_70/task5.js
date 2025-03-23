/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/
class Labrador {
    constructor() {
        this.type = "dog";
    }
    bark() {
        console.log("woof!");
    }
}
const labrador = new Labrador();
console.log(labrador.type);
labrador.bark();
const Gorilla = {
    type: "monkey",
    bark() {
        console.log("Ouou aa aa!!");
    },
};
console.log(Gorilla.type);
Gorilla.bark();
const myCar = {
    brand: "SRT",
    model: '1997'
};
export {};
