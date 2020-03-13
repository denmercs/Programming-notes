function Node(data) {
  this.data = data;
  this.next = null;
  this.previous = null;
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(data) {
    const node = new Node(data);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        if (current === this.tail) {
          this.addNode(data);
        } else {
          current.next.previous = node;
          node.previous = current;
          node.next = current.next;
          current.next = node;
          this.length++;
        }
      }
      current = current.next;
    }
  }

  removeNode(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        } else if (current === this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.length++;
      }
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();

list.addNode(23);
list.addNode(15);
list.addNode(8);

console.log(list);

list.removeNode(23);

console.log(list);

list.insertAfter(2, 1);

console.log(list);
