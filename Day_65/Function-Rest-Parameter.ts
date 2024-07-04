
/***************************
 * FUNCTION REST PARAMETER *
***************************/

// Function with a rest parameter and type annotation
function addAll(...num: number[]): number {
    let result = 0
    for (let i = 0; i < num.length; i++) {
        result += num[i];
    }
    return result
}

let result = addAll(10, 20, 30, 40, 50, 60, +true);
console.log(result);
