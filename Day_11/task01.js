/*
* Question 31: No Users: Ensure your user list isn’t empty.

* Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.
*/
let userNames = [];
if (userNames.length > 0) {
    for (let user of userNames) {
        if (user === "admin") {
            console.log(`Hello ${user}, would you like to see the status report?`);
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}
else {
    console.log(`There are currently no user`);
}
export {};
