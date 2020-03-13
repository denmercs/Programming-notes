class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    // remove the first element
    this.queue.shift();
  }

  printQueue() {
    var str = "";
    for (var i = 0; i < this.queue.length; i++) str += this.queue[i] + " ";
    return str;
  }
}

let myQueue = new Queue();

myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(9);
myQueue.enqueue(1);

console.log("Your queue is:\n" + myQueue.printQueue());

myQueue.dequeue();
myQueue.dequeue();

console.log("Your queue is:\n" + myQueue.printQueue());

/**
 *
 * TIME COMPLEXITY                                          SPACE
 * TYPE                         AVERAGE         WORST       WORST
 * Get, Search, Deletion           O(n)         O(n)         O(n)
 * Insertion                       O(1)         O(1)
 */
