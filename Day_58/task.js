
// Logical operators

// || (OR)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
if (1 || 0) {
    console.log('true');
}
let hour = 9
if (hour < 10 || hour > 18) {
    console.log('The office is closed');
}
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}

// OR "||" finds the first truthy value
console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(null || undefined || 0); // 0 (all falsy, returns the last value)

// Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || 'Anonymous'); // SuperCoder

// Short-circuit evaluation.
true || console.log('not printed');
false || console.log('printed');

// && (AND)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}
if (1 && 0) { // evaluated as true && false
    console.log( "won't work, because the result is falsy" );
}

// AND “&&” finds the first falsy value
// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5
// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0
console.log(1 && 2 && null && 3);
console.log(1 && 2 && 3);

// ! (NOT)
console.log( !true ); // false
console.log( !0 ); // true
// A double NOT !! is sometimes used for converting a value to boolean type:
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false
console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false

// Nullish coalescing operator '??'

// result = a ?? b
// result = (a !== null && a !== undefined) ? a : b;
let user 
console.log(user ?? 'Anonymous');
user = 'John'
console.log(user ?? 'Anonymous');
firstName = null;
lastName = null;
nickName = "SuperCoder";
console.log(firstName ?? lastName ?? nickName ?? 'Anonymous');

// Comparison with ||
firstName = null;
lastName = null;
nickName = "SuperCoder";
// shows the first truthy value:
console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder
// || returns the first truthy value.
// ?? returns the first defined value.
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0
height = null;
let width = null;
// important: use parentheses
let area = (height ?? 100) * (width ?? 50);
console.log(area); // 5000

// Using ?? with && or ||
// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, 
// unless the precedence is explicitly specified with parentheses.
// The code below triggers a syntax error:

// let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works

console.log(x); // 2