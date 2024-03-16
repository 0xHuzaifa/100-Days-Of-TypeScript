/*
* Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

* Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments,
* useful for handling lists of data like sandwich ingredients.
*/
function makeSandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}
makeSandwich("ham", "cheese");
makeSandwich("turkey", "lettuce", "tomato");
makeSandwich("avocado", "sprouts", "mustard", "mayo");
export {};
