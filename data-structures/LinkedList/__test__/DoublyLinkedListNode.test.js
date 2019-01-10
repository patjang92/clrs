import DoublyLinkedListNode from '../DoublyLinkedListNode';

describe('DoublyLinkedListNode', () => {

  it('should create list node with value', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  })

  it('should link to other nodes when passed in as arguments', () => {
    const nextNode = new DoublyLinkedListNode('b');
    const prevNode = new DoublyLinkedListNode('c');
    const node = new DoublyLinkedListNode('a', nextNode, prevNode);

    expect(node.value).toBe('a');
    expect(node.next).toEqual(nextNode);
    expect(node.next.value).toBe('b');
    expect(node.next.next).toBeNull();
    expect(node.prev).toEqual(prevNode);
    expect(node.prev.value).toBe('c');
    expect(node.prev.prev).toBeNull();
  })
});