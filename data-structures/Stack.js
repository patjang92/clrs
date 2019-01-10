/**
 * Implements Stack class using primitive array
 */
export default class Stack {

  /**
   * Creates stack object and can take in optional array argument
   * 
   * @param {*} array Will take optional array and use as stack 
   */
  constructor(array = []) {
    this.stackArray = array;
  }

  /**
   * Determine whether stack is empty
   * T(n) = O(1)
   * 
   * @returns {boolean} true if stack is empty
   */
  isEmpty() {
    return this.stackArray.length === 0;
  }

  /**
   * Pushes new element to top of stack
   * T(n) = O(1)
   * 
   * @param {*} x new element
   */
  push(x) {
    this.stackArray.push(x);
  }

  /**
   * Removes and retrieves top most element of stack
   * T(n) = O(1)
   * 
   * @returns {*} top element of stack
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow")
    }
    const top = this.stackArray[this.stackArray.length - 1];
    this.stackArray.length--;
    return top;
  }

  /**
   * @returns {(*|array)} stack as array
   */
  toArray() {
    return this.stackArray;
  }
}