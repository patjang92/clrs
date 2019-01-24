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

  // initialize all to Infinity (haven't been solved yet and working from top to bottom)
  for (let i = 1; i <= numMatrices; i++) {
    for (let j = 1; j <= numMatrices; j++) {
      minOps[i][j] = Infinity;
    }
  }

  matrixChainOrderAux(minOps, bestSplit, dimensions, 1, numMatrices);
  return printOptimalParens(bestSplit, 1, numMatrices);
}

function matrixChainOrderAux(minOps, bestSplit, dimensions, start, end) {

  // if solved, return solved value;
  if (minOps[start][end] < Infinity) return minOps[start][end]; 

  // base case if start == end, 0 operations are needed (just one matrix)
  else if (start == end) {
    minOps[start][end] = 0;
    return 0;
  }

  // otherwise, iterate through all possible splits between start and end-1
  // recursively calculate op count from A[start, split] and A[split+1, end] + dimensions
  // store lowest opCount and update minOps[start][end] and bestSplit[start][end] at the end
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


