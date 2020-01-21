---

---

# Algorithm and Data Structures

## 1. Big O Notation

<img src="/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2020-01-20 at 12.06.54 PM.png" alt="Screen Shot 2020-01-20 at 12.06.54 PM" style="zoom: 33%;" />

<img src="/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2019-12-05 at 8.10.30 AM.png" alt="Screen Shot 2019-12-05 at 8.10.30 AM" style="zoom:33%;" />

- Analyzing complexity with big O can get complicated counting the operations that about to perform
- counting operations instead of time (depends on the machine for the speed)
- is a way to formalize fuzzy counting
- smaller terms don't matter
- allows to formally talk about how the runtime of an algorithm grows as the input grow
- algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

```txt
- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!
```



## Counting Operations

```javascript
/* Counting Operations */

// there 3 operations but does't matter what n is. so this is O(1)
function addUpTo(n) {
  return n * (n + 1) / 2;
}

// since it has a loop this will be O(n)

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(n)
function countUpAndDown(n) {
  console.log("Going up!");
  
  for(let i = 0; i < n; i++) {
    console.log(i);
  }
  
	console.log('At the top!\n Going down...');
	for(let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!")
}

// O(n2) --> since this is nested.
function printAllPairs(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}
```



## Rule of thumbs for BIG O

Constants don't matter

```javascript
o(2n) --> O(n)
O(500) --> O(1)
O(13n2) --> O(n2)
O(n + 10) --> O(n)
O(1000n + 50) --> O(n)
O(n2 + 5n + 8) --> O(n2)
```



### BIG O SHORTHANDS

1. Airthmetic operations are constant

2. Variable assignment is constant

3. Accessing element sin an array (by index) or object (by key) is constant

4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

   ```javascript
   // O(n)
   
   function logAtLeast5(n) {
     for (let i = 1; i <= Math.max(5, n); i++) {
       console.log(i);
     }
   }
   
   // O(1)
   function logAtMost5(n) {
     for(let i = 1; i <=Math.min(5, n); i++) {
       console.log(i)
     }
   }
   ```

   

## Space complexity(Inputs)

- you'll hear them auxiliary space complexity to refer to space require by the algorithm, not including space taken up by the inputs

- most primitives (boolean, numbers, undefined, null) are constant space

- String require O(n) space (where n is the string length)

- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

  ```javascript
// O(1) Space
  
  ```

