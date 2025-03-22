/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/
// Create an object that adheres to the 'Person' interface
var huzaifa = {
    name: "Huzaifa",
    age: 24,
    greet: function (message) {
        console.log("".concat(this.name, " is saying ").concat(message));
    }
};
huzaifa.greet("Hello World!");
