/**********************
 * ANONYMOUS FUNCTION *
**********************/
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20));
(() => {
    console.log(`Anonymous and imidiate invoke function`);
})();
export {};
