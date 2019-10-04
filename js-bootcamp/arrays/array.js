const notes = ['Note 1', 'Note 2', 'Note 3'];

// Get length of array (how many items in array)
console.log(notes.length); // 3


// Accessing items in array
console.log(notes[0]); // Note 1
console.log(notes[22]); // undefined
console.log(notes[notes.length - 1]); // Note 3

console.log('\n');

// Add items to end of array
console.log('Push: ', notes.push('Note 4'));

console.log('Push: ', notes);
console.log('\r');

// Remove last item of an array
console.log('Pop: ', notes.pop()); // returns the item that is being removed. We can store this item in a variable for later use if we want

console.log('Pop: ', notes);
console.log('\r');

// Removes item at the begining of an array
console.log('Shift: ', notes.shift()); // returns the item that is being removed. We can store this item in a variable for later use if we want

console.log('Shift: ', notes);
console.log('\r');

// Adds item to begining of array
console.log('UnShift: ', notes.unshift('Note 0'));

console.log('UnShift: ',notes);
console.log('\r');

// Removes item in array. First argument is the position. Second is how many items you want to remove
console.log('Splice Remove: ', notes.splice(1, 1));

console.log('Splice Remove: ', notes);
console.log('\r');

// Adds item to an array. First argumen is the position. Second is how many items to be removed (0 means no items to be removed)
// Last argument is what we want to add.
console.log('Splice add Note 5: ', notes.splice(1, 0, 'Note 5'));

console.log('Splice add Note 5: ', notes);
console.log('\r');

// Replace item in array with new value using bracket notation
console.log('Bracket replace: ', notes[2] = 'Note 6');

console.log('Bracket replace: ', notes);
console.log('\r');

// Add item to array using bracket notation
console.log('Bracket replace: ', notes[3] = 'Note 7');

console.log('Bracket replace: ', notes);
console.log('\r');

// Loop through array using forEach method
notes.forEach(function(item, idx){
    console.log(`${idx}: ${item}`);
});

console.log('\r');

// Count to 10 using for loop
for (let i = 0; i <= 10; i++) {
    console.log('Count to 10: ', i);
}

console.log('\r');

// Count to 0 starting with 5
for (let i = 5; i >= 0; i--) {
    console.log('Count to 0: ', i);
}

console.log('\r');

// Print items in array in order using for loop
for (let i = 0; i < notes.length; i++) {
    console.log(`Item ${i}: `, notes[i]);
}

console.log('\r');

// Print items in array in reverse order using for loop
for (let i = notes.length - 1; i >= 0; i--) {
    console.log(`Item ${i}: `, notes[i]);
}