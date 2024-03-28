/*
* Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces
* all instances of the word "JavaScript" with "TypeScript".

* Explain & TIP: The .replace() method can search for a specific text pattern in a string and
* replace it with something else. By default, it only replaces the first occurrence,
* but you can use a global regex for multiple replacements.
*/
let sentence = 'JavaScript! Today we will learn JavaScript and its basic functions';
function change(text) {
    let changeText = text.replace(/JavaScript/g, "TypeScript");
    return changeText;
}
console.log(change(sentence));
export {};
