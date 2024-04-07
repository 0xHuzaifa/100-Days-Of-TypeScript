/*
* Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

* Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, 
* hours are in 24-hour format, so 12 PM is 12.
*/

function greeting() {
    const date = new Date();

    const hour = date.getHours()

    if (hour > 6 && hour < 12) {
        console.log(`Good Morning`);
        
    } else if(hour > 12) {
        console.log(`Good Afternoon`);
        
    } else if(hour > 17) {
        console.log(`Good Evening`);
        
    } else if (hour > 20) {
        console.log(`Good Night`);
        
    }
}

greeting()