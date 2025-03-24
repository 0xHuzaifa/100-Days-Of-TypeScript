/***************************
 * GENERICS AND INTERFACES *
 ***************************/
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
const item1 = new Collection();
item1.add({
    itemType: "Book",
    title: "World War Hulk",
    inStock: true,
    price: 100,
});
console.log(item1);
const item2 = new Collection();
item2.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    inStock: true,
    price: 100,
});
console.log(item2);
export {};
