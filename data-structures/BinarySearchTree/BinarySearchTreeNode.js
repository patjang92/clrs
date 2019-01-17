export default class BinarySearchTreeNode {

  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  get height() {

  }

  /**
   * 
   * @param {BinarySearchTreeNode} n 
   * @return {BinarySearchTreeNode}
   */
  setLeft(n) {
    // remove node
    if (this.left) {
      this.left.parent = null;
    }

    // attach new node to left
    this.left = n;

    // set this node as parent
    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  /**
   * 
   * @param {BinarySearchTreeNode} n 
   * @return {BinarySearchTreeNode}
   */
  setRight(n) {
    // remove node
    if (this.right) {
      this.right.parent = null;
    }

    // attach new node to right
    this.right = n;

    // set this node as parent
    if (this.right) {
      this.right.parent = this;
    }

    return this;
  }

  /**
   * 
   * @param {*} value 
   * @return {BinarySearchTreeNode}
   */
  setValue(value) {
    this.value = value;

    return this;
  }

  /**
   * 
   * @param {*} n 
   * @returns {boolean}
   */
  removeChild(n) {
    if (this.left && this.left == n) {
      this.left = null;
      return true;
    }

    if (this.right && this.right == n) {
      this.right = null;
      return true;
    }

    return false;
  }

  /**
   * Search (Recursive)
   * 
   * @param {*} value 
   * @returns {BinarySearchTreeNode}
   */
  search(value) {
    if (value == null) return null;

    if (this.value == value) return this;

    if (value < this.value && this.left) {
      return this.left.search(value);
    } 
    
    if (value > this.value && this.right) {
      return this.right.search(value)
    }

    return null;
  }

  /**
   * @returns {BinarySearchTreeNode}
   */
  findMin() {
    if (!this.left) return this;
    return this.left.findMin();
  }  

  /**
   * @returns {BinarySearchTreeNode}
   */
  findMax() {
    if (!this.right) return this;
    return this.right.findMax();
  }

  /**
   * Search (Iterative)
   * 
   * @param {*} value 
   * @returns {BinarySearchTreeNode}
   */
  // search(value) {
  //   let c = this;
  //   while (c != null && c.value !== value) {
  //     if (value < c.value) {
  //       c = c.left;
  //     } else if (value > c.value) {
  //       c = c.right;
  //     }
  //   }
  //   return c;
  // }

  /**
   * @returns {BinarySearchTreeNode}
   */
  get successor() {

    // 1. if right subtree is non-empty, find left most child of right side
    if (this.right) {
      return this.right.findMin();
    }

    // 2. if right subtree is empty, find first ancestor that current node is "on the left" to
    let parent = this.parent;
    let current = this;
    while (parent != null && current == parent.right) {
      current = parent;
      parent = parent.parent;
    }

    return parent;
  }


  /**
   * @return {*|array} 
   */
  inOrderTraversal() {
    let order = [];

    if (this.left) {
      order = order.concat(this.left.inOrderTraversal());
    }

    order.push(this.value);

    if (this.right) {
      order = order.concat(this.right.inOrderTraversal());
    }

    return order;
  }

  preOrderTraversal() {
    let order = [];

    order.push(this.value);

    if (this.left) {
      order = order.concat(this.left.preOrderTraversal());
    }

    if (this.right) {
      order = order.concat(this.right.preOrderTraversal());
    }

    return order;
  }

  postOrderTraversal() {
    let order = [];

    if (this.left) {
      order = order.concat(this.left.postOrderTraversal());
    }

    if (this.right) {
      order = order.concat(this.right.postOrderTraversal());
    }

    order.push(this.value);

    return order;
  }



}