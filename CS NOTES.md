# CS NOTES

- Introduction

  ‘Complexity’ is an approximate measure of the efficiency of an algorithm. There are 2 kinds of complexities: time and space. Time complexity and space complexity are essentially approximations of how much time and how much space an algorithm will take to process certain input respectively. 

- Time Complexity

  Time complexity is an algorithm’s rate of growth of time taken with respect to the input. Simply put, time complexity is an approximation of how much time it takes for a particular algorithm to execute as the input data grows in size.

  Here is how to compute the time complexity of an algorithm:

  1. List down all the basic operations in the code
  2. Count the number of times each gets executed
  3. Sum all the counts to get an equation


## Asymptotic Analysis

- Algorithms can be put into broad categories based on their running time complexities using a technique called ‘asymptotic analysis’. Mathematically, the asymptotic behavior of a function f(n)*f*(*n*) refers to the growth of f(n)*f*(*n*) as n*n* gets large. Essentially, asymptotic analysis is a way to frame an algorithm’s run-time complexity with a mathematical function for very large input sizes.

  | Function                        | Name         | Function           | Name        |
  | ------------------------------- | ------------ | ------------------ | ----------- |
  | 1. O(1)*O*(1)                   | Constant     | 7. O(n^2)*O*(*n*2) | Quadratic   |
  | 2. O(log n)*O*(*l**o**g**n*)    | Logarithmic  | 8. O(n^3)          | Cubic       |
  | 3. O(log^2 n)*O*(*l**o**g*2*n*) | Log-square   | 9. O(n^4)          | Quartic     |
  | 4. O(\sqrt n)*O*(√*n*)          | Root-n       | 10. O(2^n)         | Exponential |
  | 5. O(n)*O*(*n*)                 | Linear       | 11. O(e^n)         | Exponential |
  | 6. O(nlogn)                     | Linearithmic | 12. O(n!)          | Factorial   |

  

## Big ‘Omega’ - Ω(*n*)

- The Big Omega complexity of an algorithm finds the best case behavior of an algorithm as its input size grows. In other words, your algorithm’s performance can not be better than its Big Omega complexity for large input sizes.

## Big ‘Theta’ -Θ(n)

- If f(n)*f*(*n*) is in O(g(n))*O*(*g*(*n*)) and f(n)*f*(*n*) is also in \Omega(g(n))Ω(*g*(*n*)) then it is in \Theta(n)Θ(*n*). Formally, f(n)*f*(*n*) is in \Theta(n)Θ(*n*) if there exist constants c_1 > 0*c*1>0, c_2 > 0*c*2>0 and an n_0 \geq 0*n*0≥0 such that c_2g(n) \leq f(n) \leq c_1g(n)*c*2*g*(*n*)≤*f*(*n*)≤*c*1*g*(*n*).

  So Big Theta gives an ‘asymptotically tight bound.’ When a particular running time is \Theta(n)Θ(*n*), the running time is at least c_1g(n)*c*1*g*(*n*) and at most c_2g(n)*c*2*g*(*n*)

## Little ‘o’ - o(n)

- *f*(*n*) is in o(g(n))*o*(*g*(*n*)) if for any constant c > 0*c*>0 there is an n_0 \geq 1*n*0≥1 such that f(n) < cg(n)*f*(*n*)<*c**g*(*n*) (strictly *less*) for *all* possible values of c.

## Little ‘omega’ - *ω*(n)

- A function f(n)*f*(*n*) is in \omega(g(n))*ω*(*g*(*n*)) if for *any* c>0*c*>0 there exists an n_0 \geq 1*n*0≥1 such that f(n) > cg(n)*f*(*n*)>*c**g*(*n*) for n \geq n_0*n*≥*n*0.

## Summary

| If our algorithm is | then its performance is |
| ------------------- | ----------------------- |
| *o*(*n*)            | < n                     |
| *O*(*n*)            | ≤n                      |
| Θ(*n*)              | =n                      |
| Ω(n)                | ≥n                      |
| *ω*(n)              | >n                      |



<img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-11 at 12.51.17 PM.png" alt="Screen Shot 2020-02-11 at 12.51.17 PM" style="zoom: 50%;" />

<img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-11 at 12.50.46 PM.png" alt="Screen Shot 2020-02-11 at 12.50.46 PM" style="zoom:50%;" />

## Why Big O is preferred over other notations?

Consider an example of a brute force search algorithm implemented in a robot to find a red ball in a series of boxes. All these boxes contain blue balls, except one box, which contains one red ball. The robot will start searching from the first box and will keep looking until it finds a red ball or reaches the last box. The performance of this algorithm depends on which box the red ball is in, i.e., if the red ball is in a box closer to the start or the end.

