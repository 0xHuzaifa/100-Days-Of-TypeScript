/*
* Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

* Explain & TIP: This program can handle any number of scores you give it, 
* and it tells you the average score. Handy for seeing how well you did overall!
*/


function averageScore(...scores: number[]): number {
    const num: number = scores.reduce((total, score) => total + score, 0) / scores.length;
    return num;
}

console.log("Average Number", averageScore(1, 2, 3, 4, 5, 9, 10, 15, 35, 50, 80, 20, 50, 65, 45, 100, 150, 33, 22, 41));
