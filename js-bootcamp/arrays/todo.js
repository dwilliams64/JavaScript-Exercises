// Challenge 1:
// Create an array with five todos
// Print message: You have x todos (x is the length of array)
// Print the first and second to last itmes -> Todo: walk the dog

// Challenge2:
// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

// Challenge 3:
/*

Print the following:

1. First item of array
2. Second item of array
and so on

*/

const todos = ['study JavaScript', 'finish Sass exercise', 'complete SVG exercise', 'feed the monkey', 'beat mega man x9'];

todos.splice(2, 1);
todos.push('do 50 jumping jax');
todos.shift();

console.log(todos);
console.log(`You have ${todos.length} todos!`);

console.log('\r');

todos.forEach(function(todo, idx) {
    console.log(`${idx + 1}. ${todo}`)
});

// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);