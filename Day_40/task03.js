/*
* Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

* Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over
* iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.
*/
const movies = ['Iron Man', 'Avengers', 'Batman Vs Super Man', 'Justice League'];
for (const movie of movies) {
    console.log(`My favorite movies is ${movie}`);
}
export {};