- **Big(\OmegaΩ)** will return the best case result for the algorithm which is when the red ball is placed in the first box. But that is not necessarily always true and, in fact is probabilistically a rare occurrence! So **Big(\OmegaΩ)** is not a very useful reflection of the algorithm.
- **Big(\ThetaΘ)** will return a variety of different results depending on where the red ball is placed from the first to the last box. So it is also not very useful.
- **Big(O)** will always return the worst case, which is when the ball is placed in the last box and the robot has to iterate through all of the boxes.

## Useful Formulas

- Here is a list of handy formulas which can be helpful when calculating the time complexity of an algorithm:

  | Summation                                 | Equation            |
  | ----------------------------------------- | ------------------- |
  | (∑*i*=1*n**c*)=*c*+*c*+*c*+⋯+*c*          | *c**n*              |
  | (∑*i*=1*n**i*)=1+2+3+⋯+*n*                | 2*n*(*n*+1)         |
  | (∑*i*=1*n**i*2)=1+4+9+⋯+*n*2              | 6*n*(*n*+1)(2*n*+1) |
  | (∑*i*=0*n**r**i*)=*r*0+*r*1+*r*2+⋯+*r**n* | *r*−1(*r**n*+1−1)   |

### General Tips

1. Every time a list or array gets iterated over c X times, it is most likely in O(n) time.
2. When you see a problem where the number of elements in the problem space gets halved each time, that will most probably be in O(log n) runtime.
3. Whenever you have a singly nested loop, the problem is most likely in quadratic time.

# Common Complexities Scenarios

![Screen Shot 2020-01-29 at 12.01.51 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-29 at 12.01.51 PM.png)

![Screen Shot 2020-01-29 at 12.01.58 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-29 at 12.01.58 PM.png)

![Screen Shot 2020-01-29 at 12.02.09 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-29 at 12.02.09 PM.png)

![Screen Shot 2020-01-29 at 12.02.14 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-29 at 12.02.14 PM.png)

![Screen Shot 2020-01-29 at 12.02.19 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-29 at 12.02.19 PM.png)

![Screen Shot 2020-01-29 at 12.02.27 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-29 at 12.02.27 PM.png)



### Rules:

 - input >= 0
 - functions do more work for move input
 - drop all constants

```python
"""
	3n  --> n
	5n  --> n
	10n --> n
	50n --> n
"""
```

- ignore lower order terms
- ignore the base of logs

```python
"""
1, c			 --> constant time
log n			 --> trees
n 				 --> once per item
n2				 --> compare all vs all
n!				 --> traveling sales

"""
```



# List

- a list is an ordered sequence of heterogeneous elements. In other words, a list can hold elements with different data types.

```python
ExampleList = [3.14159, 'apple', 23]
EmptyList = []
SequenceList = list(range(10))
print(ExampleList)
print(EmptyList)
print(SequenceList)
```

```python
aList = [2, 'Educative', 'A']
def foo():
  print ('Hello from foo()!')

anotherList = [aList, 'Python', foo, ['yet another list']]

print(anotherList[0]) # Elements of 'aList'
print(anotherList[0][1]) # Second element of 'aList'
print(anotherList[1]) # 'Python'
print(anotherList[3]) # 'yet another list'

# You can also invoke the functions inside a list!
anotherList[2]() # 'Hello from foo()!'
```

### Important list functions

### 1. Append

- add a single element to the end of a list

```python
List = [1, 3, 5, 'seven']
print(List)
List.append(9)
print(List)
```

### 2. Insert

- Inserts element to the list

```python
List = [1, 3, 5, 'seven']
List.insert(0, 2)
print(List)
```

### 3. Remove

- Removes the given element from the list

```python
List = [1, 3, 5, 'seven']
print(List)
List.remove('seven')
print(List)
List.remove(0)
print(List)
```

### 4. Pop

- Removes the element at given index. If no index is given, then it removes the last element.

```python
List = [1, 3, 5, 'seven']
print(List)
List.pop(2)
print(List)
```

### 5. Reverse

- This function reverses lists

```python
List = [1, 3, 5, 'seven']
print(List)
List.reverse()
print(List)
```

## Slicing

