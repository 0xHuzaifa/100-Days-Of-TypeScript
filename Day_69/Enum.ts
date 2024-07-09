
/*********
 * ENUMS *
*********/

enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

const today: Days = Days.Saturday;
console.log(`Today is ${Days[today]}`);
