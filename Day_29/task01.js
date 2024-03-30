/*
* Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence
* of the word "code" within any given string and returns its position.

* Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string.
* If the text isn't found, this method returns -1.
*/
const text = 'Hello everyone today we will learn how to code in typescript.';
const text2 = 'Hello everyone today we will learn typescript coding.';
function findIndex(findingText) {
    return findingText.indexOf('code');
}
console.log(findIndex(text));
console.log(findIndex(text2));
export {};
