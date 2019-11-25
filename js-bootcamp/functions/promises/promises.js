// A promise can be used in place of a call back function
// Useful when working with HTTP requests


// Creates a new promise
const myPromise = new Promise((resolve, reject) => {
    // We call resolve(....) when what we were doing asynchronously was successful, and reject(...) when it failed

    // We can only return resolve() or reject() not both
    setTimeout(() => {
        //    resolve('Success!!!');
           reject('Failed'); 
    }, 2000);
});

// Calls on the promise
myPromise.then((message) => {

   // message is whatever we passed in the resolve(...) function above
   // works the same way with reject(...) 
   console.log(`Missin was a ${message}`)
}, (err) => {

    // if the promise returns reject(...) we can handle the error in here
    console.log(`Mission ${err}`);
});