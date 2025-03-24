/******************
 * GENERICS INTRO *
 ******************/
function returnType(val) {
    return val;
}
// Usage of the generic function with different types
const numValue = returnType(123);
const strValue = returnType("huzaifa");
const boolValue = returnType(true);
const arrValue = returnType([1, 2, 3, 4]);
console.log(numValue);
console.log(strValue);
console.log(boolValue);
console.log(arrValue);
export {};
