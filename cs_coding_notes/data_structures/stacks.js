class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}

let myStack = new Stack();

myStack.push(2);
myStack.push(3);
myStack.push(9);
myStack.push(1);

console.log("Your stack is:\n" + myStack.printStack());

myStack.pop();
myStack.pop();
console.log("Your stack is:\n" + myStack.printStack());

/**
 *              TIME                            SPACE
 *  TYPE                    AVERAGE         WORST           WORST
 * Get, Search              O(n)            O(n)            O(n)
 * Insertion, Deletion      O(1)            O(1)
 *
 */
