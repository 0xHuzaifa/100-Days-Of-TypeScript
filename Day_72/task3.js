/********************
 * GENERICS CLASSES *
 ********************/
// Generic Class `User`
class User {
    constructor(val) {
        this.val = val;
    }
    show(msg) {
        console.log(`${msg} - ${this.val}`);
    }
}
const userOne = new User("huzaifa");
console.log(userOne.val);
userOne.show("hello");
const userTwo = new User(100);
console.log(userTwo.val);
userTwo.show(200);
export {};
