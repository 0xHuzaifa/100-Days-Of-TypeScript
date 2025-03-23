/************************
 * CLASS STATIC MEMBERS *
 ************************/

class ProductStaticMember {
  private static nextId: number = 1;
  constructor(private id: number, private name: string) {}

  static generateNextId(): number {
    return ProductStaticMember.nextId++;
  }

  getProductInfo(): string {
    return `id: ${this.id} name: ${this.name}`;
  }
}

const product1 = new ProductStaticMember(
  ProductStaticMember.generateNextId(),
  "watch"
);
console.log(product1.getProductInfo());

const product2 = new ProductStaticMember(
  ProductStaticMember.generateNextId(),
  "mobile"
);
console.log(product2.getProductInfo());
