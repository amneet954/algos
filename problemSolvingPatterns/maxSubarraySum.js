//This problem solving method creates a "sliding window" method can take an array or string and move from one position to another.
// Based on whatever the condition is, the window either increases or closes...with a new window being created.
//Usually involves keeping track of a subset of data within an array or string

//Problem: A function named "maxSubarrarySum" that takes an array of integers and a number defined as "n".  The function will find the max sum of "n" consecutive elements in the array.

const maxSubArrarySum = (array, n) => {
  if (array.length < n) {
    console.log("n is larger than array.length");
    return null;
  }

  let maxNumber = 0;
  let tempNumber = 0;

  for (let i = 0; i < n; i++) {
    let current = array[i];
    maxNumber += current;
  }
  tempNumber = maxNumber;

  for (let i = n; i < array.length; i++) {
    let current = array[i];
    let previousNumber = tempNumber - array[i - n];
    tempNumber = previousNumber + current;
    maxNumber = Math.max(maxNumber, tempNumber);
  }
  console.log(maxNumber);
  return maxNumber;
};

//Test Cases
maxSubArrarySum([1, 2, 5, 2, 8, 1, 5], 2); //10
maxSubArrarySum([1, 2, 5, 2, 8, 1, 5], 4); //17
maxSubArrarySum([4, 2, 1, 6], 1); //6
maxSubArrarySum([4, 2, 1, 6, 2], 4); //13
maxSubArrarySum([], 4); //null

//Best Time Complexity: O(n)