```python
list[start:end]

## Example 1 - indexing elements from a list
List = list(range(10))
print(List) # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
print(List[0:4]) # 0, 1, 2, 3


List = list(range(10))
print(List[3:]) # 3, 4, 5, 6, 7, 8, 9
print(List[:3]) # 0 1 2
print(List[:]) # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

## Example 2 - Stepped Indexing
list[start:stop:step]
List = list(range(10))
print(List[0:9:2]) # 0, 2, 4, 6, 8
print(List[9:0:-2]) # 9, 7, 5, 3, 1

## Example 3 - Initializing list elements
arr[start:end] = [list, of, New, values]

x = list(range(5))
print(x) # 0, 1, 2, 3, 4
x[1:4] = [45,21,83]
print(x) # 0, 45, 21, 83, 4

## Example 4 -  Deleting elements from a list
List = list(range(4))
print(List) # 0, 1, 2, 3
del List[::2]
print(List) # 1, 3

## Example 5 - Negative Indexing
List[-5]
List = list(range(10))
print(List[4:-1]) # 4, 5, 6, 7, 8

## Example 6 - Slicing in Strings
my_string = "somehow"
string1 = my_string[:4]
string2 = my_string[4:]
print(string1, string2)
```

## Arrays

- In Python, an array is just an ordered sequence of homogeneous elements. In other words, an array can only hold elements of one datatype. Python arrays are basically just wrappers for C arrays. The type is constrained and specified at the time of creation.
- sequence of elements of the same type stored in a contiguous block of memory

### Declaring an array

- determine how big the array needs to be
  - an integer is 4-bytes, so the array needs to be 16-bytes
- request a block of memory that will fit the array
  - request 16-bytes of memory from the computer
- receive the memory address of the reserved block
  - receive an address to the start of 16-bytes of reserved memory
- write your values into the array
  - write the values of 2,3,4 and 5 into the array

![Screen Shot 2020-02-09 at 8.46.01 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-02-09 at 8.46.01 PM.png)

- to access an index in the array:
  - index * sizeof(type) + start_address

## What is a Python List

- Python lists are arrays with  a lot of built-in functionality

### How do you add an element to the end of the array?

- take the size of your current array and increase it by one element
- request a block of memory of the new size
- copy each element from the old space to the new space one at a time
- Free the memory from the old array
  - this is an O(n) operation!



### How does Python add an element to the end of a list?

- Python will allocate a few empty spaces each time the array grows
- Each time it grows, it allocates a bit more extra spaces than the previous
- Adding an element to the end of a list is usually O(1) but sometimes O(n)
- On average, can be considered O(1)

![Screen Shot 2020-02-09 at 9.01.19 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-02-09 at 9.01.19 PM.png)

### Initializing Arrays

```python
## Example 1
import array
newArray = array.array('type', [initializer list])

## Example 2
import array

# type: 'd' (decimal), initializer list: [1, 2, 3]
newArray = array.array('d', [1, 2, 3])
print(newArray[0])
```

### Types of Arrays

| Type code | C Type         | Python Type       | Minimum Size in Bytes |
| --------- | -------------- | ----------------- | --------------------- |
| `'b'`     | signed char    | int               | 1                     |
| `'B'`     | unsigned char  | int               | 1                     |
| `'u'`     | Py_UNICODE     | Unicode character | 2                     |
| `'h'`     | signed short   | int               | 2                     |
| `'H'`     | unsigned short | int               | 2                     |
| `'i'`     | signed int     | int               | 2                     |
| `'I'`     | unsigned       | int               | 4                     |
| `'l'`     | signed long    | int               | 4                     |
| `'L'`     | unsigned long  | int               | 4                     |
| `'f'`     | float          | float             | 4                     |
| 'd'       | double         | float             | 8                     |

### Array slicing

- Array slicing is done exactly the way list slicing is done.

```python
import array

InitializerList = [2, 5, 43, 5, 10, 52, 29, 5]
NumberArray = array.array('i', InitializerList)

print(NumberArray[1:5]) # 2nd to 5th
print(NumberArray[:-5]) # beginning to 4th
print(NumberArray[5:])  # 6th to end
print(NumberArray[:])   # beginning to end
```

### How does Python add an element to the BEGINNING of a list?

- Check if there's any empty space at the end of the array
- if not:
  - Allocate a new array, place the first element and copy over the rest
  - Free memory from the old array
- If so:
  - Starting from the back, move each element to the right one space
  - Place the new element in the first position
- This is an O(n) operation no matter what!

- Changing or adding array elements  - Arrays are mutable; their elements can be changed in the same way as list elements.

  ![Screen Shot 2020-02-09 at 9.25.06 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-02-09 at 9.25.06 PM.png)

