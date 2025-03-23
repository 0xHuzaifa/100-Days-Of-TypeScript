/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getProductInfo() {
        return `ID: ${this.id}, Product Name: ${this.name}, Price: ${this.price}`;
    }
}
const product1 = new Product(1, "mobile", 500);
console.log(product1.getProductInfo());
export {};
