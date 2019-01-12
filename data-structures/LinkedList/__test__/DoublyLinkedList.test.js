import DoublyLinkedList from '../DoublyLinkedList';
import DoublyLinkedListNode from '../DoublyLinkedListNode';


describe('LinkedList', () => {

  it('should create a new empty linked list', () => {
    const list = new DoublyLinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  })

  it('should not insert null node', () => {
    const list = new DoublyLinkedList();
    list.insertNode(null);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  })

  it('should insert node to head of empty list and verify that it is tail as well', () => {
    const list = new DoublyLinkedList();
    const node = new DoublyLinkedListNode(1);
    list.insertNode(node);
    expect(list.head).toEqual(node);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    expect(list.tail).toEqual(node);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toBeNull();
    expect(list.head).toEqual(list.tail);
  })

  it('should insert value as node to head of empty list and verify that it is tail as well', () => {
    const list = new DoublyLinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();  
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toBeNull();
    expect(list.head).toEqual(list.tail);
  })

  it('should insert node into beginning of single element list', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    list.insertNode(node1);
    const node2 = new DoublyLinkedListNode(2);
    list.insertNode(node2);
    expect(list.head).toEqual(node2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toEqual(node1);
    expect(list.head.prev).toBeNull();
    expect(list.head.next).toEqual(list.tail);
    expect(list.tail).toEqual(node1);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toEqual(node2);
  })

  it('should insert value as node into beginning of single element list', () => {
    const list = new DoublyLinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toEqual(list.tail);
    expect(list.head.prev).toBeNull();
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toEqual(list.head);
  })

  it('should insert node into beginning of multiple element list', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    list.insertNode(node1);
    const node2 = new DoublyLinkedListNode(2);
    list.insertNode(node2);
    const node3 = new DoublyLinkedListNode(3);
    list.insertNode(node3);
    expect(list.head).toEqual(node3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next).toEqual(node2);
    expect(list.head.prev).toBeNull();
    expect(list.tail).toEqual(node1);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toEqual(node2);
  })

  it('should insert value as node into beginning of multiple element list', () => {
    const list = new DoublyLinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.prev).toBeNull();
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
  })

  it('should not append null node', () => {
    const list = new DoublyLinkedList();
    list.appendNode(null);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  })

  it('should append node to head of empty list and verify that it is tail as well', () => {
    const list = new DoublyLinkedList();
    const node = new DoublyLinkedListNode(1);
    list.appendNode(node);
    expect(list.head).toEqual(node);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();
    expect(list.tail).toEqual(node);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toBeNull();
    expect(list.head).toEqual(list.tail);
  })

  it('should append value as node to head of empty list and verify that it is tail as well', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toBeNull();
    expect(list.head).toEqual(list.tail);
  })

  it('should append node to the end of single element list', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    list.appendNode(node1); // 1
    const node2 = new DoublyLinkedListNode(2);
    list.appendNode(node2); // 1 - 2

    expect(list.head).toEqual(node1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(node2);
    expect(list.head.prev).toBeNull();
    expect(list.head.next).toEqual(list.tail);  
    expect(list.tail).toEqual(node2);
    expect(list.tail.value).toEqual(2);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toEqual(node1);
    expect(list.tail.prev).toEqual(list.head);  
  })

  it('should append value as node into end of single element list', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(list.tail);
    expect(list.head.prev).toBeNull();
    expect(list.tail.value).toEqual(2);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toEqual(list.head);
  })

  it('should append node into end of multiple element list', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    list.appendNode(node1); // 1
    const node2 = new DoublyLinkedListNode(2);
    list.appendNode(node2); // 1 - 2
    const node3 = new DoublyLinkedListNode(3);
    list.appendNode(node3); // 1 - 2 - 3

    expect(list.head).toEqual(node1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(node2);
    expect(list.head.prev).toBeNull();
    expect(list.tail).toEqual(node3);
    expect(list.tail.value).toEqual(3);
    expect(list.tail.next).toBeNull();
    expect(list.tail.prev).toEqual(node2);
  })

  it('should append value as node into end of multiple element list', () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.head.value).toEqual(1);
    expect(list.head.prev).toBeNull();
    expect(list.tail.value).toEqual(3);
    expect(list.tail.next).toBeNull();
  })




  it('should delete only node in list', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    list.insertNode(node1); // 1
    list.deleteNode(node1); // null
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  })

  it('should delete first node in list', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    list.insertNode(node2); // 1
    list.insertNode(node1); // 1 - 2
    list.deleteNode(node1); // 2

    expect(list.head).toEqual(node2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();
    expect(list.head).toEqual(list.tail);
    expect(list.tail).toEqual(node2);
    expect(list.tail.prev).toBeNull();
    expect(list.tail.next).toBeNull();
  })

  it('should delete last node in list', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    list.insertNode(node2); // 1
    list.insertNode(node1); // 1 - 2
    list.deleteNode(node2); // 2

    expect(list.head).toEqual(node1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();
    expect(list.head).toEqual(list.tail);
    expect(list.tail).toEqual(node1);
    expect(list.tail.prev).toBeNull();
    expect(list.tail.next).toBeNull();
  })

  it('should delete middle node in list', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    const node3 = new DoublyLinkedListNode(3);
    list.insertNode(node3); // 3
    list.insertNode(node2); // 2 - 3
    list.insertNode(node1); // 1 - 2 - 3
    list.deleteNode(node2); // 1 - 3

    expect(list.head).toEqual(node1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(node3);
    expect(list.head.prev).toBeNull();
    expect(list.head.next).toEqual(list.tail);
    expect(list.tail).toEqual(node3);
    expect(list.tail.value).toEqual(3)
    expect(list.tail.prev).toEqual(node1);
    expect(list.tail.prev).toEqual(list.head);
    expect(list.tail.next).toBeNull();
  })

  it('should search by value and return node or null if not found', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    const node3 = new DoublyLinkedListNode(3);

    list.insertNode(node3); // 3
    list.insertNode(node2); // 2 - 3
    list.insertNode(node1); // 1 - 2 - 3

    let searchResult = list.search(2);
    expect(searchResult).toEqual(node2);

    searchResult = list.search(3);
    expect(searchResult).toEqual(node3);

    searchResult = list.search(1);
    expect(searchResult).toEqual(node1);

    searchResult = list.search(5);
    expect(searchResult).toBeNull();
  })

  it('should delete node by value', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    const node3 = new DoublyLinkedListNode(3);

    list.delete(3); // 3
    list.delete(2); // 2 - 3
    list.delete(1); // 1 - 2 - 3

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  })

});