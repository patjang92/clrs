import LinkedListNode from './LinkedListNode'

export default class DoublyLinkedListNode extends LinkedListNode {
  
  constructor(value, next = null, prev = null) {
    super(value, next);
    this.prev = prev;
  }
}