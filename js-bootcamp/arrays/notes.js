const notes = [
    {
        title: 'Wash dishes',
        body: 'Remember to was dishes'
    },

    {
        title: 'Clean bathroom',
        body: 'Rembmer to unclog drains and clean bathtub'
    },

    {
        title: 'Pay electric bill',
        body: 'Electric bill is due'
    }
];

// function findNote(note, title) {
    // const idx = note.findIndex(function(note) {
        // return note.title.toLowerCase() === title.toLowerCase();
    // });
// 
    // return note[idx];
// }



console.log(findNote(notes, 'Pay electric bill'));
console.log(findNote(notes, 'balls'));