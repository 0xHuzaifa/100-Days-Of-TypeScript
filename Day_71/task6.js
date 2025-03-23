/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/
class AbstractItem {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractItem.nextId++;
    }
}
AbstractItem.nextId = 1;
class Item extends AbstractItem {
    constructor(id, name) {
        super(id, name);
    }
    getItemInfo() {
        return `iD: ${this.id} name: ${this.name}`;
    }
}
const item1 = new Item(AbstractItem.generateNextId(), "watch");
const item2 = new Item(AbstractItem.generateNextId(), "mobile");
console.log(item1.getItemInfo());
console.log(item2.getItemInfo());
export {};
