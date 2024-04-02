/*
* Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

* Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, 
* which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.
*/


function findNewYearDate() {
    const currentDate = new Date();

    const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1);

    const timeDifference = nextYear.getTime() - currentDate.getTime();

    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 *24) );

    return daysLeft
}

console.log(`There are ${findNewYearDate()} days left in the New Year`);
