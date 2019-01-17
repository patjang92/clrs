import DoublyLinkedList from '../DoublyLinkedListWithTail';
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

  it('should ignore delete nonexistent node', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    const node3 = new DoublyLinkedListNode(3);

    list.insertNode(node1); // 1
    list.insertNode(node2); // 2 - 1
    list.deleteNode(node3); // null
    expect(list.head).toEqual(node2);
    expect(list.head.next).toEqual(node1);
    expect(list.tail).toEqual(node1);
  })

  it('should add node at specific index', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    const node3 = new DoublyLinkedListNode(3);
    const node4 = new DoublyLinkedListNode(4);
    const node5 = new DoublyLinkedListNode(5);
    const node6 = new DoublyLinkedListNode(6);

    // 1. index > 0 of empty list
    list.insertNodeAtIndex(1, node1); // empty
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();


    // 2. start of empty list
    list.insertNodeAtIndex(0, node1); // 1
    expect(list.head).toEqual(node1);
    expect(list.head.next).toBeNull();
    expect(list.tail).toEqual(node1);



    // 3. second position of single list
    list.insertNodeAtIndex(1, node2); // 1 - 2
    expect(list.head).toEqual(node1);
    expect(list.head.next).toEqual(node2);
    expect(list.head.next.prev).toEqual(node1);
    expect(list.tail).toEqual(node2);


    // 3. start of single list
    list.insertNodeAtIndex(0, node3); // 3 - 1 - 2
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node1);
    expect(list.head.next.next).toEqual(node2);
    expect(list.head.next.next.prev).toEqual(node1);
    expect(list.tail).toEqual(node2);


    // 4. middle of list
    list.insertNodeAtIndex(1, node4); // 3 - 4 - 1 - 2
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node4);
    expect(list.head.next.next).toEqual(node1);
    expect(list.head.next.next.next).toEqual(node2);
    expect(list.head.next.next.next.prev).toEqual(node1);
    expect(list.tail).toEqual(node2);


    // 5. tail index of list
    list.insertNodeAtIndex(3, node5); // 3 - 4 - 1 - 5 - 2
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node4);
    expect(list.head.next.next).toEqual(node1);
    expect(list.head.next.next.next).toEqual(node5);
    expect(list.head.next.next.next.next).toEqual(node2);
    expect(list.head.next.next.next.next.prev).toEqual(node5);
    expect(list.tail).toEqual(node2);

    // 6. out of bound of list
    list.insertNodeAtIndex(6, node6); // 3 - 4 - 1 - 5 - 2
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node4);
    expect(list.head.next.next).toEqual(node1);
    expect(list.head.next.next.next).toEqual(node5);
    expect(list.head.next.next.next.next).toEqual(node2);
    expect(list.head.next.next.next.next.prev).toEqual(node5);
    expect(list.tail).toEqual(node2);

  })

  it('should delete node at index', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    const node3 = new DoublyLinkedListNode(3);

    // 1. delete from any index of empty node
    list.deleteByIndex(0)
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    list.deleteByIndex(1)
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    // 2. delete from first index of single element list
    list.insertNode(node1);
    list.deleteByIndex(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    // 3. delete from out of bounds of single element list
    list.insertNode(node1);
    list.deleteByIndex(1);
    expect(list.head).toEqual(node1);
    expect(list.tail).toEqual(node1);

    // 4. delete tail index of multiple element list
    list.insertNode(node2);
    list.deleteByIndex(1);
    expect(list.head).toEqual(node2);
    expect(list.head.next).toBeNull();
    expect(list.tail).toEqual(node2);

    // 5. delete element in between head and tail of multiple element list
    list.insertNode(node1);
    list.insertNode(node3);
    list.deleteByIndex(1);
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node2);
    expect(list.head.next.prev).toEqual(node3);
    expect(list.tail).toEqual(node2);
  })

  it('should return nth node from end', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    const node3 = new DoublyLinkedListNode(3);

    // 1. return any nth node from empty list
    expect(list.getNthNodeFromEnd(0)).toBeNull();
    expect(list.getNthNodeFromEnd(1)).toBeNull();

    // 2. return 0th node from single list
    list.insertNode(node1); // 1
    expect(list.getNthNodeFromEnd(0)).toEqual(node1);

    // 3. return 1st from last ndoe from single list (out of bounds)
    expect(list.getNthNodeFromEnd(1)).toBeNull();

    // 4. return 0th from last node from multiple node list
    list.insertNode(node2); // 2 - 1
    expect(list.getNthNodeFromEnd(0)).toEqual(node1);

    // 5. return length - 1 node from multiple node list
    expect(list.getNthNodeFromEnd(1)).toEqual(node2)

    // 6. return middle node from multiple node list
    list.insertNode(node3); // 3 - 2 - 1
    expect(list.getNthNodeFromEnd(1)).toEqual(node2);
  })

  it('should reverse list', () => {
    const list = new DoublyLinkedList();
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2);
    const node3 = new DoublyLinkedListNode(3);

    // 1. list is empty
    list.reverse();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    // 2. list has 1 element
    list.insertNode(node1);
    list.reverse();
    expect(list.head).toEqual(node1);
    expect(list.tail).toEqual(node1);

    // 3. list has more than 1 element
    list.insertNode(node2) // 2 - 1
    list.reverse() // 1 - 2
    expect(list.head).toEqual(node1);
    expect(list.head.next).toEqual(node2);
    expect(list.head.next.prev).toEqual(node1);
    expect(list.tail).toEqual(node2);

    list.insertNode(node3); // 3 - 1 - 2
    list.reverse(); // 2 - 1 - 3
    expect(list.head).toEqual(node2);
    expect(list.head.next).toEqual(node1);
    expect(list.head.next.prev).toEqual(node2);
    expect(list.head.next.next).toEqual(node3);    
    expect(list.head.next.next.prev).toEqual(node1);
    expect(list.tail).toEqual(node3);

  })

});