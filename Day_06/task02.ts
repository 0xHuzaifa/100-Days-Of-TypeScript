/*
* Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

* Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. 
* Removing guests from your list is straightforward but should be done thoughtfully.
*/

const guest: string[] = ["Hamza", "Haris", "Mudassir"];
for (let i = 0; i < guest.length; i++) {
    console.log(`Hello ${guest[i]}, you are invited to the dinner`);    
}
//////////

console.log(`\nMudassir is not coming to dinner. So we are inviting Taha.\n`);

const personNotComing: number = guest.indexOf("Mudassir");
const replacementGuest: string = "Taha";

if (personNotComing !== -1) {
    guest[personNotComing] = replacementGuest;
}

for (let i = 0; i < guest.length; i++) {
    console.log(`Hello ${guest[i]}, you are invited to the dinner`);    
}
////////////

console.log("\nGreat news! I found a bigger dinner table! ");
console.log(`Lets invite some more friends \n`);

// Lets add more guests
guest.unshift("Faisal"); // add guest at beginning
guest.splice(guest.length / 2, 0, "Fahad" ); // add guest at middle
guest.push("Bilal"); // add guest at end

for (let i = 0; i < guest.length; i++) {
    console.log(`Hello ${guest[i]}, you are invited to the dinner`);    
}
////////////

console.log(`\nUnfortunately our big dinner table is not arriving on time so we can only invite 2 persons \n`);

for (let i = 0; i <= guest.length; i++) {
    if (guest.length === 2) {
        break;
    } else {
        guest.pop()
    }
}

for (let i = 0; i < guest.length; i++) {
    console.log(`Hello ${guest[i]}, you are invited to the dinner`);    
}
/////////////