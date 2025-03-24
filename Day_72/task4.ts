/***************************
 * GENERICS AND INTERFACES *
 ***************************/

// Interface definitions for Book and Game
interface Book {
  itemType: string;
  title: string;
  price: number;
  inStock: boolean;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  inStock: boolean;
  price: number;
}

class Collection<T> {
  public data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }
}

const item1 = new Collection<Book>();
item1.add({
  itemType: "Book",
  title: "World War Hulk",
  inStock: true,
  price: 100,
});
console.log(item1);

const item2 = new Collection<Game>();
item2.add({
  itemType: "Game",
  title: "Uncharted",
  style: "Action",
  inStock: true,
  price: 100,
});
console.log(item2);
