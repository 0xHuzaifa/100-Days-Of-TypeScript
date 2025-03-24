/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/
// Generic Function `returnTypeEx`
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(123));
console.log(returnTypeEx("huzaifa"));
// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(123));
console.log(returnTypeArrowSyntax("Ahmed"));
// Generic Function `testType`
function testType(val) {
    return `the value is ${val} and its type is ${typeof val}`;
}
console.log(testType(123));
console.log(testType("huzaifa ahmed"));
// Generic Function `multipleTypes`
function multipleTypes(val1, val2) {
    return `the value 1 is ${val1} and its type is ${typeof val1} and the value 2 is ${val2} and its type is ${typeof val2}`;
}
console.log(multipleTypes(1234, "abcd"));
console.log(multipleTypes("abcd", 1234));
export {};