function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
      total += arr[i]
    }
  	return total;
  }
  ```
  
  
  
  ```javascript
  // O(n) Space
  
  function double(arr) {
    let newArr = [];
    for(let i = 0; i< arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    return newArr;
  }
  ```



## Logarithms

- inverse of exponentiation

- certain searching algorithms have logarithmic time complexity

- efficient sorting algorithms involve logarithms

- recursion sometimes involves logarithmic space complexity

  ```javascript
  example: 
  
  log2(8) = 3 --> 2 ^ 3 = 8
  log2(value) = exponent --> 2 ^ exponent = value
  
  // Logarithmic time complexity is great!
  ```

  

## Summary

- to analyze the performance of an algorithm, we use Big O notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? Quadratic? Constant? )
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm



## BUILT-IN DATA STRUCTURES

1. Objects (Unordered Lists)

   - Unordered, key value pairs!

     ```javascript
     // Objects are fast and quick
     let instructor = {
           firstName: "Kelly",
           isInstructor: true,
           favoriteNumbers: [1,2,3,4]
     }
     
     // Objects methods -- remember there is no order in objects
     Object.keys(instructor) --> O(n)
     Object.values("Kelly") --> O(n)
     Object.entries(instructor) --> O(n)
     Object.hasOwnProperty("firstname") --> O(1)
     
     ```

   - When you don't need order

   - When you need fast access / insertion and removal

     ```javascript
     Insertion -  O(1)
     Removal -  O(1)
     Searching -  O(n)
     Access -  O(1)
     ```

2. Arrays (Ordered Lists)

   - When you need order

   - When you need fast access / insertion and removal

     ```javascript
     let names = ['Michael', 'Melissa', 'Andrea'];
     								0						1					2				"Dennis" 3
     
     
     
     // inserting or removing at the beginning of the array cause the problem because of the indexes
     // need to reindex all the elements/value in the array
     ```

     ```javascript
     Insertion - it depends ...
     Removal - it depends ...
     Searching - O(n)
     Access - O(1)
     ```

   - Remember: Push and Pop is faster than the shift / unshift

   - Built in array methods

     ```javascript
     push - O(1)
     pop - O(1)
     shift - O(n)
     unshift - O(n)
     concat - O(n)
     slice - O(n)
     splice - O(n)
     sort - O(n * log n)
     forEach/map/filter/reduce/etc. - O(n)
     ```

# Algorithm and Problem Solving Patterns

- A **process** or **set of steps** to accomplish a certain task.
- It's the foundation for being a successful problem solving and developer

1. Device a plan for solving problems
2. Master common problem solving patterns



## Problem solving strategies

### 1. Understand the problem

  - Can I restate the problem in my own words?
  - What are the inputs that go into the problem?
  - What are the outputs that should come from the solution to the problem?
  - Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
  - How should I label the important pieces of data that are a part of the problem?

### 2. Explore Examples

- Start with Simple Examples

- Progress to More Complex Examples

- Explore Examples with Empty Inputs

- Explore Examples with Invalid Inputs

  ```javascript
  // write a function which takes in a string and returns counts of each character in the string.
  
  charCount("aaaa"); // {a:4}
  charCount("hello"); // {h:1, e:1, l:2, o:1}
  
  // Progress to More Complex Examples
  "my phone number is 123456" //--> string on a number
  "Hello hi" //--> capitalcase
  
  // explore examples with empty inputs and invalid inputs
  charCount("");
  charCount(null);
  ```

  

### 3. Break it down

- Explicitly write out the steps you need to take.

- This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

  ```javascript
  // write a function which takes in a string and returns counts of each character in the string.
  
  charCount("Your PIN number is 1234!")
  /* 
  	{
  		1: 1,
  		2: 1,
  		3: 1,
  		4: 1,
  		b: 1,
  		e: 1,
  		i: 2,
  		m: 1,
  		n: 2,
  		o: 1,
  		p: 1,
  		r: 2,
  		s: 1,
  		u: 2,
  		y: 1
  	}
  */
  
  
  function charCount(str) {
    // do something
    // return object with keys (lowercase and alpha numeric characters)
    
  }
  
  function charCount(str) {
  	// make object to return at the end
    // loop over string, for each character
    	// if the char is a number/letter AND key in object, add one to count
    	// if the char is a number/letter AND not in the object, add it to object and set value to 1
    	// if character is something else (space, period, etc.) don't do anything
    // return object at end
  }
  ```

### 4. Solve/Simplify

- solve the problem if you can't solve a simpler problem
- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

```javascript
function charCount(str) {
  // do something
  // return object with keys (lowercase and alpha numeric characters)
  let result = {}
  
  for(let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a number/letter AND key in object, add one to count
    if(result[char] > 0) {
      result[char]++;
    }
    // if the char is a number/letter AND not in the object, add it to object and set value to 1
    else {
      result[char] = 1;
    };
  }
  // return object at end
  return result
}
```



### 5. LOOK BACK & REFACTOR

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem? 

```javascript
function charCount(str) {
  let obj = {};
  for(let char of str) {
    let char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// Character code also works on here for time complexity
// Non regular expressions is faster than the regular expressions
```



# Problem Solving Patterns

## A. Frequency Counter

- this pattern uses objects or sets to collect values/frequencies of values rather than using an array

- this can often avoid the need for nested loops or O(N^2) operations with arrays / strings

  ```javascript
  /* 
  Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
  */
  
  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false (must be same frequency)
  
  // NOT THE BEST SOLUTION
  function same(arr1, arr2){
      if(arr1.length !== arr2.length){
          return false;
      }
    	// O(n2)
      for(let i = 0; i < arr1.length; i++){ // --> nested loop
          let correctIndex = arr2.indexOf(arr1[i] ** 2) //--> a loop
          if(correctIndex === -1) {
              return false;
          }
          arr2.splice(correctIndex,1)
      }
      return true
  }
  
  // REFACTORED
  function same(arr1, arr2){
    	// if they don't have the same length then return false
      if(arr1.length !== arr2.length){
          return false;
      }
  		
    	// use an object to construct an array/string to compare each objects.
    	let frequencyCounter1 = {}
      let frequencyCounter2 = {}
      
      // O(n)
      // 2 separate loop is better than two nested loop
      for(let val of arr1){
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        	// [1,2,3,2]
        	// 1 = (1 || 0) + 1 ----> 1:1
        	// 1 = NAN/0 + 1
        	// 2 = (2 || 0) + 1 ----> 2:1
  	      // 3 = (3 || 0) + 1 ----> 3:1
        	// 2 = (2 || 0) + 1 ----> 2:2
      	// result {1:1, 2:2, 3:1}
      }
      for(let val of arr2){
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
      }
      for(let key in frequencyCounter1){
        	// if the key squared  in frequencyCounter1 is not equal in frequencycounter2
          if(!(key ** 2 in frequencyCounter2)){
              return false
          }
        	// if frequencyCounter2 key squared is not equal frequencyCounter key.
          if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
              return false
          }
      }
    	console.log(frequencyCounter1);
  	  console.log(frequencyCounter2);
      return true
  }
  
  same([1,2,3,2], [9,1,4,4])
  same([1,2,3,2,5], [1,4,9,4,11]) //--> false
  ```
  
  ```javascript
  ANAGRAMS
  
  /*
  Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
  */
  
  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram("rat","car") // false) // false
  validAnagram('awesome', 'awesom') // false
  validAnagram('qwerty', 'qeywrt') // true
  validAnagram('texttwisttime', 'timetwisttext') // true

  function validAnagram(arr1, arr2) {
    //checking the length
    if(arr1.length !== arr2.length) {
      return false;
    }
  
    let lookup = {};
  
  //  construct the object first using the loop
    for (let val of arr1) {
      // if letter exists, increment, otherwise set to 1
      lookup[val] ? lookup[val] += 1 : lookup[val] = 1;
    }
  
    console.log('this is the lookup', lookup)
    
  //  compare each character to the lookup object
    for (let val2 of arr2) {
      // can't find letter or letter is zero then it's not an anagram
      if(!lookup[val2]) {
        return false
      } else {
        lookup[val2] -= 1;
      }
    }
    return true;
  }
  /* {a:3, n:1, g:1, r:1, m:1} */
  validAnagram('anagram', 'nagaram')
  ```

### SUMMARY

- check the length first
- Make an object for tally scoring
- Loop the first parameter that will check to tally score like +1 or = 1.
- Loop the second parameter and then compare the tally score to the object

## B. Multiple Pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition
- very efficient for solving problems with minimal space complexity as well

```javascript
[-4,-3,-2,-1,0,1,2,5]

"alksjdalksjdlkasjdlks"
```

```javascript
/*
	Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) //undefined
```

```javascript
// NOTE THE BEST SOLUTION

function sumZero(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

sumZero([-4,-3,-2,-1,0,1,2,5])


function sumZero(arr) {
  let left = 0;
  let right =arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]]
    }
    else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

```javascript
Another Example
/*
	implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

contUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) //0
countUniqueVales([-2,-1,-1,0,1]) //4

// Best answer --> O(n)
function contUniqueValues(arr) {
	let i = 0;
  if (arr.length === 0) {
    return 0;
  }
  
  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
			arr[i] = arr[j]
    }
    return i + 1;
  }
}
```

## C. Sliding Window Pattern

- this pattern involves creating a window which can either be an array or number from one position to another
- depending on a certain condition, the window either increases or closes(and a new window is created)
- very useful for keeping track of a subset of data in an array/string etc.

```javascript
/* 
	Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
*/

maxSubarraySum([1,2,5,2,8,1,5],2) //10
maxSubarraySum([1,2,5,2,8,1,5],4) //17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2], 4) //13
maxSubarraySum([], 4) // null
```

```javascript
// NOT THE BEST SOLUTION
function maxSubarraySum(arr, num) {
  if(num > arr.length) {
    return null;
  }
  let max. = -Infinity;
  for(let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for(let j = 0; j < num; j++) {
      temp += arr[i + j];      
    }
    if(temp > max) {
    	max = temp;
	  }
  }
  return max;
}

```

```javascript
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([1,2,5,2,8,1,5],2) //10
								-		-
  								-2-		-+1
```

## D. Divide and Conquer

- this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
- this pattern can tremendously decrease time complexity

```javascript
/*
	Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
*/

search([1,2,3,4,5,6], 4) // 3
search([1,2,3,4,5,6], 6) // 5
search([1,2,3,4,5,6], 11) // -1
```

```javascript
// NOT THE BEST SOLUTION

// not the best because it loops the whole array.
function search(arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
}


```

```javascript
function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement. = array[middle];
    
    if(array[middle] < val) {
      min = middle + 1;
    }
    else if (array[middle] > val) {
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}
```



# Sorting

## 1. Recursion

- A process (a function in our case) that calls itself

it's everywhere:

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithm
- Object traversal
- We will see it with more complex data structures
- cleaner alternative to iteration

### The Call Stack

- there is a built in data structure that manages what happens when functions are invoked
- it's a stack data structure 
- Anytime a function is invoked it is placed (pushed) on the top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

```javascript
function takeShower() {
  return "Showering!"
}

function eatBreakfast() {
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"]
  return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
  takeShower()
  eatBreakfast()
  console.log("ok ready to go to work!")
}

wakeUp();
```

### First Recursive Function Example

- invoke the same function with a different input until you reach your base case
- **BASE CASE** - the condition when the recursion ends. This is the most important concept to understand.
- Essential parts of a recursive function:
  1. Base Case
  2. Different Input

```javascript
// Recursion solution
function countDown(num) {
  // this is the base case
	if(num <= 0) {
		console.log("all done!");
    return;
	}
  // different input
	console.log(num);
	num--;
	countDown(num);
}

countDown(5)

// REFACTORED without recursion
function countDown(num) {
  for(let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!')
}
```

### Second Recursive Function Example

```javascript
/*
	can you spot the base case?
	do you notice the different input?
	what would happen if we didn't return?
*/

function sumRange(num) {
  //base case
  if(num === 1) return 1;

  // different input or recursive call
  return num + sumRange(num - 1);
}

sumRange(3)
/*
	sumRange(3 + sumRange(3 - 1))
	sumRange(3 + 2 + sumRange(2 -1))
	sumRange(3 + 2 + 1) ===> 6
*/
```

### Factorial Iteratively

```javascript
// not recursive solution
function factorial(num) {
  let total = 1;
  for(let i = num; i > 0; i--) {
    total *= i
  }
  return total;
}

factorial(3)

// Recursive way
function factorial(num) {
  //base case
  if(num === 1) {
    return 1
  }
  // recursive call
	return num * factorial(num - 1)
}

factorial(3)
```

### Common Recursion Pitfalls

- No base case or wrong base case
- returning the wrong recursive call
- return in the base case was not called

### Helper Method Recursion

- an outer function which is not recursive and then the inner function is recursive. 
- more straight forward

```javascript
function outer(input) {
	let outerScopedVariable = []
	
	function helper(helperInput) {
		helper(helperInput--)
	}
	
	helper(input)
	return outerScopedVariable;
}

// Helper method Recursion
function collectOddValues(arr) {
  let result = [];
  
  // this is the recursive method
  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }
    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr);
  return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
```

### Pure Recursion

- the function itself is recursive and don't have any external function or no nested function

```javascript
function collectOddValues(arr) {
	let newArr = [];
  
  if(arr.length === 0) {
    return newArr;
  }
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5]);
[1].concat(collectOddValues([2,3,4,5]))
	[].concat(collectOddValues([3,4,5]))
		[3].concat(collectOddValues([4,5]))
			[].concat(collectOddValues([5]))
				[5].concat(collectOddValues([]))
```

### Tips

- For arrays, use methods like slice,the spread operator, and concat that make copies of arrays so you don't mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of string
- To make copies of objects use Object.assign, or the spread operator