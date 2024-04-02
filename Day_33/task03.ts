/*
* Question 99: Generate a date object representing your next birthday and log it to the console.

* 1Explain & TIP: When creating a Date object for a future event like a birthday, 
* you might need to adjust the year based on whether the birthday has already occurred this year or not.
*/

function birthday() {
    const currentDate = new Date();
    const specificDate = new Date(2024, 4, 15); // May, 15, 2024

    const currentTime = currentDate.getTime();
    const birthdayTime = specificDate.getTime();
    const difference = birthdayTime - currentTime;

    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    
    
    return daysLeft;
}

console.log(`There are ${birthday()} days left in my birthday`);
