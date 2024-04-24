/*
* Question 135: Explain how you can format a JSON string with proper indentation for readability.

* Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. 
* Adding an indent level as the third argument beautifies the output, making it more readable.
*/

const obj = {
    name: 'huzaifa',
    age: 23,
}

console.log('1. JSON Object:', JSON.stringify(obj));
console.log('2. JSON Object:', JSON.stringify(obj, null, 5));
console.log('3. JSON Object:', JSON.stringify(obj, (key, value) => {
    if (key === 'age') {
        return undefined; // Exclude 'age' property
    }
    return value; // include all property
}));
