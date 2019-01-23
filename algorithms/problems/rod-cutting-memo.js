/**
 * 
 * @param {number|Array} prices 
 * @param {number} length 
 * Runtime: O(n^2)
 * 
 * @returns {number} revenue
 * @returns {number|Array} firstCuts
 */
export function cutRod(prices, rodLength) {
  let maxRevenues = [0];
  let firstCuts = [0];

  for (let i = 1; i <= rodLength; i++) {
    maxRevenues[i] = -Infinity;
    firstCuts[i] = 0;
  }

  calculateCutRod(maxRevenues, firstCuts, prices, rodLength);
  let cuts = buildCutSteps(firstCuts, rodLength);
  return { revenue: maxRevenues[rodLength], cuts }
}

/**
 * 
 * @param {number|Array} prices 
 * @param {number} length 
 * 
 * @param {number|Array} revenues
 * @param {number|Array} firstCuts
 */
function calculateCutRod(maxRevenues, firstCuts, prices, rodLength) {
  if (rodLength == 0) return 0;
  else if (maxRevenues[rodLength] >= 0) return maxRevenues[rodLength];
  else {
    let largestRevenue = -Infinity;
    let cut = 0;
    for (let i = 1; i <= rodLength; i++) {
      let remainderRevenue = calculateCutRod(maxRevenues, firstCuts, prices, rodLength - i);
      if (prices[i] + remainderRevenue > largestRevenue) {
        largestRevenue = prices[i] + remainderRevenue;
        cut = i;
      }
    }
    maxRevenues[rodLength] = largestRevenue;
    firstCuts[rodLength] = cut;
  }

  return maxRevenues[rodLength];
}

function buildCutSteps(firstCuts, rodLength) {
  let lengthCounter = rodLength;
  let cutOrder = [];
  while (lengthCounter > 0) {
    let firstCut = firstCuts[lengthCounter];
    cutOrder.push(firstCut);
    lengthCounter -= firstCut;
  }

  return cutOrder;
}

