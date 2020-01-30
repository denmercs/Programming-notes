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
  
  ```javascript
  console.log(sameFrequency(182, 281)) // true
  console.log(sameFrequency(34, 14)) // false
  
  function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) {
      return false;
    }
    
    let counter = {}
    
    
    num1 =  num1.toString().split("");
    num2 = num2.toString().split("");
    
    for(let val of num1) {
      val = parseInt(val);
      counter[val] ? counter[val] += 1 : counter[val] = 1;
    }
    
    for(let val2 of num2) {
      val2 = parseInt(val2);
      if(!counter[val2]) {
        return false;
      } else {
        counter[val2] -= 1;
      }
      
    }
    return true; 
  }
  
  sameFrequency(182, 281) // true
  sameFrequency(34, 14) // false
  sameFrequency(3589578, 5879385) // true
  sameFrequency(22, 222) // false
  
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



# Linear Search

list of linear search in Javascript:

- indexOf
- includes
- find
- findIndex

```javascript
[1,			2,			3,			4,			5]
|start|	-->					-->					-->			// linear search from left to right
```

```javascript
/*
Linear Search Pseudocode

- This function accepts an array and a value 
- loop through the array and check if the current array element is equal to the value
- if it is, return the index at which the element is found
- if the value is never found, return -1 
*/

// time complexity --> O(n)
function linearSearch(arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
}

linearSearch([34,56, 1,2], 1);
```



```python
names = [
  'Artem',
  'Austin',
  'Chad',
  'Dustin',
  'Elissa',
  'Emily',
  'Jamar',
  'Katherine'
]

def linear_search(array, value):
  for name in array:
    if name == value:
      return True
  return False

```



### Linear Search Big O

```javascript
O(1)			O(n)				O(n)
Best			Average			Worst
```

# Binary Search

- much faster form of search
- rather eliminating on element at a time, you can eliminate half of the remaining element at a time
- **Binary search only works on sorted arrays**

```javascript
// let's search for 6

[1, 		3, 		4, 		6, 		7, 		8, 		9]
^							^												^
|							|												|
left				too small								right

// is 4 > 6? --> yes
							^									^			^
  						|									|			|
  					left						too big	right
// is 7 > 6 --> yes
              ^		^				^
  						|		|				|
           left correct	right 
```

```javascript
/*
Binary Search PseudoCode

- a function accepts a sorted array and a value
- create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
	- create a pointer in the middle
	- if you find the value you want, return the index
	- if the value is too small, move the left pointer up
	- if the value is too large, move the right ointer down
- if you never find the value return -1
*/

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
```

```python
names = [
  'Artem',
  'Austin',
  'Chad',
  'Dustin',
  'Justin',
  'Elissa',
  'Emily',
  'Jamar',
  'Katherine'
]

def binary_search(array, value):
	start = 0
  end = len(array) - 1
  
  found = False
  
  while not found and start <= end:
      middle = (start + end) // 2
      
      # if found break
      if array[middle] == value:
        found = True
      else:
        if value < array[middle]:
          # search lower half
          end = middle - 1
        else:
          # search upper half
          end = middle + 1

	return found
      


```



## Binary Search Big O

```
O(log n)																					O(1)
worst and average case													Best Case
```

# Naive or Basic String Search

```javascript
/*
- suppose you want to count the number of times a smaller string appears in a longer string
- a straightforward approach involves checking pairs of characters individually
*/
long string:									short string
wowomgzomg												omg

```

```javascript
PSEUDOCODE
/*
	- loop over the longer string
	- loop over the shorter string
	- if the characters don't match, break out of the inner loop
	- if you complete the inner loop and find a match, increment the count of matches
	- return the count
*/

