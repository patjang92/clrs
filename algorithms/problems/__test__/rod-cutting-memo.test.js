// import cutRod from '../rod-cutting';
import { cutRod, calculateCutRod } from '../rod-cutting-memo';

describe('Rod Cutting', () => {

  let prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
  // let prices;
  // beforeAll(() => {
  //   prices = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
  // })

  it('should return 0 for length 0', () => {
    const { revenue, cuts } = cutRod(prices, 0);
    expect(revenue).toBe(0);
    expect(cuts).toEqual([]);
  })

  it('should return revenue of 1 and cuts = [1] for length 1', () => {
    const { revenue, cuts } = cutRod(prices, 1);
    expect(revenue).toBe(1);
    expect(cuts).toEqual([1]);
  })

  it('should return revenue of 10 and cuts = [2, 2] for length 4', () => {
    const { revenue, cuts } = cutRod(prices, 4);
    expect(revenue).toBe(10);
    expect(cuts).toEqual([2, 2]);
  })

  it('should return revenue of 25 and cuts = [3, 6] for length 9', () => {
    const { revenue, cuts } = cutRod(prices, 9);
    expect(revenue).toBe(25);
    expect(cuts).toEqual([3, 6]);
  })

  it('should return revenue of 30 and cuts = [] for length 10', () => {
    const { revenue, cuts } = cutRod(prices, 10);
    expect(revenue).toBe(30);
    expect(cuts).toEqual([10]);
  })
})