/*
* Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

* Explain & TIP: Age groups can typically be categorized by specific ranges. For instance,
* you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
*/
function personAge(age) {
    if (age >= 20) {
        console.log(`You are adult`);
    }
    else if (age > 12) {
        console.log(`You are teenager`);
    }
    else {
        console.log(`You are a kid`);
    }
}
personAge(5);
personAge(25);
personAge(12);
personAge(20);
personAge(15);
export {};
