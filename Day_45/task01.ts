/*
* Question 133: Write a JavaScript object and convert it into a JSON string.

* Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. 
* It's easy for humans to read and write and for machines to parse and generate. 
* Converting a JavaScript object into a JSON string can be done using JSON.stringify().
*/

const obj = {
    name: 'huzaifa',
    age: 23,
}
console.log('Object:', obj);

console.log('\n');

console.log('JSON Object:', JSON.stringify(obj));