function naiveSearch(long, pattern) {
  let count = 0;
  for(let i = 0; i < long.length; i++) {
		for(let j = 0; j < pattern.length; j++) {
      if(short[j] !== long[i+j]) {
        break;
      }
      if(j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol")
```



# Elementary/Quadratic Sorting Algorithms 

## (Bubble, Selection, Insertion)



## Sorting

https://www.toptal.com/developers/sorting-algorithms

https://visualgo.net/en

- sorting is the process of rearranging the items in a collection (ex. array) so that the items are in some kind of order
- sorting numbers from smallest to largest
- sorting names alphabetically
- sorting movies based on release year
- sorting movies based on revenue

```javascript
function sort(arr) {
	return arr;
}

sort([23,45,6,12,13]) --> [6,12,13,23,45]

```

## Javascript has a sort method

- it does, but it doesn't always work the way you expect.

```javascript
["Steele", "Colt", "Data Structures", "Algorithm"].sort() 
--> ["Algorithm", "Colt", "Data Structures", "Steele"]

[6,4,15,10].sort() --> [10,15,4,6]  // this is based on the character unicode
```

```javascript
//Example:
function numberCompare(num1, num2) {
  return num1 - num2
}

[6,4,15,10].sort(numberCompare);

// sort by the length of the string
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithm"].sort(compareByLen) 
```

1. ## Bubble Sort (Swap Maximum)

   - sorting algorithm where the largest values bubble up to the top

```javascript
// ES5
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2]
  arr[index2] = temp
}

//ES2015
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}
```

```javascript
/*
	BubbleSort Pseudocode
	
	- start looping from with a variable called i in the end of the array towards the beginning
	- start an inner loop with a variable called j from the beginning until i - 1
	- if arr[j] is greater than arr[j+1], swap those two values!
	- return the sorted array
*/

// NOT EFFICIENT / OPTIMIZE
function bubbleSort(arr) {
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if(arr[j] > arr[j+1]) {
        
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      }
    }
  }
  return arr;
}

// REFACTORED
function bubleSort(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

bubbleSort([37, 45, 29, 8])

// OPTIMIZED
function bubbleSort(arr) {
  let noSwaps;
	for(let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(let j = 0; j < i - 1; j++) {
      if(arr[i] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7])
```

### BIG O Complexity

```
O(n2)														O(n)
worst case										Best case
```



2. ## Selection Sort (Swap Minimum)

   - similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position. 

```javascript
/* 
	Selection Sort Pseudocode
	
	- store the first element as the smallest value you've seen so far
	- compare this istem to the next item in the array until you find a smaller number
	- if a smaller numer is found, dseignate that smaller number to be the new minimum and continue until the end of the array.
	- if the minimum is not the value(index) you initially began with, swap the two values
	- repeat this witht he next element until the array is sorted
*/

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let lowerst = i;
    for(let j = i+1; j < arr.length; j++) {
      console.log(i, j);
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // swap
    if(i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
	    arr[lowest] = temp;    
    }
  }
  return arr;
}


// ES2015
function selectionSort(arr) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  
  for(let i = 0; i < arr.length; i++) {
    let lowest = i;
    for(let j = + 1; j < arr.length; j++) {
      if(arr[lowest] > arr[j]) {
				lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest)
  }
  return arr;
}


selectionSort([34,22,10,19,17]);
```

### BIG O Complexity

```javascript
-- not efficient
-- selection sort is better than bubble sort but still not efficient.
```



3. ## Insertion Sort

   - builds up the sort by gradually creating a larger portion which is always sorted.

```javascript
/*
	INSERTION SORT PSEUDOCODE
	
	- start by picking the second element in the array
	- now compare the second element with the one before it and swap if necessary
	- continue to the next element and if it is in the incorrect order, iterate through the sorted potion (i.e. the left side) to place the element in the correct place.
	- repeat until the array is sorted
*/

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      if(arr[j] ) {
        arr[j+1] = arr[j]
      }
      arr[j+1] = currentVal;
    }
  }
  return arr;
}

insertionSort([2,1,9,76,4])
```



### BIG O Complexity

```
O(n2)										O(n)
Worst Case						Best Case
```

## Complexity BigO (Bubble, Sorting, Insertion)

| Algorithm      | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| -------------- | ---------------------- | ------------------------- | ----------------------- | ---------------- |
| Bubble Sort    | O(n)                   | O(n2)                     | O(n2)                   | O(1)             |
| Insertion Sort | O(n)                   | O(n2)                     | O(n2)                   | O(1)             |
| Selection Sort | O(n2)                  | O(n2)                     | O(n2)                   | O(1)             |

# Intermediate Sorting Algorithms

- previous sorting algorithm doesn't scale much
- faster sorts from O(n) --> O(n log n)
- there's a tradeoff between efficiency and simplicity
- the more efficient algorithms are much less simple, and generally take longer to understand

1. ## Merge Sort

   - it's a combination of two things - mergin and sorting!
   - exploits the fact that arrays of 0 or 1 element are always sorted
   - works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

## Merging Arrays

```javascript
/*
	- in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
	- given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
	- this function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it. 
*/

