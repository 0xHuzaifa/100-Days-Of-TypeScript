/*
* Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

* Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data.
* This exercise demonstrates array copying and manipulation.
*/
const magicians = ['Harry', 'Dumbledore', 'Ron'];
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`the great ${magician}`);
    }
    return greatMagicians;
}
let greatMagicians = makeGreat([...magicians]); // or let greatMagicians = makeGreat(magicians.slice())
console.log("Original magicians:");
showMagicians(magicians);
console.log("Great magicians:");
showMagicians(greatMagicians);
export {};
