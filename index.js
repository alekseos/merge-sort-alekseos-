const array = [1, -2, -3, 6, 888, 0, -1, 3];

function mergeSort(array){
  if (array.length < 2) return array;
  
  const middle = Math.floor(array.length / 2);
  
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  
  return merge(leftSorted, rightSorted);
}

function merge(leftSorted, rightSorted) {
  let merged = [], leftIndex = 0, rightIndex = 0;
  
  while (leftIndex < leftSorted.length && rightIndex < rightSorted.length){
  
  if(leftSorted[leftIndex] < rightSorted[rightIndex]) {
    merged.push(leftSorted[leftIndex]);
    leftIndex++;
  } else {
    merged.push(rightSorted[rightIndex]);
    rightIndex++;
  }
 }
  
  return merged.concat(leftSorted.slice(leftIndex)).concat(rightSorted.slice(rightIndex));
  
}


console.log(mergeSort(array));