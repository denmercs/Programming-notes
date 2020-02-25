# Graphs

- a graph is a set of nodes that are connected to each other in the form of a network.

## Vertex

- is the most essential part of a graph. A collection of vertices forms a graph. Vertices are similar to linked list nodes

## Edges

- link between two vertices. It can be uni-directional or bi-directional depending on your graph. An edge can also have a cost associated with it.

![Screen Shot 2020-02-17 at 10.01.32 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-17 at 10.01.32 PM.png)

## Terminologies

1. **Degree of a vertex**: the total number of edges connected to a vertex. There are two types of degrees:
   - In-Degree: The total number of incoming edges connected to a vertex
   - Out-Degree: The total number of outgoing edges connected to a vertex
2. **Parallel Edges:** Two undirected edges are parallel if they have the same end vertices. Two directed edges are parallel if they have the same origin and destination.
3. **Self Loop**: This occurs when an edge starts and ends on the same vertex
4. **Adjacency:** two vertices are said to be adjacent if there is an edge connecting them directly.

## Types of Graphs

1. Undirected

   - the edges are, by default, bi-directional. 

   - For a **pair (2, 3)**, there exists an edge between vertex **2** and **3** without any specific direction. You can go from vertex **2** to **3** or from **3** to **2** or vice versa.

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-17 at 10.33.05 PM.png" alt="Screen Shot 2020-02-17 at 10.33.05 PM" style="zoom:50%;" />

2. Directed

   - In a directed graph, the edges are unidirectional.

   - For a **pair (2, 3)**, there exists an edge from vertex **2** towards vertex **3** and the only way to traverse is to go from **2** to **3**, not the other way around.

   - This changes the number of edges that can exist in the graph. For a directed graph with **n** vertices, the minimum number of edges that can connect a vertex with every other vertex is **n-1**. This excludes self loops.

     If you have **n** vertices, then all the possible edges become **n\*(n-1)**.

<img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-17 at 11.34.33 PM.png" alt="Screen Shot 2020-02-17 at 11.34.33 PM" style="zoom:50%;" />

## Way to Represent a graph

1. Adjacency Matrix

   - a two dimensional matrix where each cell can contain a **0** or **1** . The row and column headings represent the vertices.

   - If a cell contains **1**, there exists an edge between the corresponding vertices

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-17 at 11.37.14 PM.png" alt="Screen Shot 2020-02-17 at 11.37.14 PM" style="zoom:50%;" />

   - In the image above, there is a directed graph which has an edge going from vertex 0 to vertex 1, so there is a **1** at Matrix [0[1]] in the adjacency matrix. In the case of the undirected graph, we would have Matrix [1] [0] = 1 as well since the edge is bidirectional.

2. **Adjacency List**

   - A list of linked lists is used to store all the edges in the graph. The size of the list is equal to the number of vertices.
   - Each index of the list contains a vertex. This vertex points to a linked list which contains all the vertices connected to this one.

![Screen Shot 2020-02-17 at 11.39.15 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-17 at 11.39.15 PM.png)

The implementation will be based on the **adjacency list** model. The linked list class we created earlier will be used to represent adjacent vertices.

![Screen Shot 2020-02-17 at 11.40.48 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-17 at 11.40.48 PM.png)

## The Graph Class

- total number of vertices in the graph
- a list of linked lists to store adjacent vetices

```python
# Graph.py

from LinkedList import LinkedList
class Graph:
  def __init__(self, vertices):   
    #Total number of vertices 
    self.vertices =vertices  
    #definining a list which can hold multiple LinkedLists equal to the number of vertices in the graph
    self.array = []
    #Creating a new Linked List for each vertex/index of the list
    for i in range(vertices):
      temp = LinkedList()
      self.array.append(temp)
      
  #Function to add an edge from source to destination
  def add_edge(self, source, destination):
    #As we are implementing a directed graph, (1,0) is not equal to (0,1)
    self.array[source].insert_at_head(destination)

    #If we were to implement an Undirected Graph i.e (1,0) == (0,1) 
    #We would create an edge from destination towards source as well
    #i.e self.list[destination].insertAtHead(source) 
  
  def print_graph(self):  
   print(">>Adjacency List of Directed Graph<<")
   print
   for i in range(self.vertices):    
    print("|", i, end = " | => ")   
    temp = self.array[i].get_head()    
    while(temp != None):     
     print("[" , temp.data, end = " ] -> ")       
     temp = temp.next_element
    print("None")
```

