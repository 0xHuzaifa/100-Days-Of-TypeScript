/******************
 * NULLABLE TYPES *
******************/
let username = 'Huzaifa';
let age = null;
function greetUser(username) {
    if (username === null) {
        console.log(`Hello guest`);
    }
    else {
        console.log(`Hello ${username}`);
    }
}
greetUser('huzaifa');
greetUser(null);
export {};
