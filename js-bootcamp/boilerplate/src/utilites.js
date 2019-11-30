// Named export
// We can add the export keyword in front of any function or class to export a specific class or function
// Best used when you want to export multiple classes or functions to other files
// Can have as many named exports as you want in a file

// Named export example:
// export const add = (a) => (b) => a + b

const add = (a) => (b) => a + b

const square = (x) => x**2

// Default export
// Only exports 1 thing
// Can only have one default export per file
// Best used when a file only needs to export one thing
// I have seen this used when exporting a file that contains a class

// Default export example:
// export default square

// Exporting everything at once
// We export our named function add
// We also export the function square as a default export
export { add, square as default}