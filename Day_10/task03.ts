/*
* Question 30: Hello Admin: Greet users differently, especially 'admin'.

* Explain & TIP: Loop through usernames to personalize greetings. This introduces looping and conditional logic together.
*/

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

for (let user of usernames) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}

