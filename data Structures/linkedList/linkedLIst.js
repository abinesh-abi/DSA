class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.size === 0;
  }
  // get a specific node
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let currentNode = this.head;
      let count = 0;

      while (count < index) {
        currentNode = currentNode.next;
        count += 1;
      }

      return currentNode;
    }
  }

  // update a specific node
  set(index, value) {
    const currentNode = this.get(index);

    if (currentNode) {
      currentNode.value = value;
      return currentNode;
    } else {
      return null;
    }
  }

  // add to the end
  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length += 1;

    return newNode;
  }

  // remove from the end
  pop() {
    if (!this.length) {
      return null;
    } else {
      let nodeToRemove = this.head;
      let secondToLastNode = this.head;

      while (nodeToRemove.next) {
        secondToLastNode = nodeToRemove;
        nodeToRemove = nodeToRemove.next;
      }

      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length -= 1;

      if (!this.length) {
        this.head = null;
        this.tail = null;
      }

      return nodeToRemove;
    }
  }

  // add to the beginning
  unshift(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length += 1;

    return newNode;
  }

  // remove from the beginning
  shift() {
    if (!this.length) {
      return null;
    } else {
      const nodeToRemove = this.head;
      this.head = this.head.next;
      this.length -= 1;

      if (!this.length) {
        this.tail = null;
      }

      return nodeToRemove;
    }
  }

  // add at a specific index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    } else if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else {
      const preNewNode = this.get(index - 1);
      const newNode = new Node(value);
      newNode.next = preNewNode.next;
      preNewNode.next = newNode;
      this.length += 1;

      return newNode;
    }
  }

  // remove from a specific index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const preNodeToRemove = this.get(index - 1);
      const nodeToRemove = preNodeToRemove.next;
      preNodeToRemove.next = nodeToRemove.next;
      this.length -= 1;

      return nodeToRemove;
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  reverse() {
    let curr = this.head;
    this.head = null;
    while (curr) {
      let newHead = curr;
      curr = curr.next;
      newHead.next = null;
      if (this.head === null) {
        this.head = newHead;
      } else {
        newHead.next = this.head;
        this.head = newHead;
      }
    }
  }

  bubleSort() {
    // Time complexity: O(n ^ 2)
    // Auxiliary Space: O(1)
    let current = this.head;
    if (!this.head) return;
    while (current) {
      let index = current.next;
      while (index) {
        if (current.value > index.value) {
          // swap values
          [current.value, index.value] = [index.value, current.value];
        }
        index = index.next;
      }
      current = current.next;
    }
  }

  insertionSort() {
    // Time complexity: O(n ^ 2)
    // Auxiliary Space: O(1)
    let sorted = null;
    let current = this.head;
    while (current != null) {
      let next = current.next;
      sortedIsert(current);
      current = next;
    }
    this.head = sorted;
    function sortedIsert(neNode) {
      if (sorted == null || sorted.value >= neNode.value) {
        neNode.next = sorted;
        sorted = neNode;
      } else {
        let current = sorted;
        while (current.next != null && current.next.value < neNode.value) {
          current = current.next;
        }
        neNode.next = current.next;
        current.next = neNode;
      }
    }
  }

  quickSort() {
    sort(this.head);
    function sort(start, end) {
      let pivotNode = pivot(start, end);
      if (start == end) return;
      sort(start, pivotNode);
      pivotNode.next && sort(pivotNode.next, end);
    }
    function pivot(start) {
      let pivot = start.value;
      let pointer = start;
      let traverse = start;
      while (traverse) {
        if (traverse.value < pivot) {
          pointer = pointer.next;
          swap(traverse, pointer);
        }
        traverse = traverse.next;
      }
      swap(start, pointer);
      return pointer;
    }
    function swap(node1, node2) {
      // let temp = node1.value;
      // node1.value = node2.value;
      // node2.value = temp;
      [node2.value,node1.value]=[node1.value,node2.value]
    }
  }
}
// 77 10 55 90 89 -1 0

let list = new SinglyLinkedList();
list.push(10);
list.push(90);
list.push(89);
list.push(-1);
list.push(0);
list.push(44);
// list.pop()
list.unshift(77);
// list.unshift(77);
// list.shift();

// console.log(list);
list.insert(2, 55);
// list.bubleSort();
// list.insertionSort()
list.quickSort();
// list.reverse()

list.print();


