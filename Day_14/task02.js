/*
* Question 41: Magicians: Display magician names from an array.

* Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner.
* This is useful for handling lists of data.
*/
let magicians = ["Huzaifa", "Shuja", "Bilal"];
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
showMagicians(magicians);
export {};
