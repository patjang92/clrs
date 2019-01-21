/**
 * 
 * @param {number|Array} prices 
 * @param {number} length 
 * 
 * @returns {number} revenue
 * @returns {number|Array} firstCuts
 */
export function cutRod(prices, rodLength) {
  const { revenues, firstCuts } = calculateCutRod(prices, rodLength);
  const cuts = [];
  let lengthCounter = rodLength;

  // iterate through lengths to get all cuts we need
  while (lengthCounter > 0) {
    const cutLength = firstCuts[lengthCounter];
    cuts.push(cutLength);
    lengthCounter = lengthCounter - cutLength;
  }

  return { revenue: revenues[rodLength], cuts }
}

/**
 * 
 * @param {number|Array} prices 
 * @param {number} length 
 * 
 * @returns {number|Array} revenues
 * @returns {number|Array} firstCuts
 */
export function calculateCutRod(prices, rodLength) {
  if (!prices || rodLength < 0) return { revenues: null, firstCuts: null }

  const revenues = [0];
  const firstCuts = [0];

  // find the max revenues starting from 0 up to rodLength
  for (let length = 1; length <= rodLength; length++) {
    let maxRevenue = -Infinity;

    // iterate through possible first cut lengths
    for (let cut = 1; cut <= length; cut++) {

      // get potential revenue of first cut + remainder
      let revenue = prices[cut] + revenues[length-cut];

      // store maxRevenue and corresponding first step that we've seen so far 
      if (maxRevenue < revenue) {
        maxRevenue = revenue;
        firstCuts[length] = cut;
      }
    }
    
    // udpate max revenue for given rod length
    revenues[length] = maxRevenue;
  }

  return { revenues, firstCuts };
}

