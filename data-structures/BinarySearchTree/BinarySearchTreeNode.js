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