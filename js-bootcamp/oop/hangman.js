// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console

const Hangman = function(word, guesses) {
    this.word = word;
    this.guesses = guesses;
}

const hangman1 = new Hangman('Dog', 2);

const hangman2 = new Hangman('condinsation', 6);

console.log(hangman1);
console.log(hangman2);