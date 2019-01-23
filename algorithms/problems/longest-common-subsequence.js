export default function lcsLength(X, Y) {

  // for X[i] and Y[j], lcsCount stores lcs length so far in lcsCount[i+1][j+1]
  // X[0] and Y[0] are the 1st elements of seq length 1, hence i+1 and j+1
  const lcsCount = [];
  const lcsPath = [];

  // if X or Y is a 0 length subsequence, lcs must be 0
  for (let i = 0; i <= X.length; i++) {
    lcsCount[i] = [0];
    lcsPath[i] = [];
  }
  for (let j = 0; j <= Y.length; j++) {
    lcsCount[0][j] = 0;
  }

  // bottom-up approach
  // we fill rows from left to right, top to bottom
  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < Y.length; j++) {

      // if they are equal, get LCS of X[i-1] and Y[j-1] and add to count
      if (X[i] == Y[j]) {
        lcsCount[i+1][j+1] = lcsCount[i][j] + 1;
        lcsPath[i+1][j+1] = "up-left";
      }

      // if not, take greater subsequence of X[i-1]Y[j] or X[i]Y[j-1]
      // the 2 subproblems could have bene a match, or they would derive answer from previous subproblems
      else if (lcsCount[i][j+1] >= lcsCount[i+1][j]) {
        lcsCount[i+1][j+1] = lcsCount[i][j+1];
        lcsPath[i+1][j+1] = "up";
      } 
      else {
        lcsCount[i+1][j+1] = lcsCount[i+1][j]
        lcsPath[i+1][j+1] = "left";
      }
    }
  }

  // return { lcsCount, lcsPath }
  console.log("lcsCount = ", lcsCount);
  console.log("lcsPath = ", lcsPath);
  return printLCS(lcsPath, X, X.length, Y.length);
}

function printLCS(lcsPath, X, i, j) {
  if (i == 0 || j == 0) return "";
  let lcs = "";

  if (lcsPath[i][j] == "up-left") {
    lcs = `${lcs}${printLCS(lcsPath, X, i-1, j-1)}`;
    lcs = `${lcs}${X[i-1]}`;
  } else if (lcsPath[i][j] == "up") {
    lcs = `${lcs}${printLCS(lcsPath, X, i-1, j)}`;
  } else {
    lcs = `${lcs}${printLCS(lcsPath, X, i, j-1)}`;
  }

  console.log("lcs = ", lcs);
  return lcs;
}