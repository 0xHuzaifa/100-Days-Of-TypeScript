
/***************
 * UNION TYPES *
***************/


let myVar: string | number;

myVar = 'Hello';
console.log(myVar);

myVar = 42;
console.log(myVar);

// Uncommenting the line below would result in a TypeScript error
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.