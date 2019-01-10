export default function QuickSort(A, start, end) {
  if (end <= start) return A;
  let mid = partition(A, start, end);
  QuickSort(A, start, mid-1);
  QuickSort(A, mid+1, end);
  return A;
}

function partition(A, start, end) {

  // randomized variant
  const randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;
  swap(A, randomIndex, end);
  
  const pivot = A[end];
  let i = start - 1;

  // only iterate to end-1, as end is out pivot
  for (let j = start; j < end; j++) {
    if (A[j] < pivot) {
      i++;
      swap(A, i, j);
    }
  }
  i++;
  swap(A, i, end);

  return i;
}

function swap(A, i, j) {
  const tmp = A[i];
  A[i] = A[j];
  A[j] = tmp;
}