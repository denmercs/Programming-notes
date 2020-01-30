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

![Screen Shot 2020-01-29 at 12.01.51 PM](/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2020-01-29 at 12.01.51 PM.png)

![Screen Shot 2020-01-29 at 12.01.58 PM](/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2020-01-29 at 12.01.58 PM.png)

![Screen Shot 2020-01-29 at 12.02.09 PM](/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2020-01-29 at 12.02.09 PM.png)

![Screen Shot 2020-01-29 at 12.02.14 PM](/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2020-01-29 at 12.02.14 PM.png)

![Screen Shot 2020-01-29 at 12.02.19 PM](/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2020-01-29 at 12.02.19 PM.png)

![Screen Shot 2020-01-29 at 12.02.27 PM](/Users/dennismercado/Desktop/Programmer/Notes/Screen Shot 2020-01-29 at 12.02.27 PM.png)

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

- Changing or adding array elements  - Arrays are mutable; their elements can be changed in the same way as list elements.

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

# Linked List

## Singly Linked List

- The most primitive form of the linked list data structure is the **singly linked list**.

![Screen Shot 2020-01-30 at 10.54.49 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 10.54.49 AM.png)

- As you can see in the illustration above, a linked list is formed by **Nodes** which are linked together like a chain. Each Node holds data along with a forward pointer to the next Node in the list. The absence of a backwards pointer implies that there is a uni-directional link, i.e., the whole list points in one direction and cannot point backwards. This is why it is called a singly linked list.

  1. Node Class

     The Node class has two components:

     - **Data** - the value you want to store in the node. Think of it as the value at a specific index in a list. The data type can range from *string* or *integer* to a custom class.
     - **Pointer** - refers us to the next Node in the list. It is essential for connectivity.

     ```python
     class Node:
       def __init__(self, data):
         self.data = data
         self.next_element = None
     ```

  2. LinkedList Class

     - The linked list itself is a collection of Node objects which we defined above. To keep track of the list, we need a pointer to the first Node in the list.

       This is where the principle of the **head** Node comes in. The head does not contain any data and only points to the beginning of the list. This means that, for any operations on the list, we need to traverse it from the head (the start of the list) to reach our desired list Node.

     ```python
     class LinkedList:
       def __init__(self):
         self.head_node = None
     ```

  Difference of LinkedList and Lists

  - The main difference between normal Python lists and linked lists is memory allocation. A list instantiates a fixed block of memory based on the size we define in its declaration.

    On the other hand, a linked list can access or release memory based on the addition and deletion elements. Its size is not fixed.

  - Other differences can be observed in the way elements are inserted and deleted. Linked list insertion and deletion happens in a constant amount of time, while in case of lists it takes *O(n)* time to insert or delete a value because you have to shift the list elements left or right after that operation. In case of accessing an element, for a list it takes constant time to access an index, while in case of a linked list you will have to iterate the list from start till you find the node with the correct value.

    | Operations      | LinkedList | Array |
    | --------------- | ---------- | ----- |
    | access          | O(n)       | O(1)  |
    | insert(at head) | O(1)       | O(n)  |
    | delete(at head) | O(1)       | O(n)  |

  # Trees

  Trees consist of vertices (nodes) and edges that connect them. They are similar to Graphs, except that a **cycle** cannot exist in a Tree - they are **acyclic**. In other words, there is always exactly one path between any two nodes

  - **Root Node**: A node with no parent nodes. Generally, trees don’t *have* to have a root. However, **rooted trees** have one distinguished node and are largely what we will use in this course.

  - **Child Node**: A Node which is linked to an upper node (*Parent Node*)

  - **Parent Nodes**: A Node that has links to one or more child nodes which contains one or more *Child Nodes*

  - **Sibling Node**: Nodes that share same *Parent Node*

  - **Leaf Node**: A node that doesn’t have any *Child Node*

  - **Ancestor Nodes**: the nodes on the path from a node *d* to the root node. Ancestor nodes include node *d*’s parents, grandparents, and so on

    ![Screen Shot 2020-01-30 at 11.15.29 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 11.15.29 AM.png)

    ## Other Terminologies and Formulas

    - **Sub-tree**: For a particular non-leaf node, a collection of nodes, essentially the tree, starting from its child node. The tree formed by a node and its descendants.
    - **Degree of a node**: Total number of children of a node
    - **Length of a path**: The number of edges in a path
    - **Depth of a node \*n\***: The length of the path from a node *n* to the root node. The depth of the root node is 0.
    - **Level of a node \*n\***: (Depth of a Node)+1
    - **Height of a node \*n\***: The length of the path from *n* to its deepest descendant. So the height of the tree itself is the height of the root node and the height of leaf nodes is always 0.
    - **Height of a Tree**: Height of its root node

    ![Screen Shot 2020-01-30 at 11.17.38 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 11.17.38 AM.png)

    ![Screen Shot 2020-01-30 at 11.18.31 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/Screen Shot 2020-01-30 at 11.18.31 AM.png)

  - What makes a tree 'balanced'?

    