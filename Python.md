# PYTHON

## Problem Solving

1. Understand

   - The most crucial thing to do before you do anything else is to understand all of the details of what the problem is asking you to do. One helpful starting point is to transcribe the description of the problem from the page into your own words.

2. Plan

   - This is where you will ask *what steps will I take to solve the problem*? You will take your description of the problem and transform it into a complete, actionable plan to solve that problem. If you find shortcomings in your understanding of the problem while you’re planning, drop back to Step 1 until you resolve the ambiguity. If you have not yet completed Step 1, you will end up planning to solve the wrong problem! When interviewing, it’s very important that you do this step aloud!

     Remember, you aren’t coding during this step, unless it’s small pieces of throwaway code to test a hypothesis. You should write pseudocode during this step, however.

3. Execute

   - This is where you take your plan and convert it to actual, working code. This step isn’t easy, but it’s much easier if you’ve done a good job with Steps 1 and 2 above. If you find shortcomings in your plan while you’re implementing the solution, drop back to Step 2 until you resolve the ambiguity. If you have not yet completed Step 2, you will spend far longer on this step than you have to.

4. Reflect

   - Is this implementation as good as I can make it? Would I be proud to show my code to another programmer?

### Variable

```python
age = 30
friend_age = 40
PI = 3.14159		## constant
RADIANS_TO_DEGREES = 180 / PI

print(age)
print(30)
```

### Numbers and Math

```python
math_operations = 1 + 3 * 4 / 2 - 2
print(math_operations)

float_division = 12 /3
print(float_division)	## 2.6666666668

integer_division = 8 // 3
print(integer_division)		## 2
```

### Remainder

```python
division_with_remainder = 12 // 5
print(division_with_remainder)	## 2

remainder = 13 % 5
print(remainder) ## 3

x = 37
remainder = x % 2
print(remainder) ## 1
```

### Strings

```python
my_string = "Hello, world!"
print(my_string)

string_with_quotes = "Hello, it's me."
another_with_quotes = 'Hello "Dennis"!'
another_with_quotes = "Hello \"Dennis\"!"
multiline = """
	Hello, world! My name is Dennis.
	Welcome to my program!
"""

# Single Comment 
"""
	Multiline comment 
"""

name = "Dennis"
greeting = "Hello, " + name

age = 34
age_as_str = str(age)

name = 'Dennis'
greeting = f"How are you, {name}?"

print(string_with_quotes)
print(another_with_quotes)
print(greeting)
print("You are " + age_as_str)
print(f"You are {age}")

# Using .format

name = "Jose"
final_greeting = "How are you, {}?"
jose_greeting = final_greeting.format(name)
print(jose_greeting)

bob_greeting = final_greeting.format("bob")
print(bob_greeting)

name = "Jose"
final_greeting = "How are you, {name}?"
jose_greeting = final_greeting.format(name=name)
print(jose_greeting)

```

### Input

```python
my_name = "Jose"
your_name = input("Enter your name:")

print(f"Hello {your_name}. My name is {my_name}.)
      
age = input("Enter your age: ")		# this is just a string value 
age_num = int(age)	# convert it to string to integer
print(f"You have lived for {age_num * 12} months.)
```

### Boolean

```python
truthy = True
falsy = False

age = 20
is_over_age = age >= 18	# True
is_under_age = age < 18 # False
is_twenty = age == 20	# true

my_number = 5
user_number = int(input("Enter a number: "))

matches = my_number == user_number
print(f"You got it right: {matches}."")
```

### And, Or

```python
age = int(input("Enter your age: "))
can_learn_programming = age > 0 and age < 150

print(f"you can learn programming: {can_learn_programming}.")

age = int(input("Enter your age: "))
usually_wokring = age >= 18 or age <= 65

print(f"At {age}, you are usually working: {usually_working}.")

print(bool(35)) # True
print(bool("")) # False
print(bool(0)) # False
```

### List

```python
friends = ["Rolf", "Bob", "Anne"]

print(friends[0]) # Rolf
print(friends[1]) # Bob
print(len(friends)) # 3

friends = [["Rolf", 24], ["Bob", 30], ["Anne", 27]]
print(friends[0][1])

# Append
friends = ["Rolf", "Bob", "Anne"]
friends.append("Jen")
print(friends) # ["Rolf", "Bob", "Anne", "Jen"]

# Remove
friends.remove("Jen")
print(friends) # ["Rolf", "Bob", "Anne"]

```

### Tuple

```python
# You can't append on a tuple since it's immutable

short_tuple = "Rolf", "Bob" # brackets are not required
a_bit_clearer = ("Rolf", "Bob")
tuple_in_list = [("Rolf", "Bob")]
not_a_tuple = "Rolf"

# Adding data to a tuple
friends = ("Rolf", "Bob", "Anne")
new_friends = friends + ("John", )

```

### Sets

