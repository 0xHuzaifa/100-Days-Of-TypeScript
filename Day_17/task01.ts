/*
* Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. 
* It should log each hobby with a statement saying you enjoy that hobby.

* Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, 
* providing a way to handle multiple inputs gracefully.
*/

function logHobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`I love enjoy ${hobby}`);
    });
}

logHobbies("Coding", "Sleeping", "Gaming");
