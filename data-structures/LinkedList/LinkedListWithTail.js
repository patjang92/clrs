import LinkedListNode from './LinkedListNode';

/**
 * Implements Singly Linked List class using Linked List nodes 
 */
export default class LinkedListWithTail {

  /**
   * Creates Linked List object with head node as argument
   * 
   */
  constructor() {
    this.head = null;
    this.tail = null;
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

    // Case where list is empty
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } 
    // call other cases
    else {
      node.next = this.head;
      this.head = node;
    }
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
   * Runtime Complexity: O(1)
   * 
   * @param {LinkedListNode} node new node to be appended at the end of the list
   */
  appendNode(node) {
    if (!node) return;

    // Case where list is empty
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } 
    // All other cases
    else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  /**
   * Creates a new node with given value and appends it to the end of the list
   * Runtime Complexity: O(1)
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
    if (!node || !this.head || !this.tail) return;

    let currentNode = this.head;

    // Case 1: single element list (head == tail)
    if (this.head == this.tail && node == this.head) {
      this.head = null;
      this.tail = null;
    }
    // Case 2: want to delete head
    else if (this.head == node) {
      this.head = this.head.next;
    }
    // Else we need to iterate to the node before the one we want to delete
    else {
      let currentNode = this.head;
      while (currentNode && currentNode.next != node) {
        currentNode = currentNode.next;
      }

      // node not found
      if (!currentNode) return;

      // Case 3: node is in middle
      currentNode.next = currentNode.next.next;

      // Case 4: node is tail
      if (this.tail == node) {
        this.tail = currentNode;
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
   * Insert node at Index
   * O(n)
   * 
   * @param {number} index: max possible value is length of list (append at end) 
   */
  insertNodeAtIndex(index, node) {
    // if index < 0 return
    if (index < 0) return;

    // if index == 0, update head
    if (index == 0) {
      node.next = this.head;
      this.head = node;
      if (this.tail == null) {
        this.tail = this.head;
      }
      return;
    }

    // if index > 0 but head == null aka list is empty, return
    if (!this.head) return;

    // else, count = index && iterate / decrement until c.next is count == 1 or c.next == null
    let currentNode = this.head;
    let distanceToIndex = index;
    while (distanceToIndex > 1 && currentNode.next != null) {
      distanceToIndex--;
      currentNode = currentNode.next;
    }

    // if c.next == null && count > 1, out of bounds
    if (distanceToIndex > 1 && currentNode.next == null) return;

    // assign node.next and c.next
    node.next = currentNode.next;
    currentNode.next = node;

    // if c.next was null aka c == tail, node is now new tail
    if (this.tail == currentNode) {
      this.tail = node;
    }

    return;
  }

  /**
   * Deletes node at index
   * O(n)
   * 
   * @param {number} index 
   */
  deleteByIndex(index) {
    // index < 0 or list is empty, return
    if (index < 0 || !this.head) return;

    // index == 0, update head (and possibly tail)
    if (index == 0) {
      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return;
    }

    let distanceToIndex = index;
    let currentNode = this.head;

    // iterate until node.next = index
    while (distanceToIndex > 1 && currentNode.next != null) {
      distanceToIndex--;
      currentNode = currentNode.next;
    }

    // if node.next before distance == 1, then out of bounds
    if (currentNode.next == null && distanceToIndex >= 1) return;

    currentNode.next = currentNode.next.next;
    if (!currentNode.next) {
      this.tail = currentNode;
    }
    
    return;
  }

  /**
   * Get nth node from end (n being index)
   * O(n)
   * 
   * @param {number} n 
   */
  getNthNodeFromEnd(n) {
    // if empty return null
    if (!this.head) return null;

    // find length
    let currentNode = this.head;
    let length = 0;
    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }

    // if length <= n out of bounds, n is index
    if (length <= n) return null;

    let distanceToN = length - 1;
    currentNode = this.head;
    while (distanceToN > n) {
      distanceToN--;
      currentNode = currentNode.next;
    }

    return currentNode;
  }
  /**
   * Reverses nodes in list
   */
  reverse() {
    // if empty or single element do nthing
    if (!this.head || this.head == this.tail) return;

    let currentNode = this.head;
    this.tail = currentNode;

    let prev = null;
    let next = null;
    while (currentNode) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }

    this.head = prev;
    return this.head;
  }

}