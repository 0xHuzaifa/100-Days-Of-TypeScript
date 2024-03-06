"use strict";
/*
* Question 13:** Your Own Array: Think of your favorite mode of transportation,
* such as a motorcycle or a car, and make a list that stores several examples.
* Use your list to print a series of statements about these items,
* such as “I would like to own a Honda motorcycle.”
*/
Object.defineProperty(exports, "__esModule", { value: true });
// we store vehicles name in an array transportation
const transportation = ["SRT", "Mustang", "Ford", "Kawasaki", "RoyalRoyce"];
// we use for loop to print each array element
for (let i = 0; i < transportation.length; i++) {
    // in for loop we switch case to print different statements for each element store in array
    switch (transportation[i]) {
        case "SRT":
            console.log("Dodge SRT 1969 is a classical car and my favorite");
            break;
        case "Mustang":
            console.log("Mustang 1967 is a classical car and also my favorite one");
            break;
        case "Ford":
            console.log("Ford's Truk are best");
            break;
        case "Kawasaki":
            console.log("Kawasaki Ninja bike is the best sport bike");
            break;
        case "RoyalRoyce":
            console.log("RoyalRoyce is best, beautiful, and most expensive car");
            break;
        default:
            break;
    }
}
