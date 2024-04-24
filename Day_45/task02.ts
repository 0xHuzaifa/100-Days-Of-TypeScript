/*
* Question 134: Take a JSON string and parse it into a JavaScript object.

* Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. 
* This is particularly useful when dealing with data received as JSON from a web server or API.
*/

const obj = {
    name: 'huzaifa',
    age: 23,
}
const jsonObject = JSON.stringify(obj)
console.log('Object to JSON:', jsonObject);

const jsonToObject = JSON.parse(jsonObject)
console.log('JSON to Object', jsonToObject);
