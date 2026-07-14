//2. Input: s = " fly me to the moon "

let string = " fly me to the moon " // string as be declarated 
let lWord=string.split(" ") // using split making †he word in array form
console.log(lWord)
let cWord=lWord.slice(5,6) // using array getting the last word alone
console.log(cWord) // this will give o/p: moon
let sWord= cWord [0] // [] is used to store the array value, to get one value from it, use an index [0]
console.log("The last word length is:", sWord.length) // print the length of the last word
