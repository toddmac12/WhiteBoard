## Questions
### Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"

```const stringToURL1 = (string) => {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      newStr += "%20"
    } else newStr += string[i];
  }
  console.log('newStr', newStr)
  return newStr;
}

stringToURL1("Jasmine Ann Jones")```

### Question #2: Array Deduping
Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi" 7, 53]

Output: [7, 9, "hi", 12, 53]

```const arrayDedupe = (arr) => {
  const newArr = [...new Set(arr)]
  console.log('new set', newArr)
}

arrayDedupe([7, 9, "hi", 12, "hi", 7, 53])```

```//Filter
const arrayDedupe = (arr) => {
  const newArr = arr.filter((c, i) => arr.indexOf(c) === i);
  console.log('newArr', newArr);
}
arrayDedupe([7, 9, "hi", 12, "hi", 7, 53]);```

### Question #3: Compressing Strings
Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da"

const compress = (str) => {
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


### Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true

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