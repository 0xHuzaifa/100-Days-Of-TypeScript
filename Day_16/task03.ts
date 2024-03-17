/*
* Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
* Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

* Explain & TIP: The spread operator can be used in conjunction with array methods like sort() 
* to combine and manipulate arrays efficiently.
*/

const laptopSet1Prices = [1200, 1500, 1800];
const laptopSet2Prices = [1100, 1600, 1700];

const combinedPrices = [...laptopSet1Prices, ...laptopSet2Prices];

const sortedPrice = combinedPrices.sort((a,b) => a - b);

console.log(`sortedPrice`, sortedPrice);
