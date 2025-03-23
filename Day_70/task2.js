/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/
// Create an object that adheres to the 'Person' interface
const huzaifa = {
    name: "Huzaifa",
    age: 24,
    greet(message) {
        console.log(`${this.name} is saying ${message}`);
    }
};
huzaifa.greet("Hello World!");
export {};
