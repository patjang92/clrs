import getLCS from '../longest-common-subsequence'

describe('longest common subsequence', () => {

  // it('should be empty sequence if one input is of length 0', () => {
  //   let X = [];
  //   let Y = [1, 2, 3];
  //   const lcs = getLCS(X, Y);
  //   expect(lcs).toEqual("");
  // })

  it('', () => {
    let X = [ 'A', 'B', 'C', 'B', 'D', 'A', 'B' ];
    let Y = [ 'B', 'D', 'C', 'A', 'B', 'A'];
    const lcs = getLCS(X, Y);
    expect(lcs).toEqual("BCBA");
  })

  it('', () => {
    let X = [ 'A', 'B', 'C', 'D' ];
    let Y = [ 'B', 'D' ];
    const lcs = getLCS(X, Y);
    expect(lcs).toEqual("BD");
  })

  it('', () => {
    let X = [ 'S', 'T', 'O', 'N', 'E' ];
    let Y = [ 'L', 'O', 'N', 'G', 'E', 'S', 'T' ];
    const lcs = getLCS(X, Y);
    expect(lcs).toEqual("ONE");
  })

  it('', () => {
    let X = Array.from("ABCDGH")
    // let Y = [ 'L', 'O', 'N', 'G', 'E', 'S', 'T' ];
    let Y = Array.from("AEDFHR")
    const lcs = getLCS(X, Y);
    expect(lcs).toEqual("ADH");
  })
})