```python
import array
integers = array.array('i', [1, 2, 3, 5, 7, 10])

# changing first element
integers[0] = 0    
print(integers) # array('i', [0, 2, 3, 5, 7, 10])

# changing 3rd to 5th element
integers[2:5] = array.array('i', [4, 6, 8])   
print(integers)     # Output: array('i', [0, 2, 4, 6, 8, 10])
```

-  we can add one item to an array using the `append()` method or add several items using the `extend()` method.

```python
import array

numbers = array.array('i', [1, 2, 3])

numbers.append(4)
print(numbers)  # array('i', [1, 2, 3, 4])

# extend() appends iterable to the end of the array
numbers.extend([5, 6, 7]) 
print(numbers)     # array('i', [1, 2, 3, 4, 5, 6, 7])
```

- You can concatenate two arrays using + operator

```python
import array

odd = array.array('i', [1, 3, 5])
even = array.array('i', [2, 4, 6])

integers = array.array('i')   # creating empty array of integer
integers = odd + even

print(integers)    
```

- How do you remove/delete elements?

```python
import array

integerArray = array.array('i', [1, 2, 3, 3, 4])

del integerArray[2] # removing third element
print(integerArray) # Output: array('i', [1, 2, 3, 4])

del integerArray # deleting entire array
print(integerArray) # Error: array is not defined
```

```python
import array

IntegerArray = array.array('i', [10, 11, 12, 12, 13])

IntegerArray.remove(12)
print(IntegerArray)   # array('i', [10, 11, 12, 13])

print(IntegerArray.pop(2))   # Output: 12
print(IntegerArray)   # array('i', [10, 11, 13])
```

## Example Code of Dynamic Array

```python
class DynamicArray:
  def __init__(self, size = 8):
    self.count = 0
    self.size = size
    
    self.storage = [None] * self.size
 
# [None, None, None, None]
# value: 1

 def append(self, value):
    if self.count == self.size:
      # TODO: increase size
      print("Error: Array is full")
      return
      
    self.storage[self.count] = value
    self.count += 1
	
  # TODO cehck if we need to resize
  # [1,2,3,4, None]
	def insert(self, value, idx):
    
    if idx >= self.count:
      #TODO: better error handling
      print("Error: Index out of bounds")
      return
    
    # resize if we need
     if self.count == self.size:
			print("Error: Array is full")
      return
      
     # move everything over by one
     for i in range(self.count, idx, -1):
      self.storage[i] = self.storage[i - 1]
      
      self.storage[idx] = value
      
      self.count += 1
    
  
  def resize():
    self.size *= 2
    
    # make a new array, which double the size of the old array
    # [None, None, None, None, None, None, None, None]
    
    temp_storage = [None] * self.size
    
    # copy everything into the new arra
    for idx in range(self.size / 2):  # can also use self.count
    	temp_storage[idx] = self.storage[idx]
    
    self.storage = temp_storage
  
  
  {
    array: [None, None, None, None],
    hashFunction: ()
  }
  
  def myHash1(key):
    return len(key) % length_of_array
  
  # dog --> 3
  
  # Pro:
  # - deterministic
  # - non-invertible, one-way function
  
  # Con:
  # - output not unique!
  
  def myHash2(key):
    output_index = (len(key) * salt) % length_of_array
    
    return output_index
  
  # pro:
  # - deterministic
  # - none -invertible
  # - pretty unique
  
  def djb2(key):
    # some prime number
    our_salt = 5381
    
    # scramble each letter
    for char in key:
      hash_value = (our_salt << 5) our_salt + char
    
    return hash_value
      
```

```python
import hashlib

key = b'str'

my_string = 'this is normal string. nothing to see here'.encode()

for i in range(10):
	hashed = hashlib.sha256(key).hexdigest()
	print(hashed)
  
for i in range(10):
  hashed = hash = key
  print(hashed)

```



## Difference of Lists vs Arrays

- Python lists are very flexible and can hold completely heterogeneous arbitrary data, but they use a lot more space than C arrays. Each list contains pointers to a block of pointers, each of which in turn points to a full Python object. Again, the advantage of the list is flexibility: because each list element is a full structure containing both data and type information, the list can be filled with data of any desired type. Arrays lack this flexibility but are much more efficient for storing and manipulating data.

![Screen Shot 2020-01-30 at 9.39.39 AM](/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2020-01-30 at 9.39.39 AM.png)

## Similarities

- Arrays and lists are very similar in syntactical usage and functionality. Both are used to store data. Both are mutable, i.e., the data in both is not constant and can be modified. Both can also be indexed and iterated through. Both can be sliced and are in fact sliced the same way.

## When to use Arrays vs Lists

