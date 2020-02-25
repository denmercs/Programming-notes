# Linked List

## Singly Linked List

- The most primitive form of the linked list data structure is the **singly linked list**.

![Screen Shot 2020-01-30 at 10.54.49 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 10.54.49 AM.png)

- As you can see in the illustration above, a linked list is formed by **Nodes** which are linked together like a chain. Each Node holds data along with a forward pointer to the next Node in the list. The absence of a backwards pointer implies that there is a uni-directional link, i.e., the whole list points in one direction and cannot point backwards. This is why it is called a singly linked list.

  

  ![Screen Shot 2020-02-11 at 1.29.01 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-11 at 1.29.01 PM.png)

  

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

    ### Primary Operations generally part of LinkedList

    - `get_head()` - returns the head of the list
      - `insert_at_tail(data)` - inserts an element at the end of the linked list
    - `insert_at_head(data)` - inserts an element at the start/head of the linked list
    - `delete(data)` - deletes an element with your specified value from the linked list
    - `delete_at_head()` - deletes the first element of the list
    - `search(data)` - searches for an element in the linked list
    - `is_empty()` - returns true if the linked list is empty

  - ```python
    class Node:
      def __init__(self, data):
        self.data = data
        self.next_element = None
        
    class LinkedList:
      def __init__(self):
        self.head_node = None
      
      def get_head(self): # Time Complexity --> O(1)
        return self.head_node
      
      def is_empty(self): # Time Complexity --> O(1)
        if self.head_node == None:
          return True
        else:
        	return False
      
    ```

  ## Insertion

  - types of insertion strategies used in singly linked list:

    - Insertion at the head -  we want to insert a new element as the first element of the list.
    - Insertion at the tail
      - Insertion at the n-th index

    ![Screen Shot 2020-01-30 at 4.01.26 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.01.26 PM.png)

    ![Screen Shot 2020-01-30 at 4.01.47 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.01.47 PM.png)

    ![Screen Shot 2020-01-30 at 4.01.54 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.01.54 PM.png)

    ![Screen Shot 2020-01-30 at 4.02.03 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.02.03 PM.png)

    ![Screen Shot 2020-01-30 at 4.02.11 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.02.11 PM.png)

    ![Screen Shot 2020-01-30 at 4.02.17 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.02.17 PM.png)

    ![Screen Shot 2020-01-30 at 4.02.23 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.02.23 PM.png)

    ![Screen Shot 2020-01-30 at 4.02.30 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.02.30 PM.png)

  

  ```
  ### 	A. Insertion at the head
  ```

  ​	

  ```python
  class Node:
    def __init__(self, data):
      self.data = data
      self.next_element = None
      
  class LinkedList:
    def __init__(self):
      self.head_node = None
    
    def insert_at_head(self, data):
      temp_node = Node(data)
      temp_node.next_element = self.head_node
      self.head_node = temp_node
      return self.head_node
    
    
    def is_empty(self): # Time Complexity --> O(1)
      if self.head_node == None:
        return True
      else:
        return False
      
    #Supplementary print function    
    def print_list(self): 
      if(self.is_empty()):
        print("List is Empty")
        return False   
      temp=self.head_node    
      while temp.next_element is not None:
       print(temp.data , end = " -> ")
     temp=temp.next_element    
      print(temp.data , "-> None")
    return True    
    
lst = LinkedList();
  print(lst.get_head()); 
# Returns None since headNode does not contain any data
  ```

  

  ![Screen Shot 2020-01-30 at 4.15.30 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.15.30 PM.png)

  ![Screen Shot 2020-01-30 at 4.15.38 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.15.38 PM.png)

  ![Screen Shot 2020-01-30 at 4.15.43 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.15.43 PM.png)

  ![Screen Shot 2020-01-30 at 4.15.50 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-01-30 at 4.15.50 PM.png)

  

  ### B. Insertion at tails

![Screen Shot 2020-02-24 at 11.55.07 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.55.07 PM.png)

![Screen Shot 2020-02-24 at 11.55.15 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.55.15 PM.png)

![Screen Shot 2020-02-24 at 11.55.22 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.55.22 PM.png)

![Screen Shot 2020-02-24 at 11.55.28 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.55.28 PM.png)

![Screen Shot 2020-02-24 at 11.55.35 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.55.35 PM.png)

![Screen Shot 2020-02-24 at 11.55.41 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.55.41 PM.png)

![Screen Shot 2020-02-24 at 11.55.49 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.55.49 PM.png)

![Screen Shot 2020-02-24 at 11.55.56 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.55.56 PM.png)

![Screen Shot 2020-02-24 at 11.56.03 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.56.03 PM.png)

  ```python
  class Node:
    def __init__(self, data):
      self.data = data
      self.next_element = None
      
  class LinkedList:
    def __init__(self):
      self.head_node = None
    
     #Inserts a value at the end of the list  
    def insert_at_tail(lst,value): ###---> O(n)
      #Creating a new node 
      new_node = Node(value)
  
      #Checking to see if the list is empty, if it is simply point head to new node      
      if lst.get_head() is None:
        lst.head_node = new_node
        return
  
      #if list not empty, traverse the list to the last node
      temp = lst.get_head()
  
      while temp.next_element is not None:
        temp = temp.next_element
  
      #Set the nextElement of the previous node to new node
      temp.next_element = new_node
      return
    
    def is_empty(self): # Time Complexity --> O(1)
      if self.head_node == None:
        return True
      else:
        return False
      
    #Supplementary print function    
    def print_list(self): 
      if(self.is_empty()):
        print("List is Empty")
        return False   
      temp=self.head_node    
      while temp.next_element is not None:
       print(temp.data , end = " -> ")
       temp=temp.next_element    
    print(temp.data , "-> None")
      return True    
  
  lst = LinkedList();
  print(lst.get_head()); 
  # Returns None since headNode does not contain any data
  
  ```

