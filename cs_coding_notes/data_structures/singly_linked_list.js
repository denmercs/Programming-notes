function Node(data) {
  this.data = data;
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    // create new node
    const node = new Node(data);

    if (!this.head) {
      // if there is no head, then make the tail and head on the same node
      this.tail = node;
      this.head = node;
    } else {
      // else, set the tail next to the next node and the tail to the current node
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        if (current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next = node;
          break;
        }
      }
      current = current.next;
    }
  }

  removeNode(data) {
    let previous = this.head;
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
        }

        if (current === this.tail) {
          this.tail = previous;
        }

        previous.next = current.next;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.addNode(23);
list.addNode(15);
list.addNode(2);

console.log(list);

list.insertAfter(25, 2);

console.log(list);

list.removeNode(23);

console.log(list);
