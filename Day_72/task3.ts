/********************
 * GENERICS CLASSES *
 ********************/

// Generic Class `User`
class User<T = string> {
  constructor(public val: T) {}

  show(msg: T): void {
    console.log(`${msg} - ${this.val}`);
  }
}

const userOne = new User<string>("huzaifa");
console.log(userOne.val);
userOne.show("hello");

const userTwo = new User<number | string>(100);
console.log(userTwo.val);
userTwo.show(200);