- Because of the way that lists are implemented, they can be appended to very efficiently. If you need to shrink and grow your array time-efficiently use them. It’s also better to use lists if you need to manage lots of different data types, however, arrays are better for when you need to store a lot of data and perform a large amount of computationally intensive mathematical operations. Note that the arrays from the NumPy Library are better for mathematical use cases.



## Problem Solving

```python
PROBLEM 1
# Implement a function which removes all the even elements from a given list. Name it removeEven(list).

myList = [1,2,4,5,10,6,3]
myList = [1,5,3]

# Solution 1
def removeEven(List):
    odds = [] # Create a new empty list
    for number in List: # Iterate over input list
        if number%2!=0: # Check if the item in the list is NOT even ('%' is the modulus symbol!)
            odds.append(number) # If it isn't even append it to the empty list
    return odds # Return the new list
  
print(removeEven([3,2,41,3,34]))

# Solution 2

# Time Complexity 
# Since the entire list has to be iterated over, this solution is in O(n)O(n).
def removeEven(List):
  return [number for number in List if number%2 !=0] 
# List comprehension to iter aover List and add to new list if not even

print(removeEven([3,2,41,3,34]))
```

### List comprehension

- A Python technique called **list comprehension** is used to iterate over the initial array. With list comprehension, checking a condition and appending to the new list can all be done in one line. The code for it starts and ends with a **‘[’** and ends with a **‘]’**. The basic syntax is

```python
newList = [expression(i) for i in oldList if filter(i)]
```

```python
PROBLEM 2
# Implement a function which merges two sorted lists into another sorted list. Name it merge_arrays(lst1, lst2).

def merge_arrays(lst1,lst2):
  # Write your code here
   newList = []
  for x in lst1:
    newList.append(x)
  for y in lst2:
    newList.append(y)
  newList.sort()
  print(newList)
  
# Solution 2: Creating a new list
# Merge arr1 and arr2 and return resulted list
def merge_arrays(lst1,lst2):
  index_arr1 = 0
  index_arr2 = 0
  index_result = 0
  result = []
  
  for i in range(len(lst1)+len(lst2)):
    result.append(i)
  #Traverse Both lists and insert smaller value from arr1 or arr2
  #into result list and then increment that lists index.
  #If a list is completely traversed, while other one is left then just
  #copy all the remaining elements into result list
  while (index_arr1 < len(lst1)) and (index_arr2 < len(lst2)):
    if (lst1[index_arr1] < lst2[index_arr2]):
      result[index_result] = lst1[index_arr1]
      index_result +=1
      index_arr1 +=1
    else: 
      result[index_result] = lst2[index_arr2]
      index_result +=1
      index_arr2 +=1
  while (index_arr1 < len(lst1)):
  	result[index_result] = lst1[index_arr1]
  	index_result +=1
  	index_arr1 +=1
  while (index_arr2 < len(lst2)):
    result[index_result] = lst2[index_arr2]
    index_result +=1
    index_arr2 +=1
  return result

print(merge_arrays([4,5,6],[-2,-1,0,7]))

# Solution 3: Merging in place
def merge_arrays(lst1,lst2):
  ind1 = 0 # Creating 2 new variable to track the 'current index'
  ind2 = 0
  while ind1 < len(lst1) and ind2 < len(lst2): # While both indeces are less than the length of their lists
    if(lst1[ind1] > lst2[ind2]): # If the current element of list1 is greater than the current element of list2
      lst1.insert(ind1,lst2[ind2]) # insert list2's current index to list1
      ind1+=1 # increment indeces
      ind2+=1
    else:
      ind1+=1
    
  if ind2 < len(lst2): # Append whatever is left of list2 to list1
    lst1.extend(lst2[ind2:])       
  return lst1

print(merge_arrays([4,5,6],[-2,-1,0,7]))
```





# Trees

Trees consist of vertices (nodes) and edges that connect them. They are similar to Graphs, except that a **cycle** cannot exist in a Tree - they are **acyclic**. In other words, there is always exactly one path between any two nodes

- **Root Node**: A node with no parent nodes. Generally, trees don’t *have* to have a root. However, **rooted trees** have one distinguished node and are largely what we will use in this course.

- **Child Node**: A Node which is linked to an upper node (*Parent Node*)

- **Parent Nodes**: A Node that has links to one or more child nodes which contains one or more *Child Nodes*

- **Sibling Node**: Nodes that share same *Parent Node*

- **Leaf Node**: A node that doesn’t have any *Child Node*

