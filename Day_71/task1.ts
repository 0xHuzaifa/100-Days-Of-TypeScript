/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/

class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Product Name: ${this.name}, Price: ${this.price}`
    }
}

const product1 = new Product(1, "mobile", 500);

console.log(product1.getProductInfo())