/** PSEUDOCODE 
	- create an empty array, take a look at the smallest values in each input array
	- while there are still values we haven't look at...
			-- if the value in the first array is smaller than the value in the second array, 
			push the value in the first array into our results and move on to the next value in 
			the first array
			-- if the value in the first array is larger than the value in the second array, 
			push the value in the second array into our result and move on to the next value in 
			the second array
			-- once we exhaust one array, push in all remaining values from the other array
**/

function merge(arr1, arr2) {
  let results = [];
	let i = 0;
  let j = 0;
  
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
			results.push(arr2[j]);
      j++
    }
  }
  
  while(i < arr1.length) {
    results.push(arr[i]);
    i++;
  }
  
  while(j < arr2.length){
    results.push(arr[j]);
    j++;
  }
  return results;
}

merge([1,10,50], [2,14,99,100])
```

### MergeSort Pseudocode

```javascript
/*
	mergeSort Pseudocode
	- break up the array into halves until you have arrays that are empty or have one element
	- once you have smaller sorted arrays, merge those arrays with other sorted arrays until 
	you are back at the full length of the array
	- once the array has been merged back together, return the merged (and sorted!) array
*/

function merge(arr1, arr2) {
  let results = [];
	let i = 0;
  let j = 0;
  
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
			results.push(arr2[j]);
      j++
    }
  }
  
  while(i < arr1.length) {
    results.push(arr[i]);
    i++;
  }
  
  while(j < arr2.length){
    results.push(arr[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  // mergeSort();
  // slice it to half
  let mid = Math.floor(arr.length / 2) --> 3
	let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right)
}

mergeSort([10,24,76,73,72,1,9])
```

### Big O of mergeSort	

| Time complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O(n log n)              | O(n)             |

**NOTE: once you split or divide the array the complexity will be (log n)**

2. ## Quick Sort

   - like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
   - Works by selecting one element(called the "pivot") and finding the index where the pivot should end up in the sorted array
   - once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

### Pivot Helper

```javascript
/*
	- in order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
	- given a n array, this helper funciton should designate an element as the pivot
	- it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater thant he pivot are moved to the right of the pivot
	- the order of elements on either side of the pivot doesn't matter
	the helper should do this in place, that is, it should not create a new array
	- when complete, the helper should return the index of the pivot
*/

```

### Picking a pivot

```javascript
/*
	- the runtime of quick sort depends in part on how one selects the pivot
	- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
	- for simplicity, we'll always choose the pivot to be the first element
*/

let arr = [5,2,1,8,4,7,6,3]

pivot(arr); // 4
arr;
// any one of these is an acceptable mutation:
// [2,1,4,3,5,8,7,6]
// [1,4,3,2,5,7,6,8]
// [3,2,1,4,5,7,6,8]
// [4,1,2,3,5,6,8,7]
// there are other acceptable mutations too!

```

### Pivot Pseudocode

```javascript
/*
	- it will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
	- grabe the pivot from the start of the array
	- store the current pivot index in a variable (this will keep track of where the pivot should end up)
	- loop through the array from the start until the end
			-- if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
	- swap the starting element (i.e. the pivot) with the pivot index
	- return the pivot index
*/
```

```javascript
function pivot(arr, start = 0; end = arr.length + 1) {
	function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  let pivot = arr[start];
  let swapIndex = start;
  
  for(let i = start + 1; i < arr.length; i++) {
    if(pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i)
    }
  }
  swap(arr,  start, swapIndex)
  return swapIndex;
}

pivot([4,8,2,1,5,7,6,3])

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])
```

### Quicksort Pseudocode

```javascript
/*
- call the pivot helper on the array
	- when the helper returns to you the updated pivot index, recursively call the pivot 
	helper on the subarray to the left of that index, and the subarray to the right of that 
	index
	- your base case occurs when you consider a subarray with less than 2 elements
*/
function quickSort(arr,  left = 0; , right = arr.length - 1) {
  if(left < right) {
	  let pivotIndex = pivot(arr, left, right) //3
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);    
  }
  return arr;
}

