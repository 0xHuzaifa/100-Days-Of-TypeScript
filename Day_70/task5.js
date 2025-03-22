/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/
var Labrador = /** @class */ (function () {
    function Labrador() {
        this.type = "dog";
    }
    Labrador.prototype.bark = function () {
        console.log("woof!");
    };
    return Labrador;
}());
var labrador = new Labrador();
console.log(labrador.type);
labrador.bark();
var Gorilla = {
    type: "monkey",
    bark: function () {
        console.log("Ouou aa aa!!");
    },
};
console.log(Gorilla.type);
Gorilla.bark();
var myCar = {
    brand: "SRT",
    model: '1997'
};
