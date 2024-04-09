/*
* Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

* Explain & TIP: Iterating over a Map can be done using the .forEach() method or
* a for...of loop, providing access to each key-value pair.
*/
const myMap = new Map();
myMap.set('Pakistan', 'Islamabad');
myMap.set('India', 'Mumbai');
myMap.set('USA', 'Washington DC');
for (const [key, value] of myMap) {
    console.log(`${value} is a capital of ${key}`);
}
export {};
