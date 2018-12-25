/*
*/
function findMaxMiddleSubarray(A, low, mid, high) {
	let leftMaxIndex = mid;
	let rightMaxIndex = mid + 1;
	let leftSum = 0;
	let sum = 0;
	for (let i = mid; i >= low; i--) {
		sum = sum + A[i];
		if (sum > leftSum) {
			leftSum = sum;
			leftMaxIndex = i;
		}
	}
	let rightSum = 0;
	sum = 0;
	for (let i = mid + 1; i <= high; i++) {
		sum = sum + A[i];
		if (sum > rightSum) {
			rightSum = sum;
			rightMaxIndex = i;
		}
	}
	return [ leftMaxIndex, rightMaxIndex, leftSum + rightSum ];
}

/*
	A = array
	low = lower bound of index
	high = higher bound of index
*/
export default function findMaxSubarray(A, low, high) {
	if (high === low) {
		return [ low, high, A[low] ]
	}
	const mid = low + Math.floor((high - low) / 2);
	let [ leftLow, leftHigh, leftMax ] = findMaxSubarray(A, low, mid);
	let [ rightLow, rightHigh, rightMax ] = findMaxSubarray(A, mid+1, high);
	let [ midLow, midHigh, midMax ] = findMaxMiddleSubarray(A, low, mid, high);
	if (leftMax >= rightMax && leftMax >= midMax) {
		return [ leftLow, leftHigh, leftMax ];
	} else if (rightMax >= leftMax && rightMax >= midMax) {
		return [ rightLow, rightHigh, rightMax ];
	} else {
		return [ midLow, midHigh, midMax ];
	}
}