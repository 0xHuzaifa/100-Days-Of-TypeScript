/*
* Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

* Explain & TIP: To replace an item in an array, find its index using .indexOf(), 
* then use that index to set a new value with array bracket notation.
*/

const favoriteFruits: string[] = ['apple', 'guava', 'orange', 'banana'];

console.log(favoriteFruits);

console.log(favoriteFruits.indexOf('banana'));

favoriteFruits[favoriteFruits.indexOf('banana')] = 'mango'

console.log(favoriteFruits);
