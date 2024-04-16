/*
* Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

* Explain & TIP: To find a specific character in a string, you can iterate through each character and
* use a condition to check for vowels. The loop can stop once a vowel is found.
*/
let inputString = 'Hwwwwllo World!';
function findVowel(str) {
    const vowel = 'aeiouAEIOU';
    for (const char of str) {
        if (vowel.includes(char)) {
            console.log(`First vowel founded: ${char}`);
            break;
        }
        console.log(char);
    }
}
findVowel(inputString);
export {};
