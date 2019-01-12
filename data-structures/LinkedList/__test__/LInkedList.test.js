import LinkedList from '../LinkedList';
import LinkedListNode from '../LinkedListNode';


describe('LinkedList', () => {

  it('should create a new empty linked list', () => {
    // const node = new 
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.isEmpty()).toBe(true);
  })

  it('should not insert null node', () => {
    const list = new LinkedList();
    list.insertNode(null);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  })

  it('should insert node to head of empty list and verify that it is tail as well', () => {
    const list = new LinkedList();
    const node = new LinkedListNode(1);
    list.insertNode(node);
    expect(list.head).toEqual(node);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    expect(list.tail).toEqual(node);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.head).toEqual(list.tail);
  })

  it('should insert value as node to head of empty list and verify that it is tail as well', () => {
    const list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.head).toEqual(list.tail);
  })

  it('should not append null node', () => {
    const list = new LinkedList();
    list.appendNode(null);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  })

  it('should append node to head of empty list and verify that it is tail as well', () => {
    const list = new LinkedList();
    const node = new LinkedListNode(1);
    list.appendNode(node);
    expect(list.head).toEqual(node);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    expect(list.tail).toEqual(node);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.head).toEqual(list.tail);
  })

  it('should append value as node to head of empty list and verify that it is tail as well', () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
    expect(list.head).toEqual(list.tail);
  })

  it('should insert node into beginning of list', () => {
    const list = new LinkedList();
    const node1 = new LinkedListNode(1);
    list.insertNode(node1);
    const node2 = new LinkedListNode(2);
    list.insertNode(node2);
    expect(list.head).toEqual(node2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toEqual(node1);
    expect(list.head.next).toEqual(list.tail);
    expect(list.tail).toEqual(node1);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
  })

  it('should insert value as node into beginning of list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toEqual(list.tail);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.next).toBeNull();
  })


  it('should append node to the end of the list', () => {
    const list = new LinkedList();
    const node1 = new LinkedListNode(1);
    list.appendNode(node1);
    const node2 = new LinkedListNode(2);
    list.appendNode(node2);
    expect(list.head).toEqual(node1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(node2);
    expect(list.head.next).toEqual(list.tail);
    expect(list.tail).toEqual(node2);
    expect(list.tail.value).toEqual(2);
    expect(list.tail.next).toBeNull();
  })

  it('should append value as node into beginning of list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(list.tail);
    expect(list.tail.value).toEqual(2);
    expect(list.tail.next).toBeNull();
  })

  it('should delete node by node reference', () => {
    const list = new LinkedList();
    const node1 = new LinkedListNode(1);
    list.insertNode(node1); // 1
    list.deleteNode(node1); // null
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();


    const node2 = new LinkedListNode(2);
    list.insertNode(node1); // 1
    list.insertNode(node2); // 2 - 1
    list.deleteNode(node2); // 1

    expect(list.head).toEqual(node1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull()
    expect(list.head).toEqual(list.tail);
    expect(list.tail).toEqual(node1);

    list.insertNode(node2); // 2 - 1
    list.deleteNode(node1); // 2

    expect(list.head).toEqual(node2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull()
    expect(list.head).toEqual(list.tail);
    expect(list.tail).toEqual(node2);

    const node3 = new LinkedListNode(3);
    list.insertNode(node3); // 3 - 2
    list.insertNode(node1); // 1 - 3 - 2
    list.deleteNode(node3); // 1 - 2

    expect(list.head).toEqual(node1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(node2);
    expect(list.tail).toEqual(node2);
    expect(list.tail.value).toEqual(2);
    expect(list.tail.next).toBeNull();
  }) 

  it('should return list elements in array', () => {
    const list = new LinkedList();
    expect(list.toArray()).toEqual([]);
    list.append(1);
    expect(list.toArray()).toEqual([1]);
    list.append(2);
    expect(list.toArray()).toEqual([1, 2]);
    list.append(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
    list.delete(3);
    expect(list.toArray()).toEqual([1, 2]);
  })

});