/*
* Question 62: Making a Student Template: Create a blueprint for student information, including their 
* name, age, and the classes they're taking, and then fill in this blueprint with an example student.

* Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind 
* of information, making your code more organized.
*/

interface Student {
    name: string,
    age: number,
    class: number
}

const student: Student = {
    name: "huzaifa",
    age: 22,
    class: 17
}

console.log(`Student Name: ${student.name}, Student Age: ${student.age}, Student Class: ${student.class}`);
