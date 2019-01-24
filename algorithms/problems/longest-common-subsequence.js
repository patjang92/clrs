/**
 * Finds longest subsequence in X and Y
 * Runtime: O(m*n) where m = X.length and n = Y.length
 * Space: O(m*n) for table
 * 
 * @param {*} X 
 * @param {*} Y 
 */
export default function getLCS(X, Y) {
  // for X[i] and Y[j], lcsLength stores lcs length so far in lcsLength[i+1][j+1]
  // X[0] and Y[0] are the 1st elements of seq length 1, hence i+1 and j+1
  let lcsLength = []; // X.length x Y.length
  for (let i = 0; i <= X.length; i++) {
    lcsLength[i] = [0];
  }
  for (let j = 0; j <= Y.length; j++) {
    lcsLength[0][j] = 0;
  }

  // bottom-up approach
  // we fill rows from left to right, top to bottom
  for (let i = 1; i <= X.length; i++) {
    for (let j = 1; j <= Y.length; j++) {

      // if they are equal, take lcs of both prev elements and add 1
      if (X[i-1] == Y[j-1]) {
        lcsLength[i][j] = lcsLength[i-1][j-1] + 1;
      } 
      
      // if not, find prev max and set to max
      else if (lcsLength[i-1][j] > lcsLength[i][j-1]) {
        lcsLength[i][j] = lcsLength[i-1][j];
      }
      else {
        lcsLength[i][j] = lcsLength[i][j-1];
      }
    }
  }

  return getLCSOrder(lcsLength, X, X.length, Y.length)
}

/**
 * 
 * Prints sequence
 * Runtime: O(i + j), or O(m + n) where m is X.length and n = Y.length
 * Space: O(i + j) 
 * 
 * @param {*} lcsLength 
 * @param {*} X 
 * @param {*} i 
 * @param {*} j 
 */
function getLCSOrder(lcsLength, X, i, j) {
  if (i == 0 || j == 0) return "";

  // check if both up and left are same and current value is up or left + 1
  else if (lcsLength[i][j-1] == lcsLength[i-1][j] && (lcsLength[i][j] == (1 + lcsLength[i-1][j]))) {
    return `${getLCSOrder(lcsLength, X, i-1, j-1)}${X[i-1]}`;
  
  // else follow the max path
  } else if (lcsLength[i][j] == lcsLength[i-1][j]) {
    return getLCSOrder(lcsLength, X, i-1, j)
  } else {
    return getLCSOrder(lcsLength, X, i, j-1)
  }
}