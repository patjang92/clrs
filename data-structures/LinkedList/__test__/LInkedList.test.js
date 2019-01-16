import LinkedList from '../LinkedList';
import LinkedListNode from '../LinkedListNode';


describe('LinkedList', () => {

  it('should create a new empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.isEmpty()).toBe(true);
  })

  it('should not insert null node', () => {
    const list = new LinkedList();
    list.insertNode(null);
    expect(list.head).toBeNull();
  })

  it('should insert node to head of empty list', () => {
    const list = new LinkedList();
    const node = new LinkedListNode(1);
    list.insertNode(node);
    expect(list.head).toEqual(node);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  })

  it('should insert value as node to head of empty list', () => {
    const list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  })

  it('should not append null node', () => {
    const list = new LinkedList();
    list.appendNode(null);
    expect(list.head).toBeNull();
  })

  it('should append node to head of empty list', () => {
    const list = new LinkedList();
    const node = new LinkedListNode(1);
    list.appendNode(node);
    expect(list.head).toEqual(node);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  })

  it('should append value as node to head of empty list', () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
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
  })

  it('should insert value as node into beginning of list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
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
  })

  it('should append value as node into beginning of list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    expect(list.head.value).toEqual(1);
  })

  it('should delete node by node reference', () => {
    const list = new LinkedList();
    const node1 = new LinkedListNode(1);
    list.insertNode(node1); // 1
    list.deleteNode(node1); // null
    expect(list.head).toBeNull();


    const node2 = new LinkedListNode(2);
    list.insertNode(node1); // 1
    list.insertNode(node2); // 2 - 1
    list.deleteNode(node2); // 1

    expect(list.head).toEqual(node1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull()

    list.insertNode(node2); // 2 - 1
    list.deleteNode(node1); // 2

    expect(list.head).toEqual(node2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();

    const node3 = new LinkedListNode(3);
    list.insertNode(node3); // 3 - 2
    list.insertNode(node1); // 1 - 3 - 2
    list.deleteNode(node3); // 1 - 2

    expect(list.head).toEqual(node1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(node2);
  }) 

  it('should ignore delete nonexistent node', () => {
    const list = new LinkedList();
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);
    

    list.insertNode(node1); // 1
    list.insertNode(node2); // 2 - 1
    list.deleteNode(node3); // null
    expect(list.head).toEqual(node2);
    expect(list.head.next).toEqual(node1);
    // expect(list.tail).toEqual(node1);

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

  it('should add node at specific index', () => {
    const list = new LinkedList();
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);
    const node4 = new LinkedListNode(4);
    const node5 = new LinkedListNode(5);
    const node6 = new LinkedListNode(6);

    const mockList = new LinkedList();
    const mock1 = new LinkedListNode(1);
    const mock2 = new LinkedListNode(2);
    const mock3 = new LinkedListNode(3);


    // 1. index > 0 of empty list
    list.insertNodeAtIndex(1, node1); // empty
    expect(list.head).toBeNull();

    // 2. start of empty list
    list.insertNodeAtIndex(0, node1); // 1
    expect(list.head).toEqual(node1);
    expect(list.head.next).toBeNull();

    // 3. second position of single list
    list.insertNodeAtIndex(1, node2); // 1 - 2
    expect(list.head).toEqual(node1);
    expect(list.head.next).toEqual(node2);

    // 3. start of single list
    list.insertNodeAtIndex(0, node3); // 3 - 1 - 2
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node1);
    expect(list.head.next.next).toEqual(node2);

    // 4. middle of list
    list.insertNodeAtIndex(1, node4); // 3 - 4 - 1 - 2
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node4);
    expect(list.head.next.next).toEqual(node1);
    expect(list.head.next.next.next).toEqual(node2);

    // 5. tail index of list
    list.insertNodeAtIndex(3, node5);
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node4);
    expect(list.head.next.next).toEqual(node1);
    expect(list.head.next.next.next).toEqual(node5);
    expect(list.head.next.next.next.next).toEqual(node2);

    // 6. out of bound of list
    list.insertNodeAtIndex(6, node6);
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node4);
    expect(list.head.next.next).toEqual(node1);
    expect(list.head.next.next.next).toEqual(node5);
    expect(list.head.next.next.next.next).toEqual(node2);
  })

  it('should delete node at index', () => {
    const list = new LinkedList();
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);

    // 1. delete from any index of empty node
    list.deleteByIndex(0)
    expect(list.head).toBeNull();
    list.deleteByIndex(1)
    expect(list.head).toBeNull();

    // 2. delete from first index of single element list
    list.insertNode(node1);
    list.deleteByIndex(0);
    expect(list.head).toBeNull();

    // 3. delete from out of bounds of single element list
    list.insertNode(node1);
    list.deleteByIndex(1);
    expect(list.head).toEqual(node1);

    // 4. delete tail index of multiple element list
    list.insertNode(node2);
    list.deleteByIndex(1);
    expect(list.head).toEqual(node2);
    expect(list.head.next).toBeNull();

    // 5. delete element in between head and tail of multiple element list
    list.insertNode(node1);
    list.insertNode(node2);
    list.insertNode(node3);
    list.deleteByIndex(1);
    expect(list.head).toEqual(node3);
    expect(list.head.next).toEqual(node1);
  })

});