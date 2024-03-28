/*
* Question 83: Converting to Upper and Lower Case: Create a function that takes a string, 
* converts it to uppercase, then to lowercase, and logs both.

* Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case 
* of all letters in a string, useful for formatting or comparing strings.
*/

let text1: string = 'huZAIfa';
let text2: string = 'ahMEd';

console.log(`before ${text1}`);
console.log(`before ${text2} \n`);

function converter(text: string): void {
    let convert = text.toLowerCase();
    console.log(`to lower case ${convert}`);

    convert = text.toUpperCase();
    console.log(`to upper case ${convert} \n`);
}

converter(text1);
converter(text2)

