//This problem solving method creates a "sliding window" method can take an array or string and move from one position to another.
// Based on whatever the condition is, the window either increases or closes...with a new window being created.
//Usually involves keeping track of a subset of data within an array or string

//Problem: A function named "slidingWindow" that takes an array of integers and a number defined as "n".  The function will find the max sum of "n" consecutive elements in the array.

const slidingWindow = (array, number) => {
  if (number > array.length) return null;

  let tempNumber = 0;
  let maxNumber = 0;

  for (let i = 0; i < number; i++) {
    maxNumber += array[i];
  }

  tempNumber = maxNumber;

  for (let i = number; i < array.length; i++) {
    let currentValue = array[i];
    let previousValue = tempNumber - array[i - number];
    tempNumber = previousValue + currentValue;
    maxNumber = Math.max(maxNumber, tempNumber);
  }

  return maxNumber;
};

//Test Cases
console.log("Answer: " + slidingWindow([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log("Answer: " + slidingWindow([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log("Answer: " + slidingWindow([4, 2, 1, 6], 1)); //6
console.log("Answer: " + slidingWindow([4, 2, 1, 6, 2], 4)); //13
console.log("Answer: " + slidingWindow([], 4)); //null

//Best Time Complexity: O(n)
