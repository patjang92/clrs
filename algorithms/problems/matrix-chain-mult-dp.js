/**
 * Find optimal matrix multiplication chain order (parenthesize)
 * Runtime: O(n^3)
 * Space: O(n^2)
 * 
 * @param {number | array} dimensions
 * Matrix A[i] is dimensions[i-1] x dimensions[i]
 * Number of matrices n = dimensions.length - 1 
 */
export function matrixChainOrder(dimensions) {

  // get number of matrices
  // first matrix is at index A[1]
  const numMatrices = dimensions.length - 1;

  // for mult matrices A[i..j], minOps[i][j] holds the min number of mult operations
  // minOps range = [1..n][1..n]
  let minOps = [];
  for (let i = 0; i <= numMatrices; i++) {
    minOps[i] = [];
  }

  // for mult matrices A[i..j], bestSplit[i][j] is ideal parenthesis split location s.t. 
  // i <= split < j and A[i..split] * A[split+1, j] require the least computation
  // split range = [1..n-1, 2..n]
  let bestSplit = [];
  for (let i = 0; i <= numMatrices; i++) {
    bestSplit[i] = [];
  }

  // compute base case where mult A[i..i] is just 1 matrix, costs 0 operations
  for (let i = 1; i <= numMatrices; i++) {
    minOps[i][i] = 0;
  }

  // start from mult chain length of 2 and work bottom up
  for (let chainLength = 2; chainLength <= numMatrices; chainLength++) {

    // iterate over all the matrix mult chains of length chainLength from A[start] to A[end]

    // if chainLength = 2 and numMatrices = 10
    // then want to evaluate A[1..2], A[2..3]... A[9..10]
    // 9 = 10 - 2 + 1 = numMatrices - chainLength + 1
    for (let start = 1; start <= numMatrices - chainLength + 1; start++) {
      
      // end index will be chainLength - 1
      let end = start + chainLength - 1;
      
      // default to highest value
      minOps[start][end] = Infinity;

      // A[start..split], A[split+1..end]
      // iterate from start to end - 1
      for (let split = start; split < end; split++) {

        // total opCount = cost of computing each subproblem + cost of multiplying together
        // opCost of mult 2 matrices (p x q) * (q x r) = p * q * r, resulting dimensions (p x r)
        // p = rows of A[start] = dimensions[start-1]
        // q = rows of A[split] or cols of A[split+1] = dimensions[split] 
        //   remember A[split] = d[split-1] x d[split], A[split+1] = d[split] x d[split + 1]
        // r = dimensions[end]
        let opCount = minOps[start][split] + minOps[split+1][end] + (dimensions[start-1] * dimensions[split] * dimensions[end])
        
        // save optimal values
        if (opCount < minOps[start][end]) {
          minOps[start][end] = opCount;
          bestSplit[start][end] = split;
        }
      }
    }
  }

  return printOptimalParens(bestSplit, 1, numMatrices);
}

export function printOptimalParens(bestSplit, start, end) {
  if (start == end) return `A[${start}]`;
  return "(" + printOptimalParens(bestSplit, start, bestSplit[start][end]) + ' ' + printOptimalParens(bestSplit, bestSplit[start][end] + 1, end) + ")";
}