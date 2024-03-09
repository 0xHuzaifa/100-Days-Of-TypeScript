/*
* Question 22: Intentional Error: Try to produce an array index error in one of your programs. 
* Correct the error before finishing.

* Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. 
* Experimenting with this helps you understand array boundaries.
*/

let friends: string[] = ["Huzaifa", "Shuja", "Moiz"];

console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
console.log(friends[2]); // Correcting the error by accessing a valid index.
