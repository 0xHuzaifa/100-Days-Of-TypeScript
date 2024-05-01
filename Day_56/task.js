/*
 * Type Conversions 
*/

// String Conversion
let value = true
console.log(typeof value);
value = String(value)
console.log(typeof value);

// Numeric Conversion
let str = "124"
console.log(typeof str);
str = Number(str)
console.log(typeof str);
let age = Number("an arbitrary string instead of a number");
console.log(typeof age);

// Boolean Conversion
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean('Hello'));
console.log(Boolean(''));
console.log(Boolean(' '));


// Basic operators, maths
// Terms: “unary”, “binary”, “operand”
let x = 5
x = -x
console.log(x); // -1, unary negation was applied
//////////////
let y = 9
console.log(y - x); // 2, binary minus subtracts values

// Maths
// Remainder %
console.log(5 % 2); // 1, the remainder of 5 divided by 2
console.log(8 % 3); // 2, the remainder of 8 divided by 3
console.log(8 % 4); // 0, the remainder of 8 divided by 4

// Exponentiation **
console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16
console.log(4 ** (1/2)); // 2 (power of 1/2 is the same as a square root)
console.log(4 ** (1/3)); // 2 (power of 1/3 is the same as a square root)

// String concatenation with binary +
let s = 'my' + 'string'
console.log(s); //mystring
console.log('1' + 2); //12
console.log(2 + '1'); //21
console.log(2 + 2 + '1'); //"41" not 221
console.log('1' + 2 + 2); //"122" not 14
console.log(6 - '2'); // 4, converts '2' to a number
console.log('6' / '2'); // 3, converts both operands to numbers

// Numeric conversion, unary +
let z = 1
console.log(+z);
let c = -2
console.log(+c);
console.log(+true);
console.log(+'');
let apple = '2'
let orange = '3'
console.log(apple + orange);
// both values converted to numbers before the binary plus
console.log(+apple + +orange);
// the longer variant
console.log(Number(apple) + Number(orange));

// Assignment
let a = 2 * 2 + 1
console.log(a);

// Assignment = returns a value
let q = 2
let e = 3
let w = 3 - (q = e + 1)
console.log(e);
console.log(w);

// Chaining assignments
let r, t, u;
r = t = u = 2 + 2
console.log(r); // 4
console.log(t); // 4
console.log(u); // 4

// Modify-in-place
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console.log(n);

// Increment/decrement
let counter = 2
counter++
console.log(counter);
//////////
counter--
console.log(counter);

// 