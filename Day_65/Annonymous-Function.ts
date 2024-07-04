
/**********************
 * ANONYMOUS FUNCTION *
**********************/

const add = function (num1: number, num2: number): number {
    return num1 + num2
}
console.log(add(10, 20));

(()=> {
    console.log(`Anonymous and imidiate invoke function`);
    
})();