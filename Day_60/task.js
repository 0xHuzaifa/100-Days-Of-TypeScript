// Functions

// Function Declaration
function showMessage() {
    console.log("Hello World!");
}
showMessage()

// Local variables
function showMessage2() {
    let message = "Hello World!"
    console.log(message);
}
showMessage2()
// console.log(message);

// Outer variables
let userName = 'Huzaifa'
function showName() {
    let message = `hello` + userName
    console.log(message);
}
showName()

function showName2() {
    userName = 'Ahmed'
    let message = "hello" + userName
}
console.log(userName);
showMessage2()
console.log(userName);
function showName3() {
    let userName = 'Shuja'
    let message = `hello ${userName}`
}
showName3()
console.log(userName);

// Parameters
function showMessage3(from, text) {
    console.log(from + ':' + text);
}
showMessage3('Huzaifa', 'Hello');
showMessage3('Moiz', "what's up?")
function showMessage4(from, text) {
    from = '*' + from + '*'; // make "from" look nicer  
    console.log( from + ': ' + text );
}
let from = "Ann";
showMessage4(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
console.log( from );

// Default values
function showMessage5(from, text = 'no text given') {
    console.log(from + ':' + text);
}
showMessage5('Faraz')

// Returning a value
function sum(a, b) {
    return a + b;
}
let result = sum(10, 5);
console.log(result);
function checkAge(age) {
    if(age >= 18) {
        return true
    } else {
        return console.log('Do you have permision from your parents?')
    }
}
let age = 18
if (checkAge(age)) {
    console.log('access granted');
} else {
    console.log('access granted');
}
function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }

    console.log('Showing you the movie');
}
showMovie(age)

// A function with an empty return or without it returns undefined
function doNothing() {   //empty 
}
console.log(doNothing() === undefined);
function doNothing2() {   //empty 
    return;
}
console.log(doNothing2() === undefined);

// return (
//     some + long + expression
//     + or +
//     whatever * f(a) + f(b)
// )

// Naming a function
/*
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
Examples of such names:

showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
*/

function showPrime(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        console.log(i);
    }
}

showPrime(6)

function showPrimes2(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i);  // a prime
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true;
}
showPrimes2(10)

// function checkAge(age) {
//     return (age >= 18) ? true : console.log('did your parents allow');
// }
// function checkAge(age) {
//     return (age >= 18) || console.log('did your parents allow');
// }
// checkAge(16)

function pow(x, y) {
    if (y < 1) {
        console.log(`Power ${n} is not supported, use a positive integer`);
    } else {
        console.log(`${x} , ${y}`);
    }
    let result = x
    for (let i = 1; i < y; i++) {
        result *= x
    }
    return result
}
let result2 = pow(5, 2)
console.log(result2);

// Function expressions
function sayHi() {
    console.log('Hi!');
}
// let sayHi = function () {
//     console.log('Hi!');
// }
// Function is a value
function sayHi1() {
    console.log('hello')
}
let func = sayHi1
func()
sayHi1()
// let question = true
function ask(question, yes, no) {
    console.log(question);
    if (false) yes()
        else no() 
}
function showOk() {
    console.log('you agreed');
}
function showCancle() {
    console.log('you cancled');
}
ask('do you agree?', showOk,  showCancle)
function ask2(question, yes, no) {
    console.log(question);
    if (true) yes() 
        else no()
}
ask2('do you agree?', 
    function () {
        console.log('you agree');
    },
    function () {
        console.log('you cancle');
    }
)

// Function Expression vs Function Declaration
// function declaration
function sum(a, b) {
    return a + b
}
// function expression
let sum = function (a, b) {
    return a + b;
}