quickSort([4,6,9,1,2,5,3])
```



### Big O Complexity

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O(n2)                   | O(log n)         |

**NOTE: once you split or divide the array the complexity will be (log n)**



## Comparison sorts (average time complexity):

	- Bubble Sort - O(n^2)
	- Insertion Sort - O(n^2)
	- Selection Sort - O(n^2)
	- Quick Sort - O(n^2)
	- Merge Sort - O(n^2)

# Radix Sort

- Not making comparisons
- special sorting algorithm that works on lists of numbers
- it never makes comparisons between elements
- it exploits the fact that information about the size of number is encoded in the number of digits
- more digit means a bigger number

```javascript
/*
Radix sort helper method
- in order to implement radix sort, it's. helpful to build a few helper functions first:
*/


getDigit(num, place) - return sthe digit in num at the given place value

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
```

### Radix Sort Pseudocode

```javascript
/*
	- define a function that accepts list of numbers
	- figure out how many digits the largest number has
	- Loop from k = 0 up to. this largest number of digits
	- For each iteration of the loop
			-- create buckets for each digit (0 to 9)
			-- place each number in the corresponding bucket based on its kth digit
  - Replace our existing array with values in our buckets, starting with 0 and going up to 9
  - return list at the end
*/

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  
  for(let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({length: 10}, () => []);
    for(let i = 0; i < nums.length; i++) {
      let digit = getDigit(num[i], k);
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23,345,5467, 12,2345, 9852]);
```

### Big O Complexity

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(nk)                  | O(nk)                     | O(nk)                   | O(n + k)         |



# Data Structures

- collections of values, the relationships among them, and the functions or operations that can be applied to the data. 
- the more time you spend as a developer, the more likely you'll need to use one of these data structures

## 1. Linear Data Structures

- Arrays
- Lists

```javascript
// ES2015 Class Syntax

