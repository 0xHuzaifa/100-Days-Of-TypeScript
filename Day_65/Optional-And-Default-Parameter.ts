
/**********************************
 * OPTIONAL AND DEFAULT PARAMETER *
**********************************/

// Optional Parameter
function greetOptional(name: string, age?: number) {
    if (age !== undefined) {
        console.log(`Hello ${name}, You are ${age} year old`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greetOptional('Faraz');
greetOptional('Huzaifa', 23);

// Default Parameter 
function greetDefault(name: string, age = 25) {
    console.log(`Hello ${name}, You are ${age} years old`);
}

greetDefault('Huzaifa')
greetDefault('Faraz', 24)