# Computer Architecture

## 1. CPU Components

- transistors, the most basic - can be used as logic gates
- gates - made of transistors
- Digital logic common operators performed by gates
  - AND, OR, NOT, like you've seen in conditionals in code
  - XOR, NOR, NAND
- Gates can be put together into far more complex structures
  - ALU
  - CPUs

<img src="/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-27 at 11.19.09 PM.png" alt="Screen Shot 2020-02-27 at 11.19.09 PM" style="zoom: 67%;" />

### RAM

- random access memory
- fast compared to hard drives (even compares to SSDs)
- Similar of a big array of bytes that you can access by index, just like an array
- Each element in RAM can be store one byte, an 8-bit number (0 - 255)
- Larger, multi-byte values are stored in sequential addresses in RAM
- The CPU communicates with RAM with the memory bus

![Screen Shot 2020-02-27 at 11.22.25 PM](/Users/denmercs/Desktop/LAMBDA/Notes/cs notes/pictures/Screen Shot 2020-02-27 at 11.22.25 PM.png)

### CPUs

- bytes of data are stored in RAM (Memory)
- Larger 64-bit (8-byte) numbers, stored sequentially in RAM, that the CPU can operate on at once are called words
- the exact number of bytes per word depends on the architecture
  - 8 bytes for a 64-bit CPU
  - 4 bytes for a 32-bit CPU
  - 1 byte for an 8-bit CPU
- ALU performs arithmetic

### CPU Registers

- Think of them like variables that the CPU has its disposal 
- similar to RAM, except stored directly on the CPU so they are much faster
- there are a limited number of them at your disposal, usually 8, 16, or 32 depending on the CPU
- They have fixed names R0, R1, or EAX, EBX etc. depending on the CPU
- Many CPUs can only perform math  operations on registeres which must be loaded from RAM first. (The x86 family can often perform math on registers quickly, or RAM slowly)
- size of the registers is the size of the CPU word

### CPU Instructions

- stored in RAM with other data
- are actually just numbers
- humans often use mnemonics to refer to the instruction in a human readable way
- The CPU keeps track of the address of the currently-executing instruction in RAM and performs different actions based on the instruction found there
- The address of the currently-executing instruction is held in a special register called the program counter
- CPUs usually have a significant number of instructions, around 50-200

### CPU Clock

- the clock in a modern CPU triggers a few billion times per second
- Clock cycle rate is measured in Hz, KHz, MHz, or GHz (billions of cycles per second)
- The faster the clock, the more instructions can execute per second

## How to make the CPU run more one thing at once (Concurrency)

### 1. Multi core CPUs

- Duplicate the whole CPU (example 4 cores)
- a ton of CPUs which runs independtly on one another
- this will allow more word to handle
- they share the same RAM

### 2. Pipelining

### 3. Timesharing

- cpu does something for a while and stop doing to another thing and then it switches back and forth (milliseconds)

## System Bus

- how data is passed from the CPU to RAM, and from the CPU to peripherals
- Address Bus: carries the address in RAM we're interested in, or the peripheral ID we're interested in
- Data Bus: carries data to be transmitted to or from RAM or peripherals
- Control Bus: controls whether or not the CPU is talking to RAM or a peripheral
- The size or width of the bus is typically the number of "bits" a computer is advertised as having. A 64-bit CPU has a 64-bit wide data bus, and usually a 64-bit wide address bus

## Caching

- Access to RAM is relative slow
- Access to Registers is fast
- Middle ground? Cache
- Closer to the CPU
- Usually arranged in a level hierarchy
- Cache Miss means you're trying to access memory that's not yet in the cache
- Cache Hit means memory you want is in the cache already

### Cache Myth

- if there's no data it will check on the RAM
- it will grab all the data that is available for the future

### Cache Hit

- if the data is available in the Cache
- it's notable in the 2D array
- the program will run quickly

# Number Bases and Conversions

- values exists of how we write them down
- the number base referes to how many individual digits that number system has
- decimal has 10 digits (0,1,2,3,4,5,6,7,8,9) so it's base 10
- binary has 2 digits (0, 1) so it's base 2. A binary digit is called a bit for short
- hexadecimal has 16 digits (0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f) so it is base 16
- octal has 8 digits (01,2,3,4,5,6,7) so it is base 8. (Not frequently used)

- **Byte**: 8 bits. Max value: 255 decimal, ff hex. Min value 0
- **Nibble**: 4 bits. Max value: 15 decimal, F hex. Min value 0.
- **Octet**: synonym for byte
- **Decimal**: a base-10 numbering system, the one you already know
- **Hexadecimal** or hex: a base 16 numbering system
- **Binary**: a base 2 numbering system
- **Octal**: A rarely used base-8 numbering system

```c
+----------- 128s place
|+---------- 64s place
||+--------- 32s place
|||+-------- 16s place
||||+------- 8s place
|||||+------ 4s place
||||||+----- 2s place
|||||||+---- 1s place
||||||||
01010110



base 2 binary
		0	0
		1 1
	 10 2
	 11 3
	100 4

## Conversion Binary to Hex

hexadecimal - 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F


Convert: 10100011
Step 1. start at the right side
1010 0011 - right nibble should be binary to hexa decimal
			3 --> for decimal and hexa decimal
 A      --> 10 in decimal but it's A in hexadecimal
 
 Convert: C7 hex to binary
 
 C --> 12 decimal
	C			7
1100	0111

C7 hex == 11000111 binary
 

   int x = 100; 	// value is 100 decimal
	 int h = 0x100; // value is 256 decimal
   int b = 0b100; // value is 4 decimal

	 int y = 0x47F;
 	

```

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int x = 0b11000101;
  
  printf("%d\n", x);
  
  printf("%x hex\n", x);
  
  printf("%X  hex\n", x);
  
  return 0;
}
```

# Bitwise Operations

```
~ -> NOT (Inversion)
A 	NOT A
0 	1
1		0

& -> AND (Bitwise / Single Ampersand)
A		B		A AND B
0		0			0
0		1			0
1		0			0
1		1			1

NAND (Inverted AND)
A		B		A OR B
0		0			1
0		1			1
1		0			1
1		1			0

| -> OR (Bitwise / Single Pipe)
A		B		A OR B
0		0			0
0		1			1
1		0			1
1		1			1

^ -> XOR (if both are true then the result is false)
A		B		A OR B
0		0			0
0		1			1
1		0			1
1		1			0

# Multi-bit numbers
  11101011
& 10011101
___________
	10001011
	
  11011010
^ 11100011
___________
	00111001

(mask out)
	11010110
& 11110000
__________
	11010000
	
<< left shift
				1111 
<<1 	 11110

>> right shift
				1111
>>1			 111
```

# CPU Stack