### C. Search 

1. Start from the `head` node.
2. Traverse the list till you either find a node with the given value or you reach the end node which will indicate that the given node doesn’t exist in the list.

  

### D. Deletion

The **deletion** operation combines principles from both **insertion** and **search**. It uses the search functionality to find the value in the list.

Deletion is one of the instances where linked lists are more efficient than arrays. In an array, you have to shift all the elements backward if one element is deleted. Even then, the end of the array is empty and it takes up unnecessary memory.

In the case of linked lists, the node is simply removed in *constant time*.

Let’s take a look at the different types of deletion operations we can perform in singly linked lists.

### Types of Deletion

There are three basic delete operations for linked lists:

1. Deletion at the head
2. Deletion by value
3. Deletion at the tail

### Delete Head

This operation simply deletes the first node from a list. If the list is empty, the function does nothing.

![Screen Shot 2020-02-24 at 11.59.18 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.59.18 PM.png)

![Screen Shot 2020-02-24 at 11.59.26 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.59.26 PM.png)

![Screen Shot 2020-02-24 at 11.59.35 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.59.35 PM.png)

![Screen Shot 2020-02-24 at 11.59.41 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-24 at 11.59.41 PM.png)

## Common Steps on LinkedList

- create a node

- create a class: example linked_list

- in very class there shoud be a head

  ```python
  class Node: 
    def __init__(self, data):
      self.data = data
      self.next = None
      
  class LinkedList:
    def __init__(self):
      self.head = Node()
  ```

- create a new node (    [ ]    )

- set the head / current

   

  ```python
  class LinkedList:
    def __init__(self):
      self.head = Node()
      
    def append(self, data):
      new_node = Node(data)
      current = self.head
  ```

- to traverse to the next node use the .next

  ```python
  class LinkedList:
    def __init__(self):
      self.head = Node()
      
    def append(self, data):
      new_node = Node(data)
      current = self.head
      
      while current.next is not None:
        # traverse to the next node
        current = current.next
        
  ```


## All functionality (INSERT, SEARCH, DELETE)

```python
class Node:
  def __init__(self, data):
    # 2 things needed (data and the pointer)
    self.data = data
    self.next_element = None

class LinkedList:
  def __init__(self):
    self.head_node = None

  def insert_at_head(self, data):
    # create Node
    temp_node = Node(data)
    
    # set a temporary node
    # set the pointer from temporary node to head
    temp_node.next_element = self.head_node 

    # set the head to the temporary node
    self.head_node = temp_node
    
    # return head
    return self.head_node

  def insert_at_tail(self, data):
    #create new node
    new_node = Node(data)
    
    #check the head if its Empty
    if self.head_node is None:
      self.head_node = new_node
      return

    #set the temp node to be the head
    temp_node = self.head_node

    #loop if next node is not empty
    while temp_node.next_element is not None:
      temp_node = temp_node.next_element

    #set next node into new node
    temp_node.next_element = new_node
    return

  def search(self, value):
    current_node = self.head_node

    while current_node:
      if current_node.data is value:
        return True

      current_node = current_node.next_element
    
    return False
    
  def delete_at_head(self):
    # check the first element set to head node
    first_element = self.head_node

    # first element is not None
    if first_element is not None:
      # set the head node to the first element
      self.head_node = first_element.next_element
      # remove the pointer by setting it to None
      first_element.next_element = None

  def delete(self, value):
    if self.head_node is None:
      return True
    
    previous_node = None
    current_node = self.head_node

    while current_node:
      # if current node data is equal to value
      if current_node.data is value:
        # connect prev pointer to the next pointer
        previous_node.next_element = current_node.next_element
        # delete current node pointer
        current_node.next_element = None
        break
      # set the prev node to current_node
      previous_node = current_node
      # check the next pointer
      current_node = current_node.next_element

  def is_empty(self):
    if self.head_node == None:
      return True
    else:
      return False

  def print_list(self):
    if(self.is_empty()):
        print("List is Empty")
        return False
    temp = self.head_node
    while temp.next_element is not None:
        print(temp.data, end=" -> ")
        temp = temp.next_element
    print(temp.data, "-> None")
    return True


list = LinkedList()
list.print_list()

print("Inserting values in list")
for i in range(1, 10):
    list.insert_at_head(i)
    list.insert_at_tail(i)
print(list.search(3))
list.print_list()
list.delete_at_head()
list.print_list()
list.delete(4)
list.print_list()
```



## Boundary Conditions

- Empty data structure
- Single element in the data structure
- Adding / Removing beginning of data structure
- Adding / REmoving end of the data structure
- Working in the middle