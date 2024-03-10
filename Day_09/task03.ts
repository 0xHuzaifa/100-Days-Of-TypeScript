/*
* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/


let alienColor: string = "green";
if (alienColor == "green") {
    console.log("You earned 5 points.");
} else if (alienColor == "yellow") {
    console.log("You earned 10 points.");
} else if (alienColor == "red") {
    console.log("You earned 15 points.");
}

alienColor = "yellow";
if (alienColor == "green") {
    console.log("You earned 5 points.");
} else if (alienColor == "yellow") {
    console.log("You earned 10 points.");
} else if (alienColor == "red") {
    console.log("You earned 15 points.");
}

alienColor = "red";
if (alienColor == "green") {
    console.log("You earned 5 points.");
} else if (alienColor == "yellow") {
    console.log("You earned 10 points.");
} else if (alienColor == "red") {
    console.log("You earned 15 points.");
}

