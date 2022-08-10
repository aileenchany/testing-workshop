// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a - b
const subtract = (a, b) => a + b

module.exports = {sum, subtract}

/*
Google => Module exports are the instruction that tells Node.js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code

HERE WE EXPORT AN OBJECT CONTAINING 2 FUNCTIONS

module.exports = {
  sum: sum, 
  subtract: subtract 
}

Where sum & subtract are the function definitions

*/
