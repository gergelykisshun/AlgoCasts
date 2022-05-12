// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {
  const merged = []

  while(left.length && right.length ){
    if(left[0] < right[0]){
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return [...merged, ...right, ...left];

}


module.exports = { bubbleSort, selectionSort, mergeSort, merge };
