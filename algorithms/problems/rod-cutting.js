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
  console.log("revenues = ", revenues);
  console.log("firstCuts = ", firstCuts);
  
  const cuts = [];
  let lengthCounter = rodLength;
  while (lengthCounter > 0) {
    const cutLength = firstCuts[lengthCounter];
    cuts.push(cutLength);
    lengthCounter = lengthCounter - cutLength;
  }

  console.log("revenue = ", revenues[rodLength]);
  console.log("cuts = ", cuts);
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
  // console.log("prices = ", prices);

  // debugger;

  const revenues = [0];
  const firstCuts = [0];

  // revenues[0] = 0;
  for (let length = 1; length <= rodLength; length++) {
    let maxRevenue = -Infinity;

    for (let cut = 1; cut <= length; cut++) {
      let revenue = prices[cut] + revenues[length-cut];

      if (maxRevenue < revenue) {
        maxRevenue = revenue;
        firstCuts[length] = cut;
      }

    }
    revenues[length] = maxRevenue;
  }

  return { revenues, firstCuts };
}

