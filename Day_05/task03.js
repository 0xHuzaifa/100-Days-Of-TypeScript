/*
* Question 15:** Changing Guest List: One of your guests can't make it to the dinner,
* so you need to send out a new set of invitations with a replacement guest.
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
export {};
