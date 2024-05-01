

// Data types
let message = "Hello World!"

// Number
message = 12345
message = 12.35

// Infinity, -Infinity and NaN.
alert( 1/0 );
alert(Infinity);
alert("not a number"/2-1);

// BigInt
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// String
let str = "Hello"
let str2 = 'single quotes are ok too'
let phrase = `can embed another ${str}`
alert(`${str} World!`)

// Boolean (logical type)
let nameFileCheck = true
let ageFileCheck = false
let isGreater = 4>1
alert(isGreater)

// The “null” value
let age = null

// The “undefined” value
let age2
alert(age2)

// The typeof operator
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)