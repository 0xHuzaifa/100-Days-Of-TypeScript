/*
* Question 32: Checking Usernames: Ensure uniqueness in usernames.

* Explain & TIP: Checking for uniqueness is crucial in user management. 
* Use loops and conditionals to handle case-insensitive comparisons.
*/

const userNames: string[] = ["huzaifa", "shuja", "moiz"];

const newUsers: string[] = ["Faraz", "Shuja", "Bilal", "Huzaifa"];

for (let i = 0; i < newUsers.length; i ++) {
    let nameToLowerCase: string = newUsers[i].toLocaleLowerCase()
    if (userNames.includes(nameToLowerCase)) {
        console.log(`${nameToLowerCase}, username already registered`);
    } else {
        console.log(`${nameToLowerCase}, username available.`);
    }
}
