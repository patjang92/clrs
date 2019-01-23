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
    // minOps[i][i] = 0;
    for (let j = 1; j <= numMatrices; j++) {
      minOps[i][j] = Infinity;
    }
  }

  matrixChainOrderAux(minOps, bestSplit, dimensions, 1, numMatrices);

  // start from largest chain and solve for subproblems
  // for (let chainLength = numMatrices; chainLength >= 2; chainLength--) {
  //   for (let start = 1; start <= numMatrices - chainLength + 1; start++) {
  //     let end = start + chainLength - 1;
  //   }
  // }

  return printOptimalParens(bestSplit, 1, numMatrices);
}

function matrixChainOrderAux(minOps, bestSplit, dimensions, start, end) {
  if (minOps[start][end] < Infinity) return minOps[start][end]; 
  else if (start == end) {
    minOps[start][end] = 0;
    // bestSplit[start][end] = start;
    return 0;
  }
  else {
    let minOpCount = Infinity;
    let idealSplit = start;
    for (let split = start; split < end; split++) {
      let opCount = matrixChainOrderAux(minOps, bestSplit, dimensions, start, split) + 
        matrixChainOrderAux(minOps, bestSplit, dimensions, split+1, end) + 
        (dimensions[start-1] * dimensions[split] * dimensions[end]);
      if (opCount < minOpCount) {
        minOpCount = opCount;
        idealSplit = split;
      }
    }

    minOps[start][end] = minOpCount;
    bestSplit[start][end] = idealSplit;

    return minOps[start][end];
  }
}

export function printOptimalParens(bestSplit, start, end) {
  if (start == end) return `A[${start}]`;
  return "(" + printOptimalParens(bestSplit, start, bestSplit[start][end]) + ' ' + printOptimalParens(bestSplit, bestSplit[start][end] + 1, end) + ")";
}


