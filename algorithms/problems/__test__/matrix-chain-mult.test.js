import { matrixChainOrder } from '../matrix-chain-mult';

describe('Matrix Chain Mult', () => {


  it('should return single array if given 1 array', () => {
    let dimensions = [30, 35];
    expect(matrixChainOrder(dimensions)).toEqual('A[1]')
  })

  it('should return parenthesized result for multiple dimensions', () => {
    let dimensions = [30, 35, 15, 5, 10, 20, 25];
    expect(matrixChainOrder(dimensions)).toEqual('((A[1] (A[2] A[3])) ((A[4] A[5]) A[6]))')
  })
})