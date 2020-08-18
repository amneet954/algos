const merge = (arr1, arr2) => {
  let result = [];
  let a = 0;
  let b = 0;

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      result.push(arr1[a]);
      a++;
    } else if (arr2[b] < arr1[a]) {
      result.push(arr2[b]);
      b++;
    }
  }

  while (a < arr1.length) {
    result.push(arr1[a]);
    a++;
  }

  while (b < arr2.length) {
    result.push(arr2[b]);
    b++;
  }
  return result;
};

console.log(`Answer: ${merge([1, 10, 50], [2, 14, 19, 100])}`);

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);

  let leftSide = mergeSort(array.slice(0, mid));
  let rightSide = mergeSort(array.slice(mid));z 

  return merge(leftSide, rightSide);
};

console.log(`Answer: ${mergeSort([5, 2, 4, 1, 3])}`);
