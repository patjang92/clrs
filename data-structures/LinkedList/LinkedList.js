import LinkedListNode from './LinkedListNode';

/**
 * Implements Singly Linked List class using Linked List nodes 
 */
export default class LinkedList {

  /**
   * Creates Linked List object with head node as argument
   * 
   */
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return (this.head == null);
  }

  /**
   * Inserts node into beginning of list as new head
   * Runtime Complexity: O(1)
   * 
   * @param {LinkedListNode} node new node to be inserted in the beginning of the list
   */
  insertNode(node) {
    if (!node) return;
    node.next = this.head;
    this.head = node;
  }

  /**
   * Creates a new node with given value and inserts it to the beginning of the list
   * Runtime Complexity: O(1)
   * 
   * @param {*} value 
   */
  insert(value) {
    const node = new LinkedListNode(value);
    this.insertNode(node);
  }

  /**
   * Appends node to the end of the list as new tail
   * Runtime Complexity: O(n)
   * 
   * @param {LinkedListNode} node new node to be appended at the end of the list
   */
  appendNode(node) {
    if (!node) return;
    node.next = null;

    // Case where list is empty
    if (this.head == null) {
      this.head = node;
    } 
    // All other cases, iterate to end
    else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  /**
   * Creates a new node with given value and appends it to the end of the list
   * Runtime Complexity: O(n)
   * 
   * @param {*} value 
   */
  append(value) {
    const node = new LinkedListNode(value);
    this.appendNode(node);
  }

  /**
   * Deletes node from Linked List
   * Runtime Complexity: O(n)
   * 
   * @param {LinkedListNode} node node to be deleted from linked list 
   */
  deleteNode(node) {
    if (!node || !this.head) return;

    // Case 1: single element list (head == tail)
    if (node == this.head) {
      this.head = this.head.next;
    }
    // Case 2: Else we need to iterate to the node before the one we want to delete
    else {
      let currentNode = this.head;
      while (currentNode && currentNode.next != node) {
        currentNode = currentNode.next;
      }
      if (currentNode) {
        currentNode.next = currentNode.next.next;
      }
    }
  }

  /**
   * Deletes first node with matching value from linked list
   * Runtime Complexity: O(n)
   * 
   * @param {*} value value to delete from linked list
   */
  delete(value) {
    let node = this.search(value);
    if (node) {
      this.deleteNode(node);
    }
  }

  /**
   * Searches and returns first node with matching value
   * Runtime Complexity: O(n)
   * 
   * @param {*} value value that we wish to find in Linked List
   */
  search(value) {
    let currentNode = this.head;
    while (currentNode != null && currentNode.value !== value ) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * Return list in array form
   * 
   * @returns {*|array} list elements in order in array 
   */
  toArray() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  /**
   * 
   * @param {*} index 
   * @param {*} node 
   */
  insertNodeAtIndex(index, node) {
    if (index < 0 || !node) return;

    if (index == 0) {
      // insert(n);
      node.next = this.head;
      this.head = node;
      return;
    }

    // we know index > 0, but if list is empty then just return
    if (!this.head) return;

    // need to find the node before the index
    let currentNode = this.head;

    while (index > 1 && currentNode.next != null) {
      currentNode = currentNode.next;
      index--;
    }

    // index is past length of list
    if (index > 1 && currentNode.next == null) return;

    // insert
    node.next = currentNode.next;
    currentNode.next = node;

    return node;
  }

  /**
   * 
   * @param {*} index 
   */
  deleteByIndex(index) {
    if (index < 0 || !this.head) return;

    // case where index == head
    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    // otherwise, iterate until c.next is nth place
    let currentNode = this.head;
    while (index > 1 && currentNode.next != null) {
      currentNode = currentNode.next;
      index--;
    } 

    // out of bounds
    if (index > 1 && currentNode.next == null) {
      return;
    }

    if (currentNode.next) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode.next = null;
    }
    // currentNode.next = currentNode.next.next;
  }

  nthNodeFromEnd(n) {

  }

  reverse() {

  }


}