/*******************
 * CLASS ACCESSORS *
 *******************/
class ProductExAccessors {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
    }
    // 'public' getter for price
    get price() {
        return this._price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            console.log("Price can not be negative or zero");
        }
    }
    getProductInfo() {
        return `Id: ${this.id} name: ${this.name} price: ${this._price}`;
    }
}
const productEx = new ProductExAccessors(1, "watch");
console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0
// Use the 'getter' to get the price
console.log(productEx.price);
// Use the 'setter' to update the price
productEx.price = 20.0;
// Use the 'getter' to get the price
console.log(productEx.price);
console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20
// Attempting to set a negative price triggers the setter logic
productEx.price = -5; // Price cannot be negative.
export {};
