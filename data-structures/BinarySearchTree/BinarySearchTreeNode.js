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
   * @return {number}
   */
  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  /**
   * @return {number}
   */
  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  /**
   * @return {number}
   */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
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
   * @param {BinaryTreeNode} nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @return {boolean}
   */
  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.left == nodeToReplace) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.right == nodeToReplace) {
      this.right = replacementNode;
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
   * Get in-order successor
   * 
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
   * Get in-order predecessor
   * 
   * @returns {BinarySearchTreeNode}
   */
  get predecessor() {
    // 1. if left subtree is non-empty find right most child of left side
    if (this.left) {
      return this.left.findMax();
    }

    // 2. if left subtree is empty, find first ancestor that current node is "on the right" to
    let parent = this.parent;
    let current = this;
    while (parent != null && current == parent.left) {
      current = parent;
      parent = parent.parent;
    }

    return parent;
  }

  /**
   * Insert node
   * 
   * @param {*} n
   * @returns {BinarySearchTreeNode} 
   */
  insert(n) {
    // 1. if n.value == this.value, no duplicates
    if (!this.value) {
      this.setValue(n);
      return this;
    }

    // 2. if less, go or set left
    if (n < this.value) {
      if (this.left) {
        return this.left.insert(n);
      }

      this.setLeft(new BinarySearchTreeNode(n));
      return this.left;
    }
    
    // 3. if greater, go or set right
    if (n > this.value) {
      if (this.right) {
        return this.right.insert(n);
      }
      this.setRight(new BinarySearchTreeNode(n));
      return this.right;
    }

    return this;
  }

  /**
   * 
   * @param {*} x value to be deleted
   * @returns {boolean} if value x was successfully deleted
   */
  delete(x) {
    const nodeToDelete = this.search(x);
    
    if (!nodeToDelete) return false;

    const { parent } = nodeToDelete;

    // 1. no children
    if (!nodeToDelete.left && !nodeToDelete.right) {
      // 1a. has parent - just remove child from parent
      if (parent) {
        parent.removeChild(nodeToDelete);

      // 1b. no parent / is root, set value to undefined      
      } else {
        nodeToDelete.setValue(undefined)
      }

    // 2. has both children    
    } else if (nodeToDelete.left && nodeToDelete.right) {
      
      // find successor on right subtree
      const rightSuccessor = nodeToDelete.right.findMin();

      // 2a. if rightSuccessor != right child, replace with rightSuccessor value
      // call delete on rightSuccessor to rearrange subtrees
      if (rightSuccessor != nodeToDelete.right) {
        // rightSuccessor will not have left child, reduce to easier case
        this.delete(rightSuccessor.value);
        nodeToDelete.setValue(rightSuccessor.value);
      // 2b. if rightSuccessor == right child, replace with right child to save time
      } else {
        // don't need to setLeft as it will not have a left child
        nodeToDelete.setValue(nodeToDelete.right.value);
        nodeToDelete.setRight(nodeToDelete.right.right)  
      }    
    // 3. has one child, replace nodeToDelete with child and update parent
    } else {
      const childNode = nodeToDelete.left || nodeToDelete.right;

      if (parent) {
        parent.replaceChild(nodeToDelete, childNode);
      } else {
        BinarySearchTreeNode.copyNode(childNode, nodeToDelete)
      }
    }

    nodeToDelete.parent = null;
    return true;
  }

  /**
   * @return {*|array} 
   */
  inOrderTraversal() {
    let order = [];

    if (this.left) {
      order = order.concat(this.left.inOrderTraversal());
    }

    if (this.value) order.push(this.value);

    if (this.right) {
      order = order.concat(this.right.inOrderTraversal());
    }

    return order;
  }

  preOrderTraversal() {
    let order = [];

    if (this.value) order.push(this.value);

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

    if (this.value) order.push(this.value);

    return order;
  }

  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }


}