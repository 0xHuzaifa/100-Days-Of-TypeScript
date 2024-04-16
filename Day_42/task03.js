/*
* Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

* Explain & TIP: When this is used inside a nested function within an object's method,
* it does not refer to the object itself but to the global object (in a browser, window).
* This behavior often requires workarounds like assigning this to another variable in the outer function.
*/
const obj = {
    name: 'Huzaifa',
    outerFunction: function () {
        console.log(this.name);
        const innerFunction = () => {
            console.log(this.name);
        };
        innerFunction();
    }
};
obj.outerFunction();
export {};
