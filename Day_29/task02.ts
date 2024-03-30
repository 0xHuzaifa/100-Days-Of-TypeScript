/*
* Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" 
* is present in a given string. It should return true if found, otherwise false.

* Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, 
* returning a boolean (true or false).
*/

const text: string = 'JavaScript is a dynamic programming language, and TypeScript is a static programming language';
const text2: string = 'I love coding';

function findText(find: string): boolean {
    return find.includes('JavaScript');
}

console.log(findText(text));
console.log(findText(text2));
