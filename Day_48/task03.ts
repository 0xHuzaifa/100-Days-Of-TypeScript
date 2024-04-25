/*
* Question 144: Explain the use of the Promise.all() method with an example.

* Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise 
* that resolves when all of the Promises in the iterable have resolved or when the iterable 
* contains no Promises. It is rejected if any of the passed Promises are rejected. 
* This method is useful for aggregating the results of multiple promises.
*/

const promise1 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolve');
    }, 2000);
});

const promise2 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolve');
    }, 1000)
});

const promise3 = new Promise<string>((resolve, reject) => {
    const randomNumber: number = Math.random();
    if (randomNumber > 0.5) {
        resolve("Promise 3 resolve")
    } else {
        reject(new Error('Promise reject'));
    }
});

Promise.all([promise1, promise2, promise3])
.then((result) => {
    console.log('All promises resolved');
}).catch((error: any) => {
    console.error('One of the promise rejected', error.message);
})
