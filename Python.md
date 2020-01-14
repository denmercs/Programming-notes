# PYTHON

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

