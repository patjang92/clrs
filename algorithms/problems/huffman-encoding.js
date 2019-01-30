/**
 * Create a Binary Tree that is Huffman Encoded
 * Runtime: O(n lg n)
 * 
 * @param {Object|Array} chars, each has a freq value
 * @returns {Node} root of Huffman encoded tree
 */
function huffmanEncode(chars) {
  let pq = new PriorityQueue();

  // use frequency as key for priorty queue
  chars.forEach(char => pq.enqueue(char));
  
  // only need to iterate (chars.length - 1 times)
  for (let i = 1; i < chars.length; i++) {

    // dequeue 2 and set them as left and right values of a new node
    // new nodes freq value is the left + right frequencies combined
    let z = new Node();
    let left = pq.dequeue();
    let right = pq.dequeue();
    z.left = left;
    z.right = right;
    z.freq = left.freq + right.freq;

    // enqueue back in, using frequency as key again
    pq.enqueue(z);
  }

  // return head of huffman encoded tree
  return pq.peek();
}