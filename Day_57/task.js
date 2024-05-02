
// Comparisons
/*
 * n JavaScript they are written like this:

 * Greater/less than: a > b, a < b.
 * Greater/less than or equals: a >= b, a <= b.
 * Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
 * Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b. 
*/

// Boolean is the result
console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);
let result = 5 > 2
console.log(result);

// String comparison
console.log('Z' > 'A');
console.log('Glow' > 'Glee');
console.log('Bee' > 'Be');

// Comparison of different types
console.log('2' > 1);
console.log('01' == 1);
console.log(true == 1);
console.log(false == 0);
let a = 0
console.log(Boolean(a));
let b = '0'
console.log(Boolean(b));
console.log(a == b);

// Strict equality
console.log(0 == false);
console.log('' == false);
// A strict equality operator === checks the equality without type conversion.
console.log(0 === false);
console.log('' === false);

// Comparison with null and undefined
console.log(null === undefined); // For a strict equality check ===
console.log(null == undefined); // For a non-strict check ==

// Strange result: null vs 0
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// An incomparable undefined
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

console.log('2' > '12');
console.log('12' > '2');
console.log('12' > '22');

// Conditional branching: if, '?'

// The “if” statement
console.log('In which year ECMAScript-2015 specification published');
let year = 2015
if (year == 2015) {
    console.log(`You are right`);
    console.log('You are smart');
}
let cond = (year == 2015) // equality evaluates to true or false
if (cond) {
    console.log(`true`);
}

// The “else” clause
let year2 = 2022
if (year2 == 2015) {
    console.log(`You are right`);
    console.log('You are smart');
} else {
    console.log('how can you be so wrong');
}

// Several conditions: “else if”
if (year < 2015) {
    console.log('Too early');
  } else if (year > 2015) {
    console.log('Too late');
  } else {
    console.log('Exactly');
}

// Conditional operator ‘?’
let accessAllowed
console.log('How old are you?');
let age = 19
if (age > 18) {
    accessAllowed = true
} else {
    accessAllowed = false
}
console.log(accessAllowed);
// Ternary Operator
console.log('Ternary operator', (age > 18) ? true : false);
console.log('Ternary operator', age > 18 ? true : false);
// Multiple ‘?’
let message = (age < 3) ? 'hello baby' :
(age < 18 ) ? 'Hello' :
(age < 100) ? 'Greeting' : 
'what an unusual age';
console.log(message);
////////
if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';

}

// Non-traditional use of ‘?’
console.log('Which company created JavaScript?');
let company = 'Netscape';
(company == 'Netscape') ? 
console.log('Right') : console.log('Wrong');


let message2
let login = 'Employee';
if (login == 'Employee') {
    message = 'Hello';
  } else if (login == 'Director') {
    message = 'Greetings';
  } else if (login == '') {
    message = 'No login';
  } else {
    message = '';  
}

(login == 'Employee') ? 
    message2 = 'Hello' :
(login == 'Director') ? 
    message2 = 'Greetings' :
(login == '') ? 
    message2 = 'No login' :
message2 = ''

    console.log(message2);