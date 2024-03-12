"use strict";
/*
* Question 32: Checking Usernames: Ensure uniqueness in usernames.

* Explain & TIP: Checking for uniqueness is crucial in user management.
* Use loops and conditionals to handle case-insensitive comparisons.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const userNames = ["huzaifa", "shuja", "moiz"];
const newUsers = ["Faraz", "Shuja", "Bilal", "Huzaifa"];
for (let i = 0; i < newUsers.length; i++) {
    let nameToLowerCase = newUsers[i].toLocaleLowerCase();
    if (userNames.includes(nameToLowerCase)) {
        console.log(`${nameToLowerCase}, username already registered`);
    }
    else {
        console.log(`${nameToLowerCase}, username available.`);
    }
}
