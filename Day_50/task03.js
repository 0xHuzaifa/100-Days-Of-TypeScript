/*
* Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

* Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations,
* or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous
* code, in contrast, runs sequentially, blocking further execution until the current operation completes.
*/
// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
export {};
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
