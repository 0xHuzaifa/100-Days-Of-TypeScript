/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/

// Generic Function `returnTypeEx`
function returnTypeEx<T>(val: T): T {
  return val;
}
console.log(returnTypeEx<number>(123));
console.log(returnTypeEx<string>("huzaifa"));

// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = <T>(val: T): T => val;
console.log(returnTypeArrowSyntax<number>(123));
console.log(returnTypeArrowSyntax<string>("Ahmed"));

// Generic Function `testType`
function testType<T>(val: T): string {
  return `the value is ${val} and its type is ${typeof val}`;
}
console.log(testType<number>(123));
console.log(testType<string>("huzaifa ahmed"));

// Generic Function `multipleTypes`
function multipleTypes<T, S>(val1: T, val2: S): string {
  return `the value 1 is ${val1} and its type is ${typeof val1} and the value 2 is ${val2} and its type is ${typeof val2}`;
}

console.log(multipleTypes<number, string>(1234, "abcd"));
console.log(multipleTypes<string, number>("abcd", 1234));
