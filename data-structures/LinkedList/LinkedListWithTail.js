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
    node.next = this.head;
    this.head = node;
    if (this.tail == null) {
      this.tail = node;  
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
    node.next = null;
    if (this.head == null) {
      this.head = node;
    }
    if (this.tail != null) {
      this.tail.next = node;
    } 
    this.tail = node;
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
      while (currentNode.next != node) {
        currentNode = currentNode.next;
      }

      // Case 3: want to delete tail
      if (this.tail == node) {
        this.tail = currentNode;
        currentNode.next = null;
      }

      // Case 4: want to delete middle element      
      else {
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


}