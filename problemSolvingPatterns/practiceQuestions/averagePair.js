//Write a function called averagePair. This function's arguments are a SORTED ARRAY of numbers and a numbers. The numbers is an average of 2 numbers in the sorted array. You need to find a pair of numbers in this array where it's average, equals the numbers. There might numbers more than 1 pair that can match the average target.

const averagePair = (array, averageValue) => {
  if (array.length === 0) return false;
  let startIdx = 0;
  let endIdx = array.length - 1;

  while (startIdx < endIdx) {
    let currentAverage = (array[startIdx] + array[endIdx]) / 2;
    if (currentAverage === averageValue) return true;
    else if (currentAverage < averageValue) startIdx++;
    else if (currentAverage > averageValue) endIdx--;
  }
  return false;
};

//Test Code
console.log(`Answer: ${averagePair([1, 2, 3], 2.5)}`); //true
console.log(`Answer: ${averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)}`); //true
console.log(`Answer: ${averagePair([-1, 0, 3, 4, 5, 6], 4.1)}`); //false
console.log(`Answer: ${averagePair([], 4)}`); //false

//Time Complexity: O(n), Space Complexity: O(1)