```python
from Node import Node
class LinkedList:
  def __init__(self):
    self.head_node = None

  def get_head(self):
    return self.head_node

  def is_empty(self):
    if(self.head_node == None): # Check whether the head is None
      return True
    else:
      return False
    
  def insert_at_head(self,dt):
    temp_node= Node(dt)
    if self.is_empty():
      self.head_node = temp_node
      return self.head_node
    
    temp_node.next_element = self.head_node
    self.head_node.previous_element = temp_node
    self.head_node = temp_node
    return self.head_node
```

```python
class Node:
  def __init__(self, data):
    self.data = data
    self.next_element = None
    self.previous_element = None
```

```
0.522s
>>Adjacency List of Directed Graph<<
| 0 | => [ 2 ] -> [ 1 ] -> [ 1 ] -> None
| 1 | => [ 3 ] -> None
| 2 | => [ 3 ] -> None
| 3 | => None
3
```

## Time Complexities

- Note that, in this table, **V** means the total number of vertices and **E** means the total number of edges in the Graph.

| **Operation**   | **Adjacency List** | **Adjacency Matrix** |
| --------------- | ------------------ | -------------------- |
| *Add Vertex*    | O(1)               | O(V2)                |
| *Remove Vertex* | O(V+E)             | O(V2)                |
| *Add Edge*      | O(1)               | O(1)                 |
| *Remove Edge*   | O(E)               | O(1)                 |
| *Search*        | O(V)               | O(1)                 |

## Adjacency List

- Addition operations in adjacency lists take constant time as we only need to insert at the **head** node of the corresponding vertex.
- Removing an edge takes O(E) time because, in the worst case, all the edges could be at a single vertex and hence, we would have to traverse all **E** edges to reach the last one.
- Removing a vertex takes O(V + E) time because we have to delete all its edges and then reindex the rest of the list one step back in order to fill the deleted spot.
- Search can take up to O(V) if all **V** nodes are present at a certain index and we have to traverse them.

## Adjacency Matrix

- Edge operations are performed in constant time as we only need to manipulate the value in the particular cell.
- Vertex operations are performed in O(V2) since we need to add rows and columns. We will also need to fill all the new cells.
- Search is simply O(1) because we can access each edge by indexing.



## Bipartite Graph

- a special member of the graph family. The vertices of this graph are divided into two disjoint parts in such a way that no two vertices in the same part are adjacent to each other.

- The bipartite graph is a type of **k-partite graph** where **k** is 2. In a 5-partite graph, we would have 5 disjoint sets and members of a set would not be adjacent to each other.

  ![Screen Shot 2020-02-18 at 8.02.23 AM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.02.23 AM.png)

**Can a cyclic graph be Bi-Partite?**

- A **cyclic** graph is one in which the edges form a cycle between the vertices. If you traverse a cyclic graph, you would come back to a vertex which you have already visited. 

<img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.04.06 AM.png" alt="Screen Shot 2020-02-18 at 8.04.06 AM" style="zoom:50%;" />

- The question arises, can a cyclic graph be a bipartite graph? Yes it can.

- In the illustration below, you can see that the graph has an even number of nodes, which means that they can be divided into two disjoint sets having non-adjacent vertices.

- If there were an odd number of vertices, the nodes could never be divided into two disjoint and non-adjacent sets.

<img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.05.49 AM.png" alt="Screen Shot 2020-02-18 at 8.05.49 AM" style="zoom:50%;" />

## Type of Graph Traversal

