/*
* Question 14:** Guest List: If you could invite anyone, living or deceased, to dinner, 
* who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
* Then use your list to print a message to each person, inviting them to dinner.
*/


const guest: string[] = ["Hamza", "Haris", "Mudassir"];

for (let i = 0; i < guest.length; i++) {
    console.log(`Hello ${guest[i]}, you are invited to the dinner`);    
}