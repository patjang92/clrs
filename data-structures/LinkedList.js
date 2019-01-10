import LinkedListNode from './LinkedListNode';

/**
 * Implements Doubly Linked List class using Linked List nodes 
 */
export default class LinkedList {

  /**
   * Creates Linked List object with head node as argument
   * 
   * @param {LinkedListNode} head Node that will be the head of the Linked List 
   */
  constructor(head) {
    this.head = head;
    this.head.next = null;
    this.head.prev = null;
    this.tail = head;
  }

  /**
   * Inserts node into beginning of list as new head
   * Runtime Complexity: O(1)
   * 
   * @param {LinkedListNode} node new node to be inserted in the beginning of the list
   */
  insertNode(node) {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.head.prev = null;
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
    node.prev = this.tail;
    node.next = null;
    this.tail.next = node;
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
   * Runtime Complexity: O(1)
   * 
   * @param {LinkedListNode} node node to be deleted from linked list 
   */
  deleteNode(node) {
    if (this.head != node) {
      x.prev.next = x.next;
    } else {
      this.head = x.next;
    }
    if (this.tail != node) {
      x.next.prev = x.prev;
    } else {
      this.tail = x.prev;
    }
  }

  /**
   * Deletes first node with matching value from linked list
   * Runtime Complexity: O(1)
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
}