```python
# Sets don't hold order and don't contained duplicate elements


art_friends = {"Rolf", "Anne"}
science_friends = {"Jen", "Charlie"}

art_friends.add("Jen")
art_friends.remove("Jen")
print(art_friends)

# It's easy to compare sets to one another
# Advanced set operations
art_friends = {"Rolf", "Anne", "Jen"}
science_friends = {"Jen", "Charlie"}
art_and_science = art_friends.intersection(science_friends)


art_but_not_science = art_friends.difference(science_friends)
science_but_not_art = science_friends.difference(art_friends)
not_in_both = art_friends.symmetric_difference(science_friends) #elements are not in both
all_friends = art_friends.union(science_friends)

print(art_but_not_science)
print(science_but_not_art)
print(not_in_both)
print(art_and_science)
```

### Dictionaries

```python
# You know what to search
# allow you to store keys and value
# Basically object in javascript

friend_ages = {"Rolf": 24, "Adam": 30, "Anne": 27}
friend_ages["Rolf"] = 25

print(friend_ages["Rolf"]) # 25

friends  = (
	{"name": "Rolf Smith", "age": 24},
  {"name": "Adam Wool", "age": 30},
  {"name": "Anne Pun", "age": 27},
)


```

### Length and Sum

```python
grades = [80, 75, 90, 100]
total = sum(grades)
length = len(grades)

average = total / length
print(average)
```

### Join

```python
friends = ["Rolf", "Anne", "Charlie"]
comma_separated = ", ".join(friends)
print(f"My friends are {comma_separated})
```

### If, elif, else statement

```python
friend = "Rolf"
user_name = input("enter your name: ")

if friends == user_name: 
  print("Hello, friend!")
else: 
  print("Hello, stranger!")
print("This runs anyway")

### 

friends = ["Rolf", "Bob", "Anne"]
family = ["Jen", "Charlie"]

user_name = input("Enter your name: ")

if user_name in friends:
  print('Hello, friend!')
elif user_name in family:
  print('Hello, family!')
else:
  print('I dont know you.')
```

### While Loops

```python
is_learning = True

while is_learning:
  print("You're learning!")
	user_input = input("Are you still learning?")
  is_learning = user_input == "yes"

###

user_input = input("Do you wish to run the program? (yes/no)")

while user_input == "yes":
	print("We're running!")
  user_input = input("Do you wish to run the program? (yes/ no)")
print("We stopped running")
```

### For Loops

```python
friends = ["Rolf", "Jen", "Anne"]

for friend in friends:
  print(friend)
  
for friend in range(5, 10, 3):
  print(index)
  
students = [
  {"name": "Rolf", "grade": 90},
  {"name": "Bob", "grade": 78},
  {"name": "Jen", "grade": 100},
  {"name": "Anne", "grade": 80}
]

for student in students:
  name = student["name"]
  grade = student["grade"]
  
  print(f"{name} has a grade of {grade}.")
```

### Destructuring

```python
currencies = 0.8, 1.2
usd, eur = currencies

friends = [("Rolf, 25"), ("Anne, 37"), ("Charlie", 32), ("Bob", 22)]

for name, age in friends:
  print(name, age)
  
for name in friends.values:
  print(name)
  
for name, age in friends.item():
  print(f"{name} is {age} years old")
```

### Break and Continue

```python
cars = ["ok", "ok", "ok", "faulty", "ok", "ok"]

for status in cars:
  if status == "faulty":
    print("Stopping the production line!")
    break
  print(f"This car is {status}.")
  print("Shipping new car to customer")
  
 for status in cars:
  if status == "faulty":
    print("Found faulty car, skipping...")
		continue
  print(f"This car is {status}.")
  print("Shipping new car to customer")


 
```

### Else in for loop

```python
cars = ["ok", "ok", "ok", "faulty", "ok", "ok"]

for status in cars:
  if status == "faulty":
    print("Stopping the production line!")
    break
  print(f"This car is {status}.")
  print("Shipping new car to customer")
else:
  print("All cars built successfully. No faulty cars!")
```

### Finding primes with for loops

```python
for n in range(2, 10):
	for x in range(2, n):
      if n % x == 0:
		    print(f"{n} equals {x} * {n//x}")
        break
      else:
        print(f"{n} is a prime number.")
        


```

### List Slicing

```python
friends = ["Rolf", "Jen", "Anne", "Bob", "Jen"]

print(friends[2:4])
print(friends[1:])
print(friends[:4])
print(friends[-3:])
print(friends[:-2])

```

### List Comprehension

```python
numbers = [0,1,2,3,4]
double_numbers = []

for number in numbers:
  doubled_numbers.append(number * 2)

print(double_numbers)

# same
doubled_numbers = [number * 2 for number in range(5)]
print(double_numbers)


friend_ages = [22, 31, 35, 57]
age_strings = [f"My friend is {age} years old." for age in friend_ages]

print(age_strings)

names = ["Rolf", "Bob", "Jen"]
lower = [name.lower() for name in names]
friend_title_cased = lower.title()

print(lower)
print(friend_title_cased)


```

### List Comprehension with conditionals

