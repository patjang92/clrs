import Node from '../BinarySearchTreeNode';

describe('BinarySearchTreeNode', () => {

  it('should set and overwrite children', () => {
    let a = new Node(1);
    let b = new Node(2);
    let c = new Node(3);
    let d = new Node(4);
    
    expect(a.left).toBeNull();
    expect(a.right).toBeNull();

    a.setLeft(b);
    a.setRight(c);

    expect(a.left).toEqual(b);
    expect(b.parent).toEqual(a);
    expect(a.right).toEqual(c);
    expect(c.parent).toEqual(a);

    a.setLeft(d);
    expect(a.left).toEqual(d);
    expect(d.parent).toEqual(a);
    expect(b.parent).toBeNull();
  })

  it('should traverse in order', () => {
    let a = new Node(1);
    let b = new Node(2);
    let c = new Node(3);
    let d = new Node(4);
    let e = new Node(5);
    let f = new Node(6);
    let g = new Node(7);

    a.setLeft(b);
    a.setRight(c);
    b.setLeft(d);
    b.setRight(e);
    c.setLeft(f);
    c.setRight(g);

    expect(a.inOrderTraversal()).toEqual([4, 2, 5, 1, 6, 3, 7])
  })

  it('should traverse pre order', () => {
    let a = new Node(1);
    let b = new Node(2);
    let c = new Node(3);
    let d = new Node(4);
    let e = new Node(5);
    let f = new Node(6);
    let g = new Node(7);

    a.setLeft(b);
    a.setRight(c);
    b.setLeft(d);
    b.setRight(e);
    c.setLeft(f);
    c.setRight(g);

    expect(a.preOrderTraversal()).toEqual([1, 2, 4, 5, 3, 6, 7])
  })

  it('should traverse post order', () => {
    let a = new Node(1);
    let b = new Node(2);
    let c = new Node(3);
    let d = new Node(4);
    let e = new Node(5);
    let f = new Node(6);
    let g = new Node(7);

    a.setLeft(b);
    a.setRight(c);
    b.setLeft(d);
    b.setRight(e);
    c.setLeft(f);
    c.setRight(g);

    expect(a.postOrderTraversal()).toEqual([4, 5, 2, 6, 7, 3, 1])
  })

  it('should remove child', () => {
    let a = new Node(1);
    let b = new Node(2);
    let c = new Node(3);
    let d = new Node(4);

    a.setLeft(b);
    a.setRight(c);

    a.removeChild(b);
    expect(a.left).toBeNull();
    
    a.removeChild(d);
    expect(a.right).toEqual(c);
    expect(a.left).toBeNull();
    
    a.removeChild(c);
    expect(a.right).toBeNull();
  })

  it('should search for a given value or return null if not found', () => {
    let a = new Node(8);
    let b = new Node(3);
    let c = new Node(10);
    let d = new Node(1);
    let e = new Node(6);
    let f = new Node(9);
    let g = new Node(14);

    a.setLeft(b);
    a.setRight(c);
    b.setLeft(d);
    b.setRight(e);
    c.setLeft(f);
    c.setRight(g);

    expect(a.search(8)).toEqual(a);
    expect(a.search(3)).toEqual(b);
    expect(a.search(10)).toEqual(c);
    expect(a.search(1)).toEqual(d);
    expect(a.search(6)).toEqual(e);
    expect(a.search(9)).toEqual(f);
    expect(a.search(14)).toEqual(g);
    expect(a.search(null)).toEqual(null);
    expect(a.search(2)).toEqual(null);
  })

  it('should find min', () => {
    let a = new Node(8);
    let b = new Node(3);
    let c = new Node(10);
    let d = new Node(1);
    let e = new Node(6);
    let f = new Node(9);
    let g = new Node(14);

    expect(a.findMin()).toEqual(a);

    a.setLeft(b);
    a.setRight(c);
    b.setLeft(d);
    b.setRight(e);
    c.setLeft(f);
    c.setRight(g);

    expect(a.findMin()).toEqual(d);
  })

  it('should find max', () => {
    let a = new Node(8);
    let b = new Node(3);
    let c = new Node(10);
    let d = new Node(1);
    let e = new Node(6);
    let f = new Node(9);
    let g = new Node(14);

    expect(a.findMax()).toEqual(a);

    a.setLeft(b);
    a.setRight(c);
    b.setLeft(d);
    b.setRight(e);
    c.setLeft(f);
    c.setRight(g);

    expect(a.findMax()).toEqual(g);
  })

  it('should find successor', () => {
    let a = new Node(8);
    let b = new Node(3);
    let c = new Node(10);
    let d = new Node(1);
    let e = new Node(6);
    let f = new Node(9);
    let g = new Node(14);

    expect(a.successor).toBeNull();

    a.setLeft(b);
    expect(a.successor).toBeNull();
    expect(b.successor).toEqual(a);

    a.setRight(c);
    b.setLeft(d);
    b.setRight(e);
    c.setLeft(f);
    c.setRight(g);

    expect(a.successor).toEqual(f);
    expect(b.successor).toEqual(e);
    expect(c.successor).toEqual(g);
    expect(d.successor).toEqual(b);
    expect(e.successor).toEqual(a);
    expect(f.successor).toEqual(c);
    expect(g.successor).toBeNull();
  })

  it('should find predecessor', () => {
    let a = new Node(8);
    let b = new Node(3);
    let c = new Node(10);
    let d = new Node(1);
    let e = new Node(6);
    let f = new Node(9);
    let g = new Node(14);

    expect(a.predecessor).toBeNull();

    a.setLeft(b);
    expect(a.predecessor).toEqual(b);
    expect(b.predecessor).toBeNull();

    a.setRight(c);
    b.setLeft(d);
    b.setRight(e);
    c.setLeft(f);
    c.setRight(g);

    expect(a.predecessor).toEqual(e);
    expect(b.predecessor).toEqual(d);
    expect(c.predecessor).toEqual(f);
    expect(d.predecessor).toBeNull();
    expect(e.predecessor).toEqual(b);
    expect(f.predecessor).toEqual(a);
    expect(g.predecessor).toEqual(c);
  })

  it('should insert nodes in correct order', () => {
    const root = new Node(2);
    const node1 = root.insert(1);
    expect(node1.value).toBe(1);
    expect(root.left).toEqual(node1);

    const node2 = root.insert(3);
    expect(node2.value).toBe(3);
    expect(root.right).toEqual(node2);

    const node3 = root.insert(7);
    expect(node3.value).toBe(7);
    expect(root.right.right).toEqual(node3);

    const node4 = root.insert(4);
    expect(node4.value).toBe(4);
    expect(root.right.right.left).toEqual(node4);

    const node5 = root.insert(6);
    expect(node5.value).toBe(6);
    expect(root.right.right.left.right).toEqual(node5);
  });

  it('should not insert duplicates', () => {
    const root = new Node(2);
    const node1 = root.insert(1);
    expect(node1.value).toBe(1);
    expect(root.left).toEqual(node1);

    const node2 = root.insert(1);
    expect(node2).toEqual(node1);
    expect(root.right).toBeNull();
    expect(root.left).toEqual(node1);
    expect(root.left.left).toBeNull();
    expect(root.left.right).toBeNull();
  });

  it('should remove leaf nodes', () => {
    const root = new Node();

    const node1 = root.insert(10);
    const node2 = root.insert(20);
    const node3 = root.insert(5);

    expect(root).toEqual(node1);
    expect(root.left).toEqual(node3);
    expect(root.right).toEqual(node2);

    const removed1 = root.delete(5);
    expect(root).toEqual(node1);
    expect(root.left).toBeNull();
    expect(root.right).toEqual(node2);
    expect(removed1).toBe(true);

    const removed2 = root.delete(20);
    expect(root).toEqual(node1);
    expect(root.left).toBeNull();
    expect(root.right).toBeNull();
    expect(removed2).toBe(true);
  });

  it('should remove nodes with one child', () => {
    const root = new Node();

    const node1 = root.insert(10);
    const node2 = root.insert(20);
    const node3 = root.insert(5);
    const node4 = root.insert(30);

    expect(root).toEqual(node1);
    expect(root.left).toEqual(node3);
    expect(root.right).toEqual(node2);
    expect(root.right.right).toEqual(node4);

    const removed1 = root.delete(20);
    expect(root).toEqual(node1);
    expect(root.left).toEqual(node3);
    expect(root.right).toEqual(node4);
    expect(removed1).toBe(true);
    // expect(bstRootNode.toString()).toBe('5,10,30');

    const node5 = root.insert(1);
    expect(root).toEqual(node1);
    expect(root.left).toEqual(node3);
    expect(root.left.left).toEqual(node5);
    expect(root.right).toEqual(node4);
    // expect(bstRootNode.toString()).toBe('1,5,10,30');

    const removed2 = root.delete(5);
    expect(root).toEqual(node1);
    expect(root.left).toEqual(node5);
    // expect(root.left.left).toEqual(node5);
    expect(root.right).toEqual(node4);
    expect(removed2).toBe(true);
    // expect(bstRootNode.toString()).toBe('1,10,30');
  });

  it('should remove nodes with two children', () => {
    const root = new Node();

    root.insert(10);
    root.insert(20);
    root.insert(5);
    root.insert(30);
    root.insert(15);
    root.insert(25);

    expect(root.inOrderTraversal()).toEqual([5,10,15,20,25,30]);
    expect(root.search(20).left.value).toBe(15);
    expect(root.search(20).right.value).toBe(30);

    root.delete(20);
    expect(root.inOrderTraversal()).toEqual([5,10,15,25,30]);

    root.delete(15);
    expect(root.inOrderTraversal()).toEqual([5,10,25,30]);

    root.delete(10);
    expect(root.inOrderTraversal()).toEqual([5,25,30]);
    expect(root.value).toBe(25);

    root.delete(25);
    expect(root.inOrderTraversal()).toEqual([5,30]);

    root.delete(5);
    expect(root.inOrderTraversal()).toEqual([30]);
  });

  it('should remove node with no parent', () => {
    const root = new Node();
    expect(root.value).toBeNull();

    root.insert(1);
    root.insert(2);
    expect(root.inOrderTraversal()).toEqual([1,2]);

    root.delete(1);
    expect(root.inOrderTraversal()).toEqual([2]);

    root.delete(2);
    expect(root.inOrderTraversal()).toEqual([]);
  });

})