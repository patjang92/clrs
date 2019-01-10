/**
 * Finds i'th order term in input array A in linear time
 * 
 * @param {(number|Array)} A Input Array
 * @param {number} i i'th order term to find in input (0 is first)
 * @param {number} start First index of array
 * @param {number} end Last index of array
 * 
 * @returns {number} i'th order term in input array
 */
export default function randomizedSelection(A, i, start, end) {
    if (!A || !A.length) {
        return null;
    }

    if (i > end) return null;
    if (end === start) return A[start];

    let pivot = partition(A, start, end);

    if (pivot === i) return A[pivot];
    else if (i < pivot) {
        return randomizedSelection(A, i, start, pivot-1)
    } else if (i > pivot) {
        return randomizedSelection(A, i, pivot+1, end)
    }
}

/**
 * Partitions array with a randomly selected pivot
 * 
 * @param {(number|Array)} A Input array
 * @param {number} start First index of array
 * @param {number} end Last index of array
 * 
 * @returns {number} index of pivot 
 */
function partition(A, start, end) {
    const pivot = Math.floor(Math.random() * (end - start + 1)) + start
    swap(A, pivot, end);

    let swapIndex = start - 1;
    for (let j = start; j < end; j++) {
        if (A[j] < A[end]) {
            swapIndex++;
            swap(A, swapIndex, j);
        }
    }
    swapIndex++;
    swap(A, swapIndex, end);

    return swapIndex;
}

/**
 * Swaps 2 elements in array by their indices
 * 
 * @param {*} A Input array
 * @param {*} i Frist element to be swapped
 * @param {*} j Second element to be swapped
 */
function swap(A, i, j) {
    const tmp = A[i];
    A[i] = A[j];
    A[j] = tmp;
}