/*
* Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. 
* It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

* Explain & TIP: The && operator in JavaScript checks if both sides are true. 
* It's great for confirming several things are true all at once.
*/

function check(first: boolean, second: boolean): boolean {
    if (first === true && second === true) {
        return true
    } else {
        return false
    } 

    // or
     // Only says true if both first and second are true
    //  return first && second;
}

console.log(check(true, true));
console.log(check(false, true));
console.log(check(true, false));
console.log(check(false, false));
