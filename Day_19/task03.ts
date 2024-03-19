/*
* Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

* Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, 
* giving us an idea of how well someone did overall.
*/

const grades: number[] = [50, 60, 66, 80, 90, 75, 86, 83, 76];

const averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log(averageGrade);
