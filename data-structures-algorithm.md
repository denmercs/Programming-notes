# Algorithm & Data Structures

- analysis on how many operations that the computer will be needed to solve a problem
- https://www.bigocheatsheet.com/

```python
# Eligant and Efficient
import math
import random
import time
fromt datetime import datetime

animals = ['Ducks, 'Jackal', 'Hippo', 'Cat']
           
########
# 0(1) #
########
           
# Return the name of all animals
def getAnimals():
	return animals

########
# 0(n) #
########
           
def countAnimals():
	num_animals = 0
  for animal in animals:
  	num_animals += 1
  return num_animals
           
# Given a list
# Return the list's length
# 0(1)
def betterGetLengthOfList(1):
	return len(l)

def getLowercaseAnimals():
	lowercase_animals = animals
	animal_index = 0
  for animal in animals:
  	lowercase_-animals[animal_index] = lowercase_animals[animal_index].lower()
    animal_index += 1
	return lowercase_animals
           
# Given the name of a animal,
# Return True if that animal is in the list, False otherwise
def hasAnimal(animal_name):
	for animal in animals:
		if animal == animal__name:
			return True
	return False
```

