//Write a function called "maxSubArraySum", this takes an array of numbers and a number as the 2 arguments. The function's goal is to find the max sum based on the value of the 2nd argument.If the value of the 2nd argument is greater than the length of the array, return null.

//IMPORTANT: The result must be a combination of consecutive elements in the array. You cannot sort the array.
//You cannot skip orders for example (if the array has idx 0, idx 2, idx3, that is false. the array with idx 1, idx 2, idx 3 is right)

const maxSubArraySum = (array, number) => {
  if (array.length < number) return null;

  let tempNumber = 0;
  let maxNumber = 0;

  for (let i = 0; i < number; i++) {
    let currentNumber = array[i];
    maxNumber += currentNumber;
  }
  tempNumber = maxNumber;
  for (let i = number; i < array.length; i++) {
    let currentNumber = array[i];
    let previousNumber = currentNumber - array[i - number];
    tempNumber = previousNumber + tempNumber;
    maxNumber = Math.max(maxNumber, tempNumber);
  }
  return maxNumber;
};

//Test Codes
console.log(`Answer: ${maxSubArraySum([100, 200, 300, 400], 2)}`); //700
console.log(`Answer: ${maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)}`); //39
console.log(`Answer: ${maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)}`); //5
console.log(`Answer: ${maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)}`); //5
console.log(`Answer: ${maxSubArraySum([2, 3], 3)}`); //null

//Best Time Complexity: O(n) Space Complexity: O(1)
