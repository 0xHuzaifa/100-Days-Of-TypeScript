/******************
 * GENERICS INTRO *
 ******************/

function returnType<T>(val: T): T {
    return val;
}

// Usage of the generic function with different types
const numValue: number = returnType<number>(123);
const strValue: string = returnType<string>("huzaifa");
const boolValue: boolean = returnType<boolean>(true);
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);

console.log(numValue);
console.log(strValue);
console.log(boolValue);
console.log(arrValue);