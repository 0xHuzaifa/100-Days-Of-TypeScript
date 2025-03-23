/************************
 * CLASS STATIC MEMBERS *
 ************************/
class ProductStaticMember {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductStaticMember.nextId++;
    }
    getProductInfo() {
        return `id: ${this.id} name: ${this.name}`;
    }
}
ProductStaticMember.nextId = 1;
const product1 = new ProductStaticMember(ProductStaticMember.generateNextId(), "watch");
console.log(product1.getProductInfo());
const product2 = new ProductStaticMember(ProductStaticMember.generateNextId(), "mobile");
console.log(product2.getProductInfo());
export {};
