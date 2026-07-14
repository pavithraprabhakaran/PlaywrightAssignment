// Write a function to check if two strings are anagrams.

function isAnagram(str1, str2) {

    str1 = str1.split("").sort().join("") // her the value is split, sort and joint
    str2 = str2.split("").sort().join("")
    return str1===str2 // return value to the function
}
console.log(isAnagram("listen", "silent")); // print the result
console.log(isAnagram("hello", "world"));
/**
 > split("") — empty string separator
    Splits between every single character. No character exists between the quotes, so JS breaks the string apart at every possible position.
      example: "listen".split("")
      ['l', 'i', 's', 't', 'e', 'n']  → 6 elements, one per character

> split(" ") — space character separator
       Splits at each space, breaking the string into words (or chunks between spaces). The space itself gets consumed/removed as the delimiter.
       example1: "listen".split(" ")
        ['listen']  → only 1 element! No space exists in "listen", so there's nothing to split on — the whole string stays as one chunk
       example2: "hello world".split(" ")
        ['hello', 'world']  → 2 elements, split at the space
 */