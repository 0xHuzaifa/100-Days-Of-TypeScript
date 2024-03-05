/*
* Question 12: Greetings: Use the array from Exercise 11. 
* Instead of just printing each person’s name, print a message to them. 
* The message should be the same for each person, but personalized with their name.
*/

/*
* @author Huzaifa Ahmed
* Programming Language TypeScript
*/

// store names in string type array
let name: string[] = ['Huzaifa', 'Shuja', 'Moiz', 'Faraz', 'Bilal'];

// Printing each person name with a message
for (let i = 0; i < name.length; i++) {
    console.log(`Hello ${name[i]}, How are you?`);
}