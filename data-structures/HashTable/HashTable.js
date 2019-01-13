import DoublyLinkedList from '../LinkedList/DoublyLinkedList';

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

  insert(x) {
    let hashValue = this.hash(x);
    this.slots[hashValue].insert(x);
    return hashValue;
  }

  delete(x) {
    let hashValue = this.hash(x);
    return this.slots[this.hash(x)].delete(x);
  }

  search(x) {
    let hashValue = this.hash(x);
    return this.slots[this.hash(x)].search(x);
  }



}