- **Ancestor Nodes**: the nodes on the path from a node *d* to the root node. Ancestor nodes include node *d*’s parents, grandparents, and so on

  ![Screen Shot 2020-01-30 at 11.15.29 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 11.15.29 AM.png)

  ## Other Terminologies and Formulas

  - **Sub-tree**: For a particular non-leaf node, a collection of nodes, essentially the tree, starting from its child node. The tree formed by a node and its descendants.
  - **Degree of a node**: Total number of children of a node
  - **Length of a path**: The number of edges in a path
  - **Depth of a node \*n\***: The length of the path from a node *n* to the root node. The depth of the root node is 0.
  - **Level of a node \*n\***: (Depth of a Node)+1
  - **Height of a node \*n\***: The length of the path from *n* to its deepest descendant. So the height of the tree itself is the height of the root node and the height of leaf nodes is always 0.
  - **Height of a Tree**: Height of its root node

  ![Screen Shot 2020-01-30 at 11.17.38 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 11.17.38 AM.png)

  ![Screen Shot 2020-01-30 at 11.18.31 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 11.18.31 AM.png)

- What makes a tree 'balanced'?








# Algorithm

- steps to solve a problem: UPER (Understand, Plan, Execute, Refactor)

## Stack

- just like the idea of stack / piling of books

### Stack Operations (First In, Last out)

- Push
  - The operation to insert elements in a stack is called **push**. When we *push* the book on a stack, we put the book on the previous *top* element which means that the new book becomes the *top* element. This is what we mean when we use the *push* operation, we *push* elements onto a stack. We insert elements onto a stack and the last element to be pushed is the new *top* of the stack.
- Pop
  - There is another operation that we can perform on the stack, popping. Popping is when we take the top book of the stack and put it down. This implies that when we remove an element from the stack, the stack follows the *First-In, Last Out* property. This means that the top element, the last to be inserted, is removed when we perform the pop operation.
- Peek
  - Another thing that we can do is view the top element of the stack so we can ask the data structure: “What’s the top element?” and it can give that to us using the *peek* operation. Note that the *peek* operation does not remove the *top* element, it merely returns it.

```python
"""
Stack Data Structure
"""

class Stack():
  def __init__(self):
    self.items = []
    
  def push(self, item): # pushing the item to the top of the stack
    self.items.append(item) # appends adds the item to the end of the list
    
  def pop(self, item):
    self.items.pop() # removing the item which is at the end of the list
    
  def get_stack(self):
    return self.items
  
  def is_empty(self):
    return self.items == []
  
  def peek(self):
    if not self.is_empty():
      return self.items[-1]
  
myStack = Stack()
myStack.push("A")
myStack.push("B")
print(myStack.get_stack())
myStack.push("C")
print(myStack.get_stack())
myStack.pop()
print(myStack.get_stack())
```

```python
from stack import Stack

def is_match(p1, p2):
    if p1 == "(" and p2 == ")":
        return True
    elif p1 == "{" and p2 == "}":
        return True
    elif p1 == "[" and p2 == "]":
        return True
    else:
        return False


def is_paren_balanced(paren_string):
    s = Stack()
    is_balanced = True
    index = 0

    while index < len(paren_string) and is_balanced:
        paren = paren_string[index]
        if paren in "([{":
            s.push(paren)
        else:
            if s.is_empty():
                is_balanced = False
            else:
                top = s.pop()
                if not is_match(top, paren):
                    is_balanced = False
        index += 1

    if s.is_empty() and is_balanced:
        return True
    else:
        return False

print("String : (((({})))) Balanced or not?")
print(is_paren_balanced("(((({}))))"))
# answer -> true

print("String : [][]]] Balanced or not?")
print(is_paren_balanced("[][]]]"))
# answer -> false

print("String : [][] Balanced or not?")
print(is_paren_balanced("[][]"))
# answer -> true
```

## Reverse String

```python
input_str = "Educative"
print(input_str[::-1])
```

```python
from stack import Stack
def reverse_string(stack, input_str):
  for i in range(len(input_str)):
    stack.push(input_str[i])
  rev_str = ""
  while not stack.is_empty():
    rev_str += stack.pop()

  return rev_str

stack = Stack()
input_str = "!evitacudE ot emocleW"
print(reverse_string(stack, input_str))
```























# Hash

- Until now, the overall time complexity accomplished by most of the data structures in **insertion**, **deletion**, and **search** was up to *O(nlogn)*, which is pretty good. But for a significantly large amount of data, this complexity starts to adversely affect the efficiency of an algorithm.
- Hashing is a process used to store an object according to a unique key. This means that hashing always creates a **key-value pair**. A collection of such pairs forms a *dictionary* where every object or value can be looked up according to its key. Hence, the search operation can be performed in *O(1)*.
- Functions: add, remove, lookup/find, change

