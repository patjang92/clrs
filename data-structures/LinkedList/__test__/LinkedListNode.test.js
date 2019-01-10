import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {

  it('should create list node with value', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  })

  it('should link to other nodes when passed in as arguments', () => {
    const nextNode = new LinkedListNode('b');
    const node = new LinkedListNode('a', nextNode);

    expect(node.value).toBe('a');
    expect(node.next).toEqual(nextNode);
    expect(node.next.value).toBe('b');
    expect(node.next.next).toBeNull();
  })
});