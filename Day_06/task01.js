/*
* Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
* Explain & TIP: When you have more space, you can add more guests to your list.
* You can add guests at the beginning, middle, and end of an array.
*/
const guest = ["Hamza", "Haris", "Mudassir"];
const personNotComing = guest.indexOf("Mudassir");
const replacementGuest = "Taha";
if (personNotComing !== -1) {
    guest[personNotComing] = replacementGuest;
}
for (let i = 0; i < guest.length; i++) {
    console.log(`Hello ${guest[i]}, you are invited to the dinner`);
}
console.log("\nGreat news! I found a bigger dinner table! \n");
// Lets add more guests
guest.unshift("Faisal"); // add guest at beginning
guest.splice(guest.length / 2, 0, "Fahad"); // add guest at middle
guest.push("Bilal"); // add guest at end
for (let i = 0; i < guest.length; i++) {
    console.log(`Hello ${guest[i]}, you are invited to the dinner`);
}
export {};