```python
"""
	Hashing
	
	add						--> O(1)
	remove				--> O(1)
	lookup/find		--> O(1)
	change				--> O(1)
	
	all entries		--> O(n)
	all keys			--> O(n)
	all values		--> O(n)
	
	size					--> O(1)
	isEmpty				--> O(1)
	isFull				--> O(1)
	loadFactor()	--> O(1)

	CSSC010	--> 92%		--> 10
	CSSC011	--> 100%	--> 11
	CSSC012	--> 65%		--> 12
	CSSC013 --> 83%		--> 13

	Associative arrays
									Array 1								Array 2
	student id 			cssc 10				grade			92%
	key							cssc 11				value			100%

	---------	HASH FUNCTIONS	---------

	hashCode(string, id)
	remove cssc
	convert to int
	int - 10
	return int	
	

		- property of the data
		- be fast to compute
		- if two things are 'equal'
			should return the same value
		- always return the same value
			during one run at the code
		- possible to return different values for an object in separate runs
		
		
 Objects that need to overwrite
 	- toString
 	- equals
 	- hashCode -> object class has a hashCode needs to overwrite because it has a set of memorty 
 	location
 	- minimize collisions
 	
"""
```

![Screen Shot 2020-02-11 at 4.03.54 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-11 at 4.03.54 PM.png)

## Hash Tables

- If your algorithm prioritizes search operations, then a hash table is the best data structure for you. In Python, hash tables are generally implemented using lists as they provide access to elements in constant time.
- In Python, we have several in-built types such as `set` and `dict` which can provide us the hash table functionality.

![Screen Shot 2020-02-10 at 6.08.19 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-10 at 6.08.19 PM.png)

The performance of a hash table depends on three fundamental factors:

- Hash function
- Size of the hash table
- Collision handling method

## Restricting the Key Size

A **key** is used to map a value on the list and the efficiency of a hash table depends on how a key is computed. At first glance, you may observe that we can directly use the indices as keys because each index is unique.

The only problem is that the key would eventually exceed the size of the list and, at every insertion, the list would need to be resized. Syntactically, we can easily increase list size in Python, but as we learned before, the process still takes *O(n)* time at the back end.

In order to limit the range of the keys to the boundaries of the list, we need a function that converts a large key into a smaller key. This is the job of the **hash function**.

![Screen Shot 2020-02-11 at 10.14.50 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-11 at 10.14.50 AM.png)

A hash function simply takes an item’s key and returns the corresponding index in the list for that item. Depending on your program, the calculation of this index can be a simple arithmetic or a very complicated encryption method. However, it is very important to choose an efficient hashing function as it directly affects the performance of the hash table mechanism.

### Arithmetic Modular

In this approach, we take the modular of the key with the list size:	**index = key MOD tablesize**

Hence, the `index` will always stay between `0` and `tableSize - 1`.

```python
def hash_modular(key, size):
  return key % size

lst = [None] * 10 # List of size 10
key = 35
index = hash_modular(key, len(lst)) # Fit the key into the list size
print("The index for key " + str(key) + " is " + str(index))

# The index for key 35 is 5
```

### Truncation

Select a part of the key as the index rather than the whole key. Once again, we can use a mod function for this operation, although it does not need to be based on the list size: **key = 123456 --> index = 3456**

```python
def hash_trunc(key):
  return key % 1000 # Will always give us a key of up to 3 digits

key = 123456
index = hash_trunc(key) # Fit the key into the list size
print("The index for key " + str(key) + " is " + str(index))

# The index for key 123456 is 456
```

### Folding

Divide the key into small chunks and apply a different arithmetic strategy at each chunk. For example, you add all the smaller chunks together:	**key = 456789, chunk = 2 --> index = 45 + 67 + 89**

```python
def hash_fold(key, chunk_size): # Define the size of each divided portion
  str_key = str(key) # Convert integer into string for slicing
  print ("Key: "+ str_key)
  hash_val = 0
  print("Chunks:")
  for i in range(0, len(str_key),  chunk_size):
    
    if(i + chunk_size < len(str_key)):
      print(str_key[i:i+chunk_size]) # Slice the appropriate chunk from the string
      hash_val += int(str_key[i:i+chunk_size]) # convert into integer
    else:
      print(str_key[i:len(str_key)])
      hash_val += int(str_key[i:len(str_key)])
  return hash_val

key = 3456789
chunk_size = 2
print("Hash Key: " + str(hash_fold(key, chunk_size)))

### run
Key: 3456789
Chunks:
34
56
78
9
Hash Key: 177
```

