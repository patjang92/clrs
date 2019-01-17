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
})