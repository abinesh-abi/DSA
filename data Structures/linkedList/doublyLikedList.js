
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    // create a new node
    const newNode = new Node(value);

    // if the list is empty,the new node should become the head and the tail
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // the current tail should point forward (= next) to the new node
      this.tail.next = newNode;

      // the new node should point back (= prev) to the current tail
      newNode.prev = this.tail;

      // the new node should become the new tail
      this.tail = newNode;
    }

    // increase length by 1
    this.length += 1;

    // return new node
    return newNode;
  }

  pop() {
    // if empty: return null
    if (!this.length) {
      return null;
    } else {
      // save current tail (to return it later)
      const nodeToRemove = this.tail;

      if (this.length === 1) {
        // after removing the only node, there will be no head and tail
        this.head = null;
        this.tail = null;
      } else {
        // set the node before the current tail as the new tail
        this.tail = this.tail.prev;
        // remove the connection from the new tail to the old tail
        this.tail.next = null;
        // remove the connection from the old tail to the new tail
        nodeToRemove.prev = null;
      }

      // decrease length by 1
      this.length -= 1;

      // return old tail
      return nodeToRemove;
    }
  }

  unshift(value) {
    // create new node
    const newNode = new Node(value);

    // if list is empty: set head and tail to new node
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set new node's next to current head
      newNode.next = this.head;

      // set the current head's prev to new node
      this.head.prev = newNode;

      // set list's head to new node
      this.head = newNode;
    }

    // increase length by 1
    this.length += 1;

    // return new node
    return newNode;
  }

  shift() {
    // we can't remove data from an empty list
    if (!this.length) {
      return null;
    }

    // set head as nodeToRemove
    const nodeToRemove = this.head;

    if (this.length === 1) {
      // after removing the only element, the list will be empty, so `head` and `tail` should be `null`
      this.head = null;
      this.tail = null;
    } else {
      // the node after the nodeToRemove should become the new head
      this.head = nodeToRemove.next;

      // remove both connections from the new head to the old head (= nodeToRemove)
      this.head.prev = null;
      nodeToRemove.next = null;
    }

    // decrease length by 1
    this.length -= 1;

    // return nodeToRemove
    return nodeToRemove;
  }

  get(index) {
    // if list is empty, if index is less than 0, or if index is greater than or equal to the list length, return null
    if (!this.length || index < 0 || index >= this.length) {
      return null;
    } else {
      let currentNode;

      // if the desired node is in the bottom half of the list
      if (index < this.length / 2) {
        // add counter, starting from 0 and counting upwards in the loop
        let counter = 0;

        // start from the head
        currentNode = this.head;

        // go to the next node until we found our desired node
        while (counter < index) {
          currentNode = currentNode.next;
          counter += 1;
        }
      } else {
        // add counter, starting from the top and counting downwards in the loop
        let counter = this.length - 1;

        // start from the tail
        currentNode = this.tail;

        // go to the previous node until we found our desired node
        while (counter > index) {
          currentNode = currentNode.prev;
          counter -= 1;
        }
      }

      // return node
      return currentNode;
    }
  }
  //update

  set(index, value) {
    // find the desired node
    const currentNode = this.get(index);

    // if we can find the node
    if (currentNode) {
      // update its value
      currentNode.value = value;
      // return the updated node
      return currentNode;
    } else {
      // if we can't find the node: return null
      return null;
    }
  }
  // insert new node at specified index

  insert(index, value) {
    // if the index is less than 0 or greater than the list's length, return null
    if (index < 0 || index > this.length) {
      return null;
    } else if (index === 0) {
      // if the index equals 0, use the `unshift` method
      return this.unshift(value);
    } else if (index === this.length) {
      // if the index equals length, use the `push` method
      return this.push(value);
    } else {
      // create new node
      const newNode = new Node(value);

      // find the new previous node
      const newPrevNode = this.get(index - 1);
      // find the new next node
      const newNextNode = newPrevNode.next;

      // connect the new node to the new previous node
      newNode.prev = newPrevNode;
      newPrevNode.next = newNode;

      // connect the new node to the new next node
      newNode.next = newNextNode;
      newNextNode.prev = newNode;

      // increase the list's length by 1
      this.length += 1;

      // return the new node
      return newNode;
    }
  }

  remove(index) {
    // if the index is invalid, return null
    if (!this.length || index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      // if we want to remove the first node
      return this.shift();
    } else if (index === this.length - 1) {
      // if we want to remove the last node
      return this.pop();
    } else {
      // store the node we want to remove, the node before it and the node after it
      const nodeToRemove = this.get(index);
      const prevNodeToRemove = nodeToRemove.prev;
      const nextNodeToRemove = nodeToRemove.next;

      // remove the connections from the node to remove to other nodes
      nodeToRemove.prev = null;
      nodeToRemove.next = null;

      // update the connections from the node before the node to remove
      prevNodeToRemove.next = nextNodeToRemove;

      // update the connections from the node after the node to remove
      nextNodeToRemove.prev = prevNodeToRemove;

      // decrease length by 1
      this.length -= 1;

      // return node
      return nodeToRemove;
    }
  }
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.value + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

let list = new DoublyLinkedList();
list.push("hello");
list.push(10);
list.push("good");
list.push("that");
list.push("car");
list.set(4, "too low")
list.get(2)
list.insert(1, "new at 1")
list.remove(1)
console.log(list)
list.printList()