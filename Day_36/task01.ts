/*
* Question 106: Determine if a given year is a leap year using comparison operators.

* Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. 
* This rule helps align our calendar years with the Earth's orbital period.
*/

function leapYear(year: number) {
    console.log(year % 4 === 0? `Leap year` : `Not a leap year`);
}

leapYear(2024)
leapYear(2025)
leapYear(2026)
leapYear(2027)
leapYear(2028)