/*
What is a class?
  - a blue print for creating objects with predefined properties and methods

*/
```

## Syntax of Classes in Javscript

```javascript
// ES2015

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.source = [];
  }
  // instance methods
  fullName() {
    return `Your full name is ${firstName} ${lastName}, and your grade is ${grade}`
  }
  markLate() {
    this.tardies += 1;
    return `Your ${firstName} ${lastName}, ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a, b){return a + b});
    return sum/this.scores.length;
  }
  // not common (adding class methods)
  static enrollStudents(...students) {
    // maybe send an email here
    return "Enrolling Students!";
  }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Dennis", "Mercado");
let emil = new Student("Emil", 'Test', 90)

firstStudent.markLate(); //1 time
firstStudent.markLate(); // 2 time
secondStudent.addScore(92)
secondStudent.addScore(87)
secondStudent.scores //[92, 87]
secondStudent.calculateAverage();
Student.enrollStudent();

// one gotcha with 'this'
/*
	Inside all of our instance methods and constructor, the keyword 'this' refers to the object created from that class (also known as an instance)
*/


```



# Linked List

- a data structure tha tcontains a **head**, **tail** and **length** property.
- Linked lists consist of nodes , and each node has a value and a pointer to another node or null
- useful for insertion and deletion

## Singly Linked Lists (next value)

![Screen Shot 2020-01-27 at 3.54.03 PM](/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2020-01-27 at 3.54.03 PM.png)

## Comparisons with arrays

LISTS

- don't have indexes
- connected via nodes with a next pointer
- random access is not allowed

ARRAYS

- indexed in order
- insertion and deletion can be expensive
- can quickly be accessed at a specific index

| Operations | Array | Linked List |
| ---------- | ----- | ----------- |
| Access     | O(1)  | O(n)        |
| delete     | O(n)  | O(1)        |
| insert     | O(n)  | O(1)        |
| search     | O(n)  | O(n)        |



## Push/Pop/Shift/Unshift/Get/Set/Insert/Remove/Reverse

```javascript
// piece of data - val
// reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // ---->>> PUSH
  push(val) {
    /**
    	pseudocode
    	- this function should accept a value
    	- create a new node using the value passed to the function
    	- if there is no head property on th elist, set the head and tail to be the newly 
    	created node
    	- Otherwise set the next property on the tail to be the new node and set the tail 
    	property  on the list to be the newly created node
    	- increment the length by one
    	- return the linked list
    **/
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  
  /* Example of traversing 
  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }
  */

  // ---->>> POP
  pop() {
    /** 
      pseudocode
      - if there are no nodes in the list, return undefined
      - loop through the list until you reach the tail
      - set the next property of the 2nd to last node to be null
      - set the tail to be the 2nd to last node
      - decrement the length of the list by 1
      - return the value of the node removed
    **/
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
		this.length--;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  
  // ---->>> SHIFT
  shift() {
    /** Pseudocode
    	- if there are no nodes, return undefined
    	- store the current head property in a variable
    	- set the head property to be the current head's next property
    	- decrement the length by 1
    	- return the value of the node removed
    **/
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  
  // ---->>> UNSHIFT
  unshift(val) {
    /** Pseudocode
    	- this funciton should accept a value
    	- create a new node using the value passed to the function 
    	- if there is no head property on the list, set the head and tail to be the newly 
    	created node
    	- otherwise set the newly created node's next property to be the current head property 
    	on the list
    	- set the head property on the list to be that newly created node
    	- increment the length of the list by 1
    	- return the linked list 
    **/
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
	    this.head = newNode;    
    }
    this.length++;
    return this;
  }
  
  // ---->>> GET
  get(index) {
    /** Pseudocode
    	- this function should accept an index
    	- if the index is less than zero or greater than or equal to the length of the list, 
    	return null
    	- loop through the list until you reach the index and return the node at the specific 
    	index
    **/
    
    if(index < 0 || ilndex >= this.length) return null;
		let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // ---->>> SET
  set(index, val) {
    /** Pseudocode
    	- this function should accept a value and an index
    	- use your get function to find the specific node
    	- if the node is not found, return false
    	- if the node is found, set the value of that node to be the value passed to the 
    	function and return true
    **/
    let foundNode = this.get(index);
    if(foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  
  // ---->>> INSERT
  insert(index, val) {
    /** Pseudocode
    	- if the index is less than zero or greater than the length, return false
    	- if the index is the same as the length, push a new node to the end of the list
    	- if the index is 0, unshift a new node to the start of the list
    	- Otherwise, using the get method, access the node at the index -1
    	- set the next property on that node to be the new node
    	- set the next property on the new node to be the previous next
    	- increment the length
    	- return true
    **/
    
		if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  
  // ---->>> REMOVE
  remove(index, val) {
    /** Pseudocode
    	- if the index is less than zero or greater than the length, return undefined
    	- if the index is the same as the length -1, pop
    	- if the index is 0, shift
    	- Otherwise, using the get method, access the node at the index -1
    	- set the next property on that node to be the next of the next node
    **/
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  
  // just for printing
  print() {
    let arr = [];
    let current = this.head
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
  }
  
  // ---->>> REVERSE
  reverse() {
    /** Pseudocode
    	- swap the head and tail
    	- create a variable next
    	- create a variable prev
    	- create a variable node and initializze it to the head property
    	- loop through the list
    	- set next to be the next property on whatever node is
    	- set the next property on the node to be whatever prev is
    	- set prev to be the value of the node variable
    	- set the node variable to be the value of the next variable
    **/
    
 		let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

/*
let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");
*/

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
```

## 2. Doubly Linked List

![Screen Shot 2020-01-27 at 8.37.15 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-27 at 8.37.15 PM.png)

- more memory === more flexibility

```javascript
// Node
- val
- next
- prev

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList
- head
- tail
- length

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val) {
    /** Pseudocode
    	- create a new node with the value passed to the function
    	- if the head property is null set the head and tail to be 
    	the newly created node
    	- if not, set the next property on the tail to be that node 
    	to be the tail
    	- set the previous property on the newly created node to be 
    	the tail
    	- set the tail to be the newly created node
    	- increment the length
    	- return the doubly linked list
    **/
		let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  
  pop() {
    /** Pseudocode
    	- if there is no head, return undefined
    	- store the current tail in a variable to return later
    	- if the length is 1, set the head and tail to be null
    	- update the tail to be the previous node.
    	- set the newTail's next to null
    	- decrement the length
    	- return the value removed
    **/
		if(!this.head) return undefined;
    
    let poppedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
			this.tail = poppedNode.prev;
      this.tail.next = null;
      // remove the connection of the prev.
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  
  shift() {
    /**
    	- if the length is 0, return undefined
    	- store the current head property in a variable
    	- if the length is one
    		-- set the head to be null
    		-- set the tail to be null
    	- update the head, to be the next of the old head
    	- set the heads prev property to null
    	- set the old head's next to null
    	- decrement the length
    	- return old head
    **/
    if(!this.head) return undefined;
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
	    this.head.prev= null;
			oldHead.next = null;    
    }
    this.length--;
    return oldHead;
  }
  
  unshift(val) {
    /** Pseudocode
    	- create a new node with the value passed to the function
    	- if the length is 0
    		-- set the head to be the new node
    		-- set the tail to be the new node
      - otherwise
      	-- set the prev property on the head of the list to be the 
      	new node
      	-- set the next property on the new node to be the head 
      	property
      	-- update the head to be the new node
      - increment the length
      - return the list
    **/
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
			newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  
  get(index) {
    /**	Pseudocode
    	- if the index is less than 0 or greater or equal to the 
    	length, return null
    	- if the index is less than or equal to half the length of 
    	the list
    		-- loop through the list starting from the head and loop 
    		towards the middle
    		-- return the node once it is found
    	- if the index is greater than half the length of the list
    		-- loop through the list starting from the tail and loop 
    		towards the middle
    		-- return the node once it is found
    **/
    if(index < 0 || index >= this.length) return null;
    
    // start at the left part
    let count, current;
    if(index <= this.length / 2) {
			count = 0;
	    current = this.head;
  	  while(count !== index) {
    	  current = current.next;
      	count++;
	    }
    } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  
  set(index, val) {
    /** Pseudocode
    	- create a variable which is the result of the get method at 
    	the index passed to the function
    		-- if the get method returns a valid node, set the value of 
    		that node to be the value passed to the function
    		-- return true
    **/
    let foundNode = this.get(index);
    if(foundNode !== null) {
    	foundNode.val = val
      return true;
    }
    return false;
  }
  
  insert(index, val) {
    /** Pseudocode
	    - if the index is less than zero or greater than or equal to 
	    the length return false
	    - if the index is 0, unshift
	    - if the index is the same as the length, push
	    - use the get method to access the index - 1
	    - set the next and prev properties on the correct nodes to 
	    link everything to gether
	    - increment the length
	    - return true
    **/
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val)
    
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  
  remove(index) {
    /** Pseudocode
    	- if the index is less than zero or greater than or equal to the length return undefined
    	- if the index is 0, shift
    	- if the index is the same as the length - 1, pop
    	- use the get method to retrieve the item to be removed
    	- update the next and prev properties to remove the found 
    	node from the list
    	- set next and prev to null on the found node
    	- decrement the length
    	- return the removed node
    **/
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    
    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

/*
first = new Node(12);
first.next = new Node(13);
first.next.prev = first;
*/

list.push(99);
list.push(15);
list.push('last item');

list = new DoublyLinkedList();
list.pop() // undefined
link.push(1)
link.push(2)
link.push(3)
list.shift()

```

## Big O of Double Linked Lists

- insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(n)
- Technically searching is O(n / 2), but that's still O(n)

# Stacks and Queues

- last thing added in, and first thing going out
- the last element added to the stack will be the first element removed from the stack

```javascript
function factorial(x) {
  x = 4
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
```

- there is more than one way to create a stack

### Creating a stack with an array

- there is more than one way of implementing a stack

- Array implementation

  ```javascript
  let stack = [];
  
  stack.push("Google");
  stack.push("instagram");
  stack.push("youtube");
  
  stack.pop();
  stack.push("amazon")
  stack.pop() // google
  ```

  ```javascript
  // remember that this will be re-indexed!
  stack.unshift("create new file");
  stack.unshift("resized file");
  stack.unshift("cloned out wrinkle");
  ```

### Creating a stack with Linked List

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
	Pseudocode
	- the function should accept a value
	- create a new node with that value
	- if there are no nodes in the stack, set the first and last property to be the newly 
	created node
	- if there is at least one node, create a variable that stores the current first property 
	on the stack
	- reset the first property to be the newly created node
	- set the next property on the node to be the previously created variable
	- increment the size of the stack by 1
**/

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    /**
    	- if there are no nodes in the stack, return null
    	- create a temporrary variable to store the first property on the stack
    	- if there is only 1 node, set the first and last property to be null
    	- if there is more than one node, set the first property to be the next property on 
    	the current first
    	- decrement the size by 1
    	- return the value of the node removed
    **/
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) {
      this.last == null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push(23);

```

### Big O of Stacks

- insertion - O(1)
- removal - O(1)
- searching - O(n)
- access - O(n)

## Queues

- FIFO - First IN First OUT

- How do we use them in programming?

  - Background tasks
  - Uploading resources
  - Printing / Task processing

- Creating Queue in an array

  ```javascript
  let q = ["first", "second", "third"];
  q.shift();
  q.shift()
  q.shirt()
  
  q.unshift("first")
  q.unshift("second")
  q.unshift("third")
  ```

- Creating a Linked List queue

  ```javascript
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
    
    enqueue(val) {
      /**
      	- this function accepts some value
      	- create a new node using that value passed to the function
      	- if there are no nodes in the queue, set this onde to be the first and last 
      	property of the queue
      	- Otherwise, set the next property on the current last to be that node, and then 
      	set the last property of the queue to be that node
      **/
  
      let newNode = new Node(val);
      if(!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      return ++this.size;
    }
    dequeue() {
      /**
      	- if there is no first property, just return null
      	- store the first property in a variable
      	- see if the first is the same as the last (check if there is only 1 node). If so, 
      	set the first and last to be null
      	- if there is more than 1 node, set the first property to be the next property of 
      	first
      	- decrement the size by 1
      	- return the value of the node dequeued
      **/
      if(!this.first) return null;
      let temp = this.first;
      if(this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
    }
  }
  
  let q = new Queue()
  
  q.enqueue("First")
  q.enqueue("Second")
  q.enqueue("Third")
  
  q.dequeue();
  q.dequeue();
  ```

  ### Big O of queues

  - insertion - O(1)
  - removal - O(1)
  - searching - O(n)
  - access - O(n)

# Tree

- branching structures

- trees are nonlinear

  ![Screen Shot 2020-01-30 at 11.32.16 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 11.32.16 AM.png)

  ![Screen Shot 2020-01-30 at 11.32.21 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 11.32.21 AM.png)

  ![Screen Shot 2020-01-30 at 11.32.54 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 11.32.54 AM.png)

  ​	

  - Root - the top node in a tree
  - Child - a node directly connected to another node when moving away from the root
  - Parent - the converse notion of a child
  - Siblings - a group of nodes with the same parent
  - Leaf - a node with no children
  - Edge - the connection between one node and another

  

  ## Kinds of trees

  ![Screen Shot 2020-01-30 at 11.49.24 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 11.49.24 AM.png)

  NOTE: At most 2 child on a tree to be valid as a binary tree

  - every parent node has at most two children
  - every node to the left of a parent node is always less than the parent
  - every node to the right of a parent node is always greater than the parent

  ```javascript
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  let tree = new BinarySearchTree();
  `
  tree.root = new Node(10);
  tree.root.right = newNode(15);
  tree.root.left = newNode(7);
  tree.root.left.right = newNode(9);
  `
  
  // INSERTING
  /* Pseudocode 
  	- create a new node
  	- starting at the root
  		-- check if there is a root, if not the root now becomes that new node!
  		-- if there is a root check if the value of the new node is greater than 
  		or less than in the value of the root
  		-- if it is greater
  			-- check to see if there is a node to the right
  				-- if there is, move to that node and repeater these steps
  				-- If there is not, add that node as the right property
      -- if it is less
      	-- check to see if there is a node to th eleft
      		-- if there is, move to that node and repeat these steps
      		-- if there is not, add that node as the left property
  */
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    
    insert(value) {
      let newNode = new Node(value);
      if(this.root === null) {
        this.root = newNode;
        return this;
      } else {
        let current = this.root;
        while(true) {
          if(value === current.value) return undefined;
          if(value < current.value) {
            if(current.left === null) {
              current.left = newNode;
              return this;
            }
            else {
              current = current.left;
            }
          } else if (value > current.value) {
            if(current.right === null) {
              current.right = newNode;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
    find(value) {
      if(this.root === null) return false;
      let current = this.root;
      let found = false;
      
      while(!found && current) {
        if(value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
  				return true;
        }
      }
      return false;
    }
  }
  
  //		 	10
  //		5				13
  // 	2		7 	11 	16
  
  // FINDING
  /* PSEUDOCODE
  
  	- starting at the root
  		-- check if there is a root, if not, we're done searching
  		-- if there is a root, check if the value of the new node is the value we 
  		are looking for. If we found it, we're done!
  		-- if not, check to see if the value is greater than or less than the 
  		value of the root
  		-- if it is greater
  			--- check to see if there is a node to the right
  				---- if there is, move to that node and repeat these steps
  				---- if there is not, we're done searching!
      -- if it is less
      	--- check to see if there is a node to the left
      		---- if there is, move to that node and repeat these steps
      		---- if there is not, we're done searching!
  */
  
  
  
  ```

  

  ## Breadth First Search

  ![Screen Shot 2020-01-30 at 2.02.41 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 2.02.41 PM.png)

- ```javascript
  /*
  	- create a queue (this can be an array) and a variable to store the values of nodes visited
  	- place the root node in the queue
  	- loop as long as there is anything in the queue
  		-- dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  		-- if there is a left property on the node dequeued - add it to the queue
  		-- if there is a right property on the node dequeued - add it to the 
  		queue
  	- return the variable that stores the values
  */
  
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  	
    BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    
    queue.push(this.root);
    while(queue.length) {
      node = queue.shift()
      data.push(node)
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);	
    }
    return data;
  }
  ```

  ## DFS - PreOrder

  ## ![Screen Shot 2020-01-30 at 2.21.03 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 2.21.03 PM.png)

  ```javascript
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  /**
  	PSEUDOCODE
  
  	- create a variable to store the values of nodes visited
  	- store the root of the BST in a variable called current
  	- write a helper function which accepts a node
  		-- push the value of the node to the variable that stores the values
  		-- if hte node has a left property, call the helper function with the 
  		left property on the node
  		- if the node has a right property, call the helper function with the 
  		right property on the node
  	- invoke the helper function with the current variable
  	- return the array of values
  **/
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  	
  	DFSPreorder() {
    	let data = [];
      let current = this.root;
      function traverse(node.value) {
      	data.push(node);
        if(node.left) traverse(node.left);
        if(node.right)traverse(node.right);
      }
      traverse(this.root);
      return data;
  	}
    
  }
  ```

  ![Screen Shot 2020-01-30 at 2.34.20 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 2.34.20 PM.png)

  ```javascript
  /*
  PSEUDOCODE
  
  	- create a variable to store the values of nodes visited
  	- store the root of the BST in a variable called current
  	- write a helper function which accepts a node
    	-- if hte node has a left property, call the helper function with the 
  		left property on the node
  		-- if the node has a right property, call the helper function with the 
  		right property on the node
  		-- push the value of the node to the variable that stores the values
  	- invoke the helper function with the current variable
  	- return the array of values
  	*/
  	
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  	
  	DFSPostorder() {
    	let data = [];
      let current = this.root;
      function traverse(node.value) {
        if(node.left) traverse(node.left);
        if(node.right)traverse(node.right);
        data.push(node);
      }
      traverse(this.root);
      return data;
  	}
  }
  ```

  ![Screen Shot 2020-01-30 at 2.45.44 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 2.45.44 PM.png)

  ```javascript
  /**
  PSEUDOCODE
  
  	- create a variable to store the values of nodes visited
  	- store the root of the BST in a variable called current
  	- write a helper function which accepts a node
    	-- if hte node has a left property, call the helper function with the 
  		left property on the node
  				-- push the value of the node to the variable that stores the values
  		-- if the node has a right property, call the helper function with the 
  		right property on the node
  	- invoke the helper function with the current variable
  	- return the array of values
  **/
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  	
  	DFSPinorder() {
    	let data = [];
      let current = this.root;
      function traverse(node.value) {
        if(node.left) traverse(node.left);
        data.push(node);
        if(node.right)traverse(node.right);
      }
      traverse(this.root);
      return data;
  	}
  }
  ```

  ## Which is better?

  - it depends, 