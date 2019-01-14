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
    if (!this.head) {
      this.head = node;
    } else {
      // all other cases more than 1 element
      this.head.prev = node;
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
    const node = new DoublyLinkedListNode(value);
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

    // case where list is empty, head == tail == null
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.prev = currentNode;
    }
  }

  /**
   * Creates a new node with given value and appends it to the end of the list
   * Runtime Complexity: O(n)
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
    if (!node || !this.head) return;

    // case where node is head (1 element)
    if (this.head == node) {
      this.head = this.head.next;

      // case where list had more than 1 element and new head is not null
      if (this.head) {
        this.head.prev = null;
      }
    }
    // all other cases    
    else {
      // case where node is in the middle
      node.prev.next = node.next;

      // case where node is in the end
      if (node.next != null) {
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
  search(value = undefined, callback = undefined) {
    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value != undefined && currentNode.value == value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return currentNode;
  }
}