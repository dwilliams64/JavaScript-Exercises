// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function getStarship(){
  const resp = await fetch('https://swapi.co/api/starships/9/');
  const data = await resp.json();
  console.log(data);
}

getStarship();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}


const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>{
    return grabData(url);
  }      

  ));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
}

async function grabData(url){
  const resp = await fetch(url);
  const data = await resp.json();  
  return data        
}


getData();

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'

const urls = [
  'https://jsonplaceholder.typicode/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>{
      return grabData(url);
    }      
  
    ));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);

    async function grabData(url){
      const resp = await fetch(url);
      const data = await resp.json();  
      return data        
    }

  } catch(e) {
    console.log('oooooooopss: ', e);
  }
}  

getData();
