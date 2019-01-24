import activitySelector from '../activity-selector';

describe('Activity Selector', () => {
  let startTimes = [1, 3, 0, 5, 3, 5, 6, 8, 8, 2, 12];
  let finishTimes = [4, 5, 6, 7, 9, 9, 10, 11, 12, 14, 16];

  it('should select largest set of mutually compatible activities', () => {
    expect(activitySelector(startTimes, finishTimes)).toEqual([0, 3, 7, 10])
  })
})