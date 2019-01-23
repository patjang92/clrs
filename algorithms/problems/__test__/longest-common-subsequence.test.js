import getLCS from '../longest-common-subsequence'

describe('longest common subsequence', () => {

  it('should be empty sequence if one input is of length 0', () => {
    let X = [];
    let Y = [1, 2, 3];
    const lcs = getLCS(X, Y);
    expect(lcs).toEqual("");
  })

  it('', () => {
    let X = [ 'A', 'B', 'C', 'B', 'D', 'A', 'B' ];
    let Y = [ 'B', 'D', 'C', 'A', 'B', 'A'];
    const lcs = getLCS(X, Y);
    expect(lcs).toEqual("BCBA");
  })
})