const binarySearch = (array, value) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] < value) start = middle + 1;
    else if (array[middle] > value) end = middle - 1;
    else return middle;
  }
  return -1;
};
