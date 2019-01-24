/**
 * Returns largest set of mutually compatible activities
 * Runtime: O(n)
 * 
 * @param {*} startTimes 
 * @param {*} finishTimes sorted in monotonically increasing order 
 * 
 * @returns {number|Array} indices of largest set of mutually disjoint activites 
 */
export default function activitySelector(startTimes, finishTimes) {
  const numActivities = startTimes.length;
  const activities = [];

  if (numActivities == 0) return activities;

  // always go for the activity with earliest finish time
  // in the beginning, this is the first index
  activities.push(0);
  let lastActivity = 0;

  // find next activity with start time after last activity's finish time
  // let nextActivity = lastActivity + 1;
  for (let nextActivity = 1; nextActivity < numActivities; nextActivity++) {
    if (startTimes[nextActivity] >= finishTimes[lastActivity]) {
      activities.push(nextActivity);
      lastActivity = nextActivity;
    }
  }

  return activities;
}