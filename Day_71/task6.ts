/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/

abstract class AbstractItem {
    private static nextId: number = 1;
    constructor(public id: number, protected name: string) {}

    static generateNextId(): number {
        return AbstractItem.nextId++;
    }

    abstract getItemInfo(): string; 
}

class Item extends AbstractItem {
    constructor(id: number, name: string) {
        super(id, name)
    }

    getItemInfo(): string {
        return `iD: ${this.id} name: ${this.name}`
    }
}

const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "watch");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "mobile");
console.log(item1.getItemInfo())
console.log(item2.getItemInfo())