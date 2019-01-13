// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

//Solution 1
const promise =  new Promise((resolve, reject) => {
  setTimeout(() => resolve('success'), 4000);
});

//Solution 2
const promise = new Promise(resolve, 4000, 'success');



// #2) Run the above promise and make it console.log "success"

//Solution 1
const promise =  new Promise((resolve, reject) => {
  setTimeout(() => resolve('success'), 4000);
});

promise.then(result => console.log(result));

//Solution 2
const promise = new Promise(resolve, 4000, 'success');


promise.then(result => console.log(result));


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

//Solution
const promise = Promise.resolve(setTimeout(() => console.log('success'), 4000));


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

//Solution

//Not real solution. Promise still gets resolved even though console.log displays
Promise.reject('failed').catch(() => console.log('Oooops something went wrong'));

//Real Solution
Promise.reject('failed').catch(console.log('Oooops something went wrong'));



// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

//Solution
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(reqs => reqs.json())
}))
  .then(data => console.log(data))
  .catch((e) => console.log(`It didn't work.....: ${e}`));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

const urls = [
  'https://swapi.co/api/peopl/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(reqs => reqs.json())
}))
  .then(data => console.log(data))
  .catch(e => console.log('It didn\'t work.... ', e));