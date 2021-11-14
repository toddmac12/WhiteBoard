// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

//const uniqString =(string) => {
//Termination Case
//If not a string return error message"Enter a string only"

//Base Case
//If string is one return true

//Else Case
// get the first character of the string
// if first charactor matches the character in the string return false
// else return true  && run function again with substring starting at index 1


export default function uniqString(string) {

  if (typeof string != 'string') {
    return "Enter a string only.";
  }
  if (string.length === 1) {
    return true;
  } else {
    if (string.substring(1).match(string[0])) {
      return false;
    } else {
      return true && uniqString(string.substring(1));
    }
  }
}