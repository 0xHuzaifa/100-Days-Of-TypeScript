/*
* Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

* Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() 
* is called when a Promise is rejected. Together, they provide a powerful and readable way to 
* handle asynchronous success and error scenarios.
*/

const myPromise = new Promise<string>((resolve, reject) => {
    const randomNumber: number = Math.random();

    if (randomNumber > 0.5) {
        resolve('Promise resolved');
    } else {
        reject(new Error('Promise rejected'))
    }
});

myPromise.then((result) => {
    console.log(result);
    
}).catch((error: any) => {
    console.error('Error', error.message);
});
