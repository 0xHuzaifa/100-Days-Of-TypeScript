/*
* Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

* Explain & TIP: You can check for the presence of a key in a Map with
* the .has() method and retrieve its value with the .get() method.
*/
const myMap = new Map();
myMap.set('Pakistan', 'Islamabad');
myMap.set('India', 'Mumbai');
myMap.set('USA', 'Washington DC');
function check(map) {
    console.log(myMap.has(map) ? `${myMap.get(map)}` : `${map} not exist in map`);
}
check('Canada');
check('Pakistan');
export {};
