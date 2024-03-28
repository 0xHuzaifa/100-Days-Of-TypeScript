/*
* Question 82: Find the Length of a String: Write a function that takes a string as an argument 
* and returns the number of characters in the string.

* Explain & TIP: The .length property of a string gives you the total number of characters it contains, 
* helping you understand more about the data you're working with.
*/

const text: string = 'Hello World!';

function countCharacter(text: string): number {
    let count: number = text.length;
    return count;
}

console.log(text);

console.log(`Characters on this text is: ${countCharacter(text)}`);
