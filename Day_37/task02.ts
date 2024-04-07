/*
* Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

* Explain & TIP: A common grading system assigns letter grades based on score ranges. 
* You can use an if-else-if chain to determine the grade.
*/


function grading(num: number) {
    if (num >= 20 && num < 40) {
        console.log(`Your grade is "D"`);
        
    } else if (num >= 40 && num < 60) {
        console.log(`Your grade is "C"`);
        
    } else if(num >= 60 && num < 80) {
        console.log(`Your grade is "B"`);
        
    } else if (num >= 80) {
        console.log(`Your grade is "A"`);
        
    } else {
        console.log(`You are Fail "F"`);
        
    }
}

grading(80)
grading(60)
grading(40)
grading(20)
grading(10)
grading(100)
