import DoublyLinkedList from '../LinkedList/DoublyLinkedList';

/**
 * Hash Table Implementation using Doubly Linked Lists
 */
export default class HashTable {

  constructor(hash, numSlots = 32) {
    this.hash = (key) => hash(key) % numSlots;
    this.slots = new Array(numSlots).fill(new DoublyLinkedList());
    this.keys = {};
  }

  /**
   * Callback function to find node in linked lists
   * 
   * @param {*} key
   */
  callback(key) {
    return (value) => value.key == key;
  }

  /**
   * Add new key-value pair to hash table
   * 
   * @param {*} key:
   * @param {*} value
   */
  set(key, value) {
    const hashValue = this.hash(key);
    this.keys[key] = hashValue;
    const slot = this.slots[hashValue];

    const node = slot.search(key, this.callback(key));
    if (node) {
      node.value.value = value;
    } else {
      slot.insert({ key, value });
    }
  }

  /**
   * Get value by key
   * 
   * @param {*} key 
   */
  get(key) {
    if (!this.has(key)) return null;

    const hashValue = this.keys[key];
    const slot = this.slots[hashValue]
    
    const node = slot.search(key, this.callback(key));
    if (node) {
      return node.value.value;
    }

    return null;
  }

  /**
   * See if key is already added
   * 
   * @param {*} key 
   */
  has(key) {
    return this.keys.hasOwnProperty(key);
  }

  /**
   * Deletes key-pair entry by key
   * 
   * @param {*} key 
   */
  delete(key) {
    if (!this.has(key)) return null;

    const hashValue = this.keys[key];
    const slot = this.slots[hashValue]
    
    const node = slot.search(key, this.callback(key));
    delete this.keys[key];
    
    return slot.deleteNode(node);
  }
}