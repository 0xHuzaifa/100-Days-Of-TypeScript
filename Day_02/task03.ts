/*
* Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in 
* lowercase, uppercase, and titlecase.
*/

let personName: string = "huzaifa AHMED";

console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.toLocaleLowerCase().replace(/(^|\s)\S/g, word => word.toUpperCase()));


/*
* We use a regular expression /(^|\s)\S/g to match the first letter of each word. Explanation of the regular expression:
* (^|\s): Match the beginning of the string (^) or any whitespace character (\s).
* \S: Match any non-whitespace character (i.e., the first letter of each word).
* /g: Perform a global search to match all occurrences.
*/