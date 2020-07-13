// 1. Turn an array of numbers into a total of all the numbers

function total(arr) {
    // your code here

    return arr.reduce((sum, num) => sum + num);
}
 
console.log(total([1,2,3])); // 6

// Alternate syntax solution

function total(arr) {
  // your code here

  return arr.reduce((sum, num) => sum += num);
}


// 1. Bonus
// Turn an array of numbres into a product of all numbers (multiply all numbers)

function product(arr) {
  // your code here

  return arr.reduce((product, num) => {
    return product * num;
  }, 1);
}

console.log(product([2,4,5])); // 40


// 2. Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    // your code here

    return arr.reduce((str, elm) => {
      return str + elm
    }, ""); 
}
 
console.log(stringConcat([1,2,3])); // "123"

// Other syntax solution

function stringConcat(arr) {
  // your code here

  return arr.reduce((str, elm) => {
    // Does the same thing as other code
    // just a differnt syntax

    return str += elm
  }, ""); 
}


// 3. Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    // your code here

    return arr.reduce((tally, votes) => {            
      return tally += votes.voted === true ? 1 : 0;
    }, 0);    
}
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); // 7

// Using type coercion for solution

function totalVotes(arr) {
  // your code here

  return arr.reduce((tally, votes) => {
    // all voted properties are boolean values

    // In JavaScript when you perform an operation with
    // numbers and booleans the boolean will be convered to a number

    // the numerical value for true is 1 and for false 0
    
    return tally += votes.voted ;
  }, 0);    
}