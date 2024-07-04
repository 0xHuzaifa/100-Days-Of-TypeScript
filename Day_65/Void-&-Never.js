/****************
 * VOID & NEVER *
****************/
// Void
function greet(name) {
    console.log(`Hello ${name}`);
}
function notReturnValue() {
}
// Never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
export {};
