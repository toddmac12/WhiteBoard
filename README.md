## Questions
### Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"
Here is an algorithm to solve this problem without recursion:

1. Initialize an empty string called output.
2. Iterate through each character c in the input string:
  1. If c is a space, append %20 to output.
  2. Otherwise, append c to output.
3. Return output.

Here is an example implementation in JavaScript:

```
function replaceSpaces(input) {
  let output = "";
  for (let c of input) {
    if (c === " ") {
      output += "%20";
    } else {
      output += c;
    }
  }
  return output;
}
```
Here is an algorithm to solve this problem with recursion:

1. If the input string is empty, return an empty string.
2. If the first character of the input string is a space, return %20 + replaceSpaces called on the rest of the input string.
3. Otherwise, return the first character of the input string + replaceSpaces called on the rest of the input string.

Here is an example implementation in JavaScript:
```
function replaceSpaces(input) {
  if (input.length === 0) {
    return "";
  }
  if (input[0] === " ") {
    return "%20" + replaceSpaces(input.substring(1));
  }
  return input[0] + replaceSpaces(input.substring(1));
}
```
Both of these algorithms will work for the input "Jasmine Ann Jones" and will produce the output "Jasmine%20Ann%20Jones".

### Question #2: Array Deduping
Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi" 7, 53]

Output: [7, 9, "hi", 12, 53]

Here is an algorithm to solve this problem without recursion:

1. Initialize an empty array called `output`.
2. Iterate through each element `x` in the input array:
    1. If `x` is not in `output`, append it to `output`.
3. Return `output`.

Here is an example implementation in JavaScript:

```
function removeDuplicates(input) {
  let output = [];
  for (let x of input) {
    if (!output.includes(x)) {
      output.push(x);
    }
  }
  return output;
}
```
Here is an algorithm to solve this problem with recursion:

1. If the input array is empty, return an empty array.
2. Initialize an array called 'output' with the first element of the input array.
3. Return 'output' concatenated with 'removeDuplicates' called on the rest of the input array, with the first element removed.
Here is an example implementation in JavaScript:

```
function removeDuplicates(input) {
  if (input.length === 0) {
    return [];
  }
  let output = [input[0]];
  return output.concat(removeDuplicates(input.slice(1)));
}
```
Both of these algorithms will work for the input [7, 9, "hi", 12, "hi



### Question #3: Compressing Strings
Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da"

```const compress = (str) => {
let counter = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      counter++;
} else {
      if (counter === 1) {
        result += `${str[i]}`
      } else {
        result += `${counter}${str[i]}`
      }
      counter = 1;
    } 

  }
  console.log('result', result)
  return result;
}

compress('aaabccdddda')
```


### Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true

```
const checkUnique = (str) => {
  const obj = {};
  let bool = true;

  for (let char of str) {
 if (!obj[char]) {
      obj[char] = 1;
    } else obj[char]++;
  }
  
  for (let key in obj) {
    if (obj[key] > 1) {
      bool = false;
    }
  }
return bool;
}

checkUnique("hello");
checkUnique("copywright");
```

```
const uniqString = (string) => {
  if (typeof string != 'string'){
    return "Please enter a string.";
  }
  if (string.length === 1){
    return true;
  } else {
    if (string.substring(1).match(string[0])){
      return false;
    } else {
      return  true && uniqString(string.substring(1));
    }
  }
}
```



### Question #5: Array Sorting
Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

Quick sort
Merge sort
Heap sort
Insertion sort
Bubble sort
Selection sort
You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

Example
Input: [9, 2, 7, 12]

Output: [2, 7, 9, 12]

```
const merge = (left, right) => {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length)
    if (left[leftIndex]< right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex ++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
    
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```


## Setup

* Clone repo
* Make an empty .env  file in the root directory
* Run npm install  in the root directory

## Test
* Run npm test in the _test_ directory
