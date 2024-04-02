/*
* Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

* Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way.
* The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.
*/
const currentDate = new Date();
console.log(currentDate.toLocaleDateString('en-GB'));
console.log(currentDate.toLocaleDateString('en-US'));
function getCurrentDateFormatted() {
    const date = new Date();
    const today = String(date.getDay()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${today}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
export {};
