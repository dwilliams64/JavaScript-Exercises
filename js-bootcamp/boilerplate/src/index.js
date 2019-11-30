// otherSquare is the function square from our utilites.js file
// We can call square anything we want when we import it into another file
// Since square is a default import we use the non {} syntax
// When using named exports we use the {} and can include multiple exports
import otherSquare, { add } from './utilites'
import screaming from './scream.js'

const add10 = add(10)

console.log(add10(2))

console.log(otherSquare(10))

console.log(screaming('Dog shit'))