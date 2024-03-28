/*
* Question 81: Iterating Over Object Properties: Write a function that takes an object
*  as an argument and logs all of its properties and values.

* Explain & TIP: You can loop through each property of an object using a for...in loop. 
* This is useful for when you need to examine or display all the information an object holds.
*/

let car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1897,
    color: 'Black'
}
let car2 = {
    make: 'Dodge',
    model: 'SRT',
    year: 1899,
    color: 'Black'
}

function show(obj: { [key: string]: any}) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            console.log(`${key}: ${value}`);
        }
    }
    console.log(`\n`);
    
}

show(car)
show(car2)