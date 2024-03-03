"use strict";
/*
* Question 3: Stripping Names: Store a person’s name,
* and include some whitespace characters at the beginning and end of the name.
* Use "\t" (tab) and "\n" (new line) at least once.
* Print the name once, so the whitespace around the name is displayed.
* Then print the name after stripping the white spaces.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let name = "\t\n Huzaifa \n\t";
console.log(`Name with whitespace characters ${name}`);
console.log(`Name without whitespace characters ${name.trim()}`);
