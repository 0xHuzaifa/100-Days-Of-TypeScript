
/******************
 * NULLABLE TYPES *
******************/

let username: string | null = 'Huzaifa';
let age: number | null = null;

function greetUser(username: string | null) {
    if (username === null) {
        console.log(`Hello guest`);
    } else {
        console.log(`Hello ${username}`);
    }
}
greetUser('huzaifa')
greetUser(null)