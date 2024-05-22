
// Loops: while and for

// The “while” loop

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log( i );
  i--;
}

i = 3;
while (i) console.log(i--);

// The “do…while” loop

i = 0
do{
  console.log(i);
  i++
} while (i < 3);

// The “for” loop

for(i = 0; i < 3; i++) {
  console.log(i);
}

// for (let i = 0; i < 3; i++) console.log(i)

// run begin
i = 0
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// ...finish, because now i == 3

for (let a = 0; a < 3; a++) {
  console.log(a);
}
// console.log(a); // error, no such variable

// Instead of defining a variable, we could use an existing one:

let b = 0;

for (b = 0; b < 3; b++) { // use an existing variable
  console.log(b); // 0, 1, 2
}

console.log(b); // 3, visible, because declared outside of the loop

// Skipping parts
i = 0
for (; i < 3; i++) {
  console.log(i);
}

for (; i < 3;) {
  console.log(i++);
}

// Breaking the loop
let sum = 0;
let num = [1, 2, 4, 5, "", 3, 4]
i = 0
while (true) {

  let value = num[i]

  if (!value) break; // (*)

  sum += value;
  i++;

}
console.log( 'Sum: ' + sum );

// Continue to the next iteration
for (i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
}
// The continue directive helps decrease nesting
for (i = 0; i < 10; i++) {
  if (i % 2 ) {
    console.log(i);
  }
}

// Labels for break/continue
num = [2, 6, 1, "", 5, 8]
let a = 0
outer: for (i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = num[a]
    if (!input) break outer;
    a++ 
  } 
}
console.log('Done!');

console.log('prefix');
i = 0
while (++i < 5) console.log(i);
console.log('postfix');
i = 0
while (i++ < 5) console.log(i);
console.log('Done');
for (let i = 0; i < 5; ++i) console.log( i );

for (let i = 0; i < 5; i++) console.log( i );

/*
* Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

* The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

* Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/
num = [5, 50, 100, 101, 202];
i = 0
while (true) {
  let input = num[i]
  console.log(`input ${num[i]}`);
  if (input > 100) {
    break;
  }
  i++
}
console.log('Done!');


// The "switch" statement
a = 2 + 2
switch (a) {
  case 2:
    console.log('Too small');
    break;

  case 4:
    console.log('Exactly');
    break;
  
  case 6:
    console.log('Too big');
    break;

  default:
    console.log(`I don't know such values`);
    break;
}

switch (a) {
  case 2:
    console.log('Too small');

  case 4:
    console.log('Exactly');
  
  case 6:
    console.log('Too big');

  default:
    console.log(`I don't know such values`);
}

a = '1'
b = 0

switch (+a) {
  case b + 1:
    console.log("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    console.log("this doesn't run");
    break;
}

a = 3;

switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}

let arg = '2'
switch (arg) {
  case '0':
  case '1':
    console.log( 'One or zero' );
    break;

  case '2':
    console.log( 'Two' );
    break;

  case 3:
    console.log( 'Never executes!' );
    break;
  default:
    console.log( 'An unknown value' );
}

let browser = 'chrome'
if (browser === 'edge') {
  console.log("You've got the Edge!");
} else if (browser == 'chrome' || browser == 'firefox' || browser == 'safari' || browser == 'opera') {
  console.log('ok we support this browsers too');
} else {
  console.log('We hope that this page looks ok!');
}