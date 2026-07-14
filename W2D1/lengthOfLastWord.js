// 1. Length of the last word 

let s="Hello world" // string as be declarated 
let word=s.substring(6,12) // here we are internally getting the last word alone using the index and storing it in "word"
console.log("The last word is:", word) // Printing the last word to check whether we have cut out the last word correct.
console.log("The last word length is:", word.length) // print the length of the last word