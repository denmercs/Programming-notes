---

---

# Big O notation

- counting operations instead of time
- is a way to formalize fuzzy counting
- allows to formally talk about how the runtime of an algorithm grows as the input grow

- algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
	- f(n) could be linear (f(n) = n)
	- f(n) could be quadratic (f(n) = n2)
	- f(n) could be constant (f(n) = 1)
	- f(n) could be something entirely different!

- smaller terms don't matter
- Analyzing complexity with big O can get complicated

## BIG O SHORTHANDS
1. Airthmetic operations are constant
2. Variable assignment is constant
3. Accessing element sin an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop



![Screen Shot 2019-12-05 at 8.10.30 AM](/Users/dennismercado/Desktop/Programmer/Algorithm Notes/Python/Screen Shot 2019-12-05 at 8.10.30 AM.png)

## Inputs (Space complexity)

- you'll hear them auxiliary space complexity to refer to space require by the algorithm, not including space taken up by the inputs

- most primitives (boolean, numbers, undefined, null) are constant space

- String require O(n) space (where n is the string length)

- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

  

  ![Screen Shot 2019-12-05 at 8.52.26 AM](/Users/dennismercado/Desktop/Programmer/Algorithm Notes/Python/Screen Shot 2019-12-05 at 8.52.26 AM.png)

  
  
  Example: O(1)
  
- ![Screen Shot 2019-12-05 at 8.55.08 AM](/Users/dennismercado/Desktop/Programmer/Algorithm Notes/Python/Screen Shot 2019-12-05 at 8.55.08 AM.png)



## Logarithms

- log2(8) = 3
- certain searching algorithms have logarithmic time complexity
- efficient sorting algorithms involve logarithms
- recursion sometimes involves logarithmic space complexity

## Summary

- to analyze the performance of an algorithm, we use Big O notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? Quadratic? Constant? )
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm

## BUILT-IN DATA STRUCTURES

- Unordered, key value pairs!

  ```javascript
  `let instructor = {
      firstName: "Kelly",
      isInstructor: true,
      favoriteNumbers: [1,2,3,4]
  }`
  ```

  

When to use objects

- When you don't need order

- When you need fast access / insertion and removal

  

  Insertion -  **O(1)**

  Removal -  **O(1)**

  Searching -  **O(N)**

  Access -  **O(1)**

  

## Big O of Object Methods

​	Object.keys -  **O(N)**

​	Object.values -  **O(N)**

​	Object.entries -  **O(N)**

​	hasOwnProperty -  **O(1)**

# ARRAYS

```javascript
let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];
```

- When you need order

- When you need fast access / insertion and removal (sort of....)

## Big O of Arrays

​	Insertion -  **It depends....**

​		If it's at the end it doesn't affect at all but it's a different Big O when it inserted in the beginning index

​	Removal -  **It depends....**

​		If it's at the end it doesn't affect at all but it's a different Big O when it removing in the beginning index

​	Searching -  **O(N)**

​	Access -  **O(1)**

## Big O of Array Operations

​	push -  **O(1)**

​	pop -  **O(1)**

​	shift -  **O(N)**

​	unshift -  **O(N)**

​	concat -  **O(N)**

​	slice -  **O(N)**

​	splice -  **O(N)**

​	sort -  **O(N \* log N)**

​	forEach/map/filter/reduce/etc. -  **O(N)**

## Limitations of Arrays

​	Inserting at the beginning is not as easy as we might think! There are **more efficient** data structures for that!

# Algorithm and Problem Solving Patterns

- A **process** or **set of steps** to accomplish a certain task.
- It's the foundation for being a successful problem solving and developer

1. Device a plan for solving problems
2. Master common problem solving patterns

## Problem solving strategies

1. Understand the problem
2. Explore Concrete Examples
3. Break it down
4. Solve/Simplify
5. Look back and refactor

### Understand the problem

- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
- How should I label the important pieces of data that are a part of the problem?

### Explore Examples

- Start with Simple Examples

- Progress to More Complex Examples

- Explore Examples with Empty Inputs

- Explore Examples with Invalid Inputs

### Break it down

- Explicitly write out the steps you need to take.

- This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

### Simplify

- Find the core difficulty in what you're trying to do

- Temporarily ignore that difficulty

- Write a simplified solution

- Then incorporate that difficulty back in

### LOOK BACK & REFACTOR

# REFACTORING QUESTIONS

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem? 

## 1. Common Problem Solving Patterns

​	**A. Frequency Counters**

- this pattern uses objects or sets to collect values/frequencies of values rather than using an array

- this can often avoid the need for nested loops or O(N^2) operations with arrays / strings

  ```javascript
  Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
  
  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false (must be same frequency)
  
  // NAIVE SOLUTION
  function same(arr1, arr2){
      if(arr1.length !== arr2.length){
          return false;
      }
      for(let i = 0; i < arr1.length; i++){
          let correctIndex = arr2.indexOf(arr1[i] ** 2)
          if(correctIndex === -1) {
              return false;
          }
          arr2.splice(correctIndex,1)
      }
      return true
  }
  
  // REFACTORED
  function same(arr1, arr2){
      if(arr1.length !== arr2.length){
          return false;
      }
      let frequencyCounter1 = {}
      let frequencyCounter2 = {}
      for(let val of arr1){
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
      }
      for(let val of arr2){
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
      }
      for(let key in frequencyCounter1){
          if(!(key ** 2 in frequencyCounter2)){
              return false
          }
          if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
              return false
          }
      }
      return true
  }
  ```

  ```javascript
  ANAGRAMS
  
  Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
  
  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram("rat","car") // false) // false
  validAnagram('awesome', 'awesom') // false
  validAnagram('qwerty', 'qeywrt') // true
  validAnagram('texttwisttime', 'timetwisttext') // true
  
  function validAnagram(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
  
    let lookup = {};
  
  //  construct the object first
    for (let val of arr1) {
      lookup[val] ? lookup[val] += 1 : lookup[val] = 1;
    }
  
    console.log('this is the lookup', lookup)
  //  compare each character to the lookup object
    for (let val2 of arr2) {
      if(!lookup[val2]) {
        return false
      } else {
        lookup[val2] -= 1;
      }
    }
    return true;
  }
  ```

  









