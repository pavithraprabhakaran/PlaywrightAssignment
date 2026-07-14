// Js to print the string "Testleaf" in reverse order

let string="Testleaf" // string we want to reverse
let rev="" // rev is like a container where we build the final reversed string.
for (let i = string.length - 1; i >= 0; --i) // string length -1 is to have proper So the last character "f" is at index 7, not 8.
    {
    rev = rev + string.charAt(i) 
    /* take the character at index i and add it to rev 
    When i changes:
    i = 7 -> string.charAt(7) -> f
    i = 6 -> string.charAt(6) -> a
    i = 5 -> string.charAt(5) -> e
        rev = rev + string[i] // this also can be used
*/
}
console.log(rev)