## Hash Functions

- property of the data
- be fast to compute
- if two elements are "equal", should return the same value
- Always return the same value, during one run of the code
- possible to return different values for an object in seperate runs
- minimize collisions

```
Hash Function

hashCode (String, id)
	remove cs
	convert to int
	return int

Object
	toString
	equals
	hashCode
	
```



## Hash Collisions 

![Screen Shot 2020-02-11 at 4.21.36 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-11 at 4.21.36 PM.png)

```java
String s = "my name is rob"

char c = s.charAt(6);
System.out.println(c);

int i = s.charAt(6);
System.out.println(i);
output will be 9

this will print the unicode
ASCII --> unicode
unicode

0 - 9		48-57
A - Z		65-90
a - z		97-122
```

![Screen Shot 2020-02-11 at 4.32.19 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-11 at 4.32.19 PM.png)

```java
hashCode Strings

public int hashCode(String s) {
	int g = 31;
	int hash = 0;
	for(int i = 0; i < s.length; i++) {
		hash = g * hash + s.charAt(i);
	}
}

/*
- use odd sized table
- table size is a prime number
  
  
8 bit two complement
  
  0 0 0 0 0 0 0 0 = 0
  0 0 0 0 0 0 0 0 = 1
  0 0 0 0 0 0 0 0 = 2
  0 1 1 1 1 1 1 0 = 126
  0 1 1 1 1 1 1 1 = 127
  1 1 1 1 1 1 1 1 = -1
  1 1 1 1 1 1 1 0 = -2
  1 0 0 0 0 0 0 1 = - 127
  1 0 0 0 0 0 0 0 = - 128
  
  
  -1  & 0 x 7FFFFFFF --> 2147483647
  -10 & 0 x 7FFFFFFF --> 2147483638
  
  */

public int hashCode(String s) {
  int hashval = data.hashCode(s);
  hashval = hashval & 0x7FFFFFFF
  hashval = hashval % tableSize
}
```





# Blockchain

Blockchain is a term used to describe **DLT**, or **Distributed Ledger Technology**. Blockchain is used to create a storage system for data in a distributed and immutable manner.

### Immutability

This means that once data is written to a blockchain data store or **ledger**, it cannot be changed – its there forever

A blockchain system ensures that even if a bit of data is changed at any level on the ledger, the entire system will report an `invalid` state. And since the data is `distributed` on multiple systems, the actual data with a valid state can be recovered from one of the systems.

### Distribution

As long as you see data on a blockchain and its in a `valid` state on a majority `distributed` nodes, you can trust that data to be accurate. This *trust* is key. This trust is achieved in a blockchain system by replicating the datastore on a number of peers(hosts) on the internet. If one of the misbehaving peers goes in an `invalid` state, the other peers can filter it out. As long as there is a majority of peers agreeing to a common `valid` state, you can completely trust the data that is stored on that system. This replication also guarantees high availability.

The data store that keeps all blockchain data is called a **ledger**.

Each entry in the ledger is called a **transaction**. 

The transactions are timestamped and stored in groups of **blocks**.

The **ledger** is designed to be immutable using cryptographic algorithms. The **ledger** is replicated and maintained by multiple **hosts** or **peers** or **nodes**. This is why its called **DLT** or **Distributed Ledger Technology**.



## HASH FUNCTIONS

A hash function maps data of arbitrary length to a unique fixed length string, called digest.

A hash value for a data is X is a function:

​	Hash(X) = Y

- No other X’ can have HASH(X’) equal to Y. Its one to one mapping.
- The size of Y is fixed and the size of X can be arbitrary.
- Given Y you can not calculate X. Its a one-way function!

![Screen Shot 2020-02-12 at 3.30.31 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-12 at 3.30.31 PM.png)

### SHA256 Hash Function

You can find libraries that implement SHA256 hash in all technologies, so you never have to write your code for SHA256 implementation.

### Public key cryptography

Public key cryptography is a cryptographic system used for the encryption/decryption of data. It is not one way like a hash function, meaning that the data, once encrypted, can be decrypted if you have the required key.

You start by generating a special, related pair of keys. These keys can be generated in a pair only. They are output from single execution of a key generation algorithm.

![Screen Shot 2020-02-12 at 3.34.53 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-12 at 3.34.53 PM.png)

Color Coding: Golden key is for private key and Silver is for public key



PROOF OF WORK







