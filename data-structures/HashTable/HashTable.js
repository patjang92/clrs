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
   * @param {*} key: key of key-value pair 
   */
  callback(key) {
    return (value) => value.key == key;
  }

  set(key, value) {
    const hashValue = this.hash(key);
    this.keys[key] = hashValue;
    const slot = this.slots[hashValue];

    const node = slot.search(key, this.callback(key));
    if (node) {
      node.value = value;
    } else {
      slot.insert(value);
    }
  }

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

  has(key) {
    return this.keys.hasOwnProperty(key);
  }

  delete(key) {
    if (!this.has(key)) return null;

    const hashValue = this.keys[key];
    const slot = this.slots[hashValue]
    
    const node = slot.search(key, this.callback(key));
    delete this.keys[key];
    
    return slot.deleteNode(node);
  }
}