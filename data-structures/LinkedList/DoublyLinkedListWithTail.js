import DoublyLinkedListNode from './DoublyLinkedListNode';

/**
 * Implements Doubly Linked List class using Linked List nodes 
 */
export default class DoublyLinkedList {

  /**
   * Creates Linked List object with head node as argument
   * 
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Inserts node into beginning of list as new head
   * Runtime Complexity: O(1)
   * 
   * @param {LinkedListNode} node new node to be inserted in the beginning of the list
   */
  insertNode(node) {
    if (!node) return;

    // case where list is empty
    if (!this.head && !this.tail) {
      node.prev = null;
      node.next = null;
      this.head = node;
      this.tail = node;
    } else {
      // all other cases more than 1 element
      this.head.prev = node;
      node.next = this.head;
      node.prev = null;
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
    const node = new DoublyLinkedListNode(value);
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

    // case where list is empty, head == tail == null
    if (!this.head && !this.tail) {
      node.next = null;
      node.prev = null;
      this.head = node;
      this.tail = node;
    }
    // case where list is 1 element or more
    else {
      node.next = null;
      node.prev = this.tail;
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
    const node = new DoublyLinkedListNode(value);
    this.appendNode(node);
  }

  /**
   * Deletes node from Linked List
   * Runtime Complexity: O(1)
   * 
   * @param {LinkedListNode} node node to be deleted from linked list 
   */
  deleteNode(node) {
    if (!node) return;

    // case where node is head and tail (1 element)
    if (this.head == this.tail && this.head == node) {
      this.head = null;
      this.tail = null;
    }
    // case where node is head
    else if (this.head == node) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    // case where node is tail
    else if (this.tail == node) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } 
    // all other cases    
    else {

      // check if prev and next are not null, can't be a node in this list
      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
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
      deleteNode(node);
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

  insertNodeAtIndex(index, n) {}

  deleteByIndex(index) {}

  getNthNodeFromEnd(n) {}

  reverse() {}
}