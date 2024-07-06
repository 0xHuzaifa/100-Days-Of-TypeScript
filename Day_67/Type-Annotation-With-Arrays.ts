
/********************************
 * TYPE ANNOTATIONS WITH ARRAYS *
********************************/

// Annotating an array of string
let fruits: string[] = ['apple', 'mango', 'banana']

for(let i = 0; i < fruits.length; i++) {
    console.log(`fruit: ${fruits[i].toUpperCase()}`);
}