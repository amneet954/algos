//Write a function called "countUniqueValues", it takes a sorted array and checks for the total amount of unique values in the array. Sum should be the amount of unique numbers in the array. Positive or negative numbers don't matter.

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  let arrEnd = array.length - 1;
  let count = 1;
  let a = 0;
  let b = 1;

  while (a < arrEnd) {
    if (arr[a] !== arr[b]) {
      count++;
      a++;
      b++;
    } else {
      a++;
      b++;
    }
  }

  return count;
};

//Alternate Solution (Better for Space Complexity)

// const countUniqueValues = (arr) => {
//   if (arr.length === 0) return 0;
//
//   let count = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];
//     if (arr[count] !== current) count++;
//   }
//
//   return count;
// };

//Test Cases

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);

//Best Time Complexity: O(n)
