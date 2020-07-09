//This problem solving method uses variable created pointers that can move across an array based on indices.
//Can start from the beginning and end and traverse towards each other, or can start at indexes 0 and 1, depending on situation.
// Best for solving problems while having minimum space complexity

//Problem: A function named "sumZero" that takes in a sorted array of numbers. The function should look for the first pair that has the result of 0. If that doesn't exist, just return false.

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
  return false;
};

//Test Cases
sumZero([-3, -2, -1, 0, 1, 2, 3]);
sumZero([-2, 0, 1, 3]);
sumZero([1, 2, 3]);

//Best Complexity O(n)