1. **Breadth First Search (BFS)**

   - The BFS algorithm earns its name because it grows breadth-wise. All the nodes in a certain level are traversed before moving on to the next level.

   - The level-wise expansion ensures that for any starting vertex, you can reach all others, one level at a time.

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.09.43 AM.png" alt="Screen Shot 2020-02-18 at 8.09.43 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.09.52 AM.png" alt="Screen Shot 2020-02-18 at 8.09.52 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.10.02 AM.png" alt="Screen Shot 2020-02-18 at 8.10.02 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.10.11 AM.png" alt="Screen Shot 2020-02-18 at 8.10.11 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.10.27 AM.png" alt="Screen Shot 2020-02-18 at 8.10.27 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.10.36 AM.png" alt="Screen Shot 2020-02-18 at 8.10.36 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.10.45 AM.png" alt="Screen Shot 2020-02-18 at 8.10.45 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.10.53 AM.png" alt="Screen Shot 2020-02-18 at 8.10.53 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.11.01 AM.png" alt="Screen Shot 2020-02-18 at 8.11.01 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.11.09 AM.png" alt="Screen Shot 2020-02-18 at 8.11.09 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.11.16 AM.png" alt="Screen Shot 2020-02-18 at 8.11.16 AM" style="zoom:50%;" />

2. **Depth First Search (DFS)**

   - The DFS algorithm is the opposite of BFS in the sense that it grows depth-wise.

   - Starting from any node, we keep moving to an adjacent node until we reach the farthest level. Then we move back to the starting point and pick another adjacent node. Once again, we probe to the farthest level and move back. This process continues until all nodes are visited.

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.14.25 AM.png" alt="Screen Shot 2020-02-18 at 8.14.25 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.14.33 AM.png" alt="Screen Shot 2020-02-18 at 8.14.33 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.14.41 AM.png" alt="Screen Shot 2020-02-18 at 8.14.41 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.14.50 AM.png" alt="Screen Shot 2020-02-18 at 8.14.50 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.14.57 AM.png" alt="Screen Shot 2020-02-18 at 8.14.57 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.15.04 AM.png" alt="Screen Shot 2020-02-18 at 8.15.04 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.15.11 AM.png" alt="Screen Shot 2020-02-18 at 8.15.11 AM" style="zoom:50%;" />

     <img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-18 at 8.15.18 AM.png" alt="Screen Shot 2020-02-18 at 8.15.18 AM" style="zoom:50%;" />



## Implementing Breadth First Search

```python
def bfs_traversal(g,source):
  result = ""
  num_of_vertices = g.vertices
	#Alist to hold the history of visited nodes
	#Make a node visited whenever you enqueue it into queue
  visited = []
  for i in range(num_of_vertices):
    visited.append(False)
  #Create Queue(implemented in previous lesson) for Breadth First Traversal and enqueue source in it
  queue = MyQueue()
  queue.enqueue(source)
  visited.insert(source,True)
 #Traverse while queue is not empty
  while(queue.is_empty() == False):
  #Dequeue a vertex/node from queue and add it to result
   current_node = queue.dequeue()
   result += str(current_node)
	#Get adjacent vertices to the current_node from the list,
	#and if they are not already visited then enqueue them in the Queue
   temp = g.array[current_node].head_node
   while (temp != None):
    if(visited[temp.data] == False):
      queue.enqueue(temp.data)
      visited[temp.data] = True; #Visit the current Node
    temp = temp.next_element
  return result #For the above graph it should return "01234" or "02143"
```

```python
class Queue():
    def __init__(self):
        self.queue = []
    def enqueue(self, value):
        self.queue.append(value)
    def dequeue(self):
        if self.size() > 0:
            return self.queue.pop(0)
        else:
            return None
    def size(self):
        return len(self.queue)

class Graph:

    """Represent a graph as a dictionary of vertices mapping labels to edges."""
    def __init__(self):
        self.vertices = {}
        
    def bft(self, starting_vertex):
            """
            Print each vertex in breadth-first order
            beginning from starting_vertex.
            """
            # Create a stack/queue as appropriate
            # using a queue because its first-in, first out
            queue = Queue()
            # Put the starting point in that
            queue.enqueue(starting_vertex)
            # Make a set to keep track of where we have been
            visited = set()
            # While there is stuff in the stack/queue
            while queue.size() > 0:
                # Pop the first item
                vertex = queue.dequeue()
                # If not visited
                if vertex not in visited:
                    # DO THE THING!
                    print(vertex)
                    # Add to visited
                    visited.add(vertex)
                    # For each edge in the item
                    for next_vert in self.get_neighbors(vertex):
                        # Add that edge to the stack/queue
                        queue.enqueue(next_vert)
```

