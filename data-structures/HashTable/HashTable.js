import DoublyLinkedList from '../LinkedList/DoublyLinkedList';


/**
 * @todo: need to augment linked list to accept callbacks for dynamic object types
 */
export default class HashTable {

  constructor(hash, numSlots) {
    this.hash = hash;
    this.slots = [];
    for (let i = 0; i < numSlots; i++) {
      this.slots[i].push(new DoublyLinkedList());
    }
  }

  set(key, value) {
    let hashValue = this.hash(key);
    this.slots[hashValue].insert(value);
  }

  get(key) {
    let hashValue = this.hash(key);
    return this.slots[hashValue].search(key);
  }

  delete(key) {
    let hashValue = this.hash(key);
    return this.slots[hashValue].delete(key);
  }
}