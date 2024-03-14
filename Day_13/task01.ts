/*
* Question 37: Large Shirts: Default values in make_shirt().

* Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. 
* This introduces default function parameters.
*/

function makeShirt(size: string = "XL", message: string = "I love this T-Shirt") {
    console.log(`The T-Shirt size is "${size}", and the message is "${message}"`);
}

makeShirt();
makeShirt("X", "COOL");
makeShirt("Small", "Baby T-Shirt");

