/*
* Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows
* what a computer programmer knows, like coding languages, tools, and software frameworks. 
* Find a way to get three specific skills from this list and show them.

* Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with
* and understand specific pieces of information.
*/

const person = {
    programmingLanguages: ["Solidity", "JavaScript", "TypeScript"],
    frameworks: ["Hardhat", "Truffle", "Foundry", "React", "Next.js"],
    tools: ["Git", "GitHub", "Jira", "Microsoft", "Azure"]
}

const {programmingLanguages, frameworks, tools} = person;

console.log(`Language ${programmingLanguages[0]}, framework ${frameworks[2]}, tool ${tools[1]}`);
