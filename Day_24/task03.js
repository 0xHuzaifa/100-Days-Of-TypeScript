/*

* Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {}
* that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

* Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block,
* enhancing code organization and preventing accidental access from outside the block.
*/
let outsideLet = "Im outside";
const outsideConst = "Im outside";
{
    let insideLet = "Im inside let";
    const insideConst = "Im inside too";
    console.log(outsideLet);
    console.log(outsideConst);
    console.log(insideLet);
    console.log(insideConst);
}
console.log(outsideLet);
console.log(outsideConst);
export {};
// console.log(insideLet);
// console.log(insideConst);