```python
ages = [22, 31, 35, 57]
odds = [age for age in ages if age % 2 == 1]
print(odds)

friends = ["Rolf", "ruth", "charlie", "Jen"]
guests = ["Jose", "Bob", "Rolf", "Charlie", "michael"]

"""

// possible solution
friends_lower = set([f.lower() for f in friends])
guests_lower = set([g.lower() for g in guests])

"""

present_friends = [
  name.title() 
  for name in guests 
  if name.lower() in [f.lower() for f in friends]
]

print(present_friends)
```

### Set Comprehension

```python
friends = ["Rolf", "ruth", "charlie", "Jen"]
guests = ["jose", "Bob", "Rolf", "Charlie", "michael"]

friends_lower = {n.lower() for n in friends}
guests_lower = {n.lower() for n in guests}

present_friends = friends_lower.intersection(guests_lower)
present_friends = {name.title() for name in present_friends}

print(present_friends)

# other example
friends = ["Rolf", "ruth", "charlie", "Jen"]
time_since_seen = [3,7,15,11]
long_timers = {
  friends[i]:time_since_seen[i]
  for i in range(len(friends))
  if time_since_seen[i] > 5
}
```

### Zip function

```python
friends = ["Rolf", "ruth", "charlie", "Jen"]
time_since_seen = [3,7,15,11]

dict(zip(friends, time_since_seen))

long_timers = {
  friends[i]:time_since_seen[i]
  for i in range(len(friends))
}
```

### Functions

```python
def greet():
  name = input("Enter your name: ")
  print(f"Hello, {name}!")

greet()
```

### Arguments and Parameters

```python
 car = {
    "make": "Ford",
    "model": "Fiesta",
    "mileage": 23000,
    "fuel_consumed": 460
  }
  
def calculate_mpg(car_to_calculate):
  mpg = car_to_calculate["mileage"] / car_to_calculate["fuel_consumed"]
  name = f"{car_to_calculate["make"]} {car_to_calculate["model"]}"
  print(f"{name} does {mpg} miles per gallon.")
  
calculate_mpg( {
  "make": "Ford",
  "model": "Fiesta",
  "mileage": 23000,
  "fuel_consumed": 460
})
```

### Return values

```python
cars = [
	{"make": "Ford", "model": "Fiesta", "mileage": 23000, "fuel_consumed: 450"},
	{"make": "Ford", "model": "Fiesta", "mileage": 23000, "fuel_consumed: 450"}
	{"make": "Ford", "model": "Fiesta", "mileage": 23000, "fuel_consumed: 450"},
  {"make": "Ford", "model": "Fiesta", "mileage": 23000, "fuel_consumed: 450"}
]

def calculate_mpg(car):
	mpg = car["mileage"] / car["fuel_consumed"]
  return mpg
	name = f"{car["make"]} {car["model"]}"
  print(f"{name} does {mpg} miles per gallon.")

  
def car_name(car):
  name = f"{car["make"]} {car["model"]}"
  return name


def print_car_info(car):
  name = car_name(car)
  mpg = calculate_mpg(car)
  
  print(f"{name} does {mpg} miles per gallon.")

for car in cars:
	print_car_info(car)
```

### Lambda Functions

- can sometimes provide simplicity to the code and other way around

```python
def divide(x, y):
	return x / y

divide = lambda x, y: x / y

print(divide(15,3))
```

```python
"""
def average(sequence):
  return sum(sequence) / len(sequence)
"""

average = lambda sequence: sum(sequence) / len(sequence)

students = [
  {"name": "Rolf", "grades": (67, 90, 95, 100)},
  {"name": "Rolf", "grades": (67, 90, 95, 100)},
  {"name": "Rolf", "grades": (67, 90, 95, 100)}
]

for student in students:
  print(average(student['grades']))
```

### First class functions and higher order functions

- all functions in python are first class function

```python
# first class function
def greet():
  print("Hello")
  
greet

# higher order function - accepts function as an argument
def before_and_after(func):
  print("Before...")
  func()
  print("After...")
  
def greet():
  print("Hello!")
  
before_and_after(greet)
```

```python
operations = {
  "average": lambda seq: sum(seq) / len(seq),
  "total": lambda seq: sum(seq),
	"top": lambda seq: max(seq)
}

students = [
  {"name": "Rolf", "grades": (67, 90, 96, 100)},
  {"name": "Rolf", "grades": (67, 90, 96, 100)},
  {"name": "Rolf", "grades": (67, 90, 96, 100)},
  {"name": "Rolf", "grades": (67, 90, 96, 100)},
]

for student in students:
  name = student["name"]
  grades = student["grades"]
  
  print(f"Student: {name}")
  operation = i nput("Enter 'average', 'total', or 'top': ")
  
  result = operations[operation](grades)
  print(result)
```

### Dictionaries and Object

```python
my_student = {
  "name": "Rolf Smith",
  "grades": [70, 88, 90, 99]
}

def average_grade(student):
  return sum(student["grades"]) / len(student["grades"])

print(average_grade(my_student))

class Student:
  def __init__(self, new_name, new_grade):	#dunder functions
    self.name = new_name
    self.grades = new_grades
    
  def average(self):
    return sum(self.grades) / len(self.grades)
```

