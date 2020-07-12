//The function "consecutiveLetters" takes a string and gives max count of characters that have not repeated during the consecutive count.

const maxConsecutiveCount = (string) => {
  if (string.length === 0) return 0;

  string.toLowerCase();

  let max = 0;
  let temp = 0;
  let counter = {};

  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (counter[current]) {
      counter = {};
      counter[current] = (counter[current] || 0) + 1;
      temp = 1;
    } else {
      counter[current] = (counter[current] || 0) + 1;
      temp++;
      max = Math.max(max, temp);
    }
  }

  return max;
};

//Test Cases
console.log(`Answer: ${maxConsecutiveCount("hello")}`); //3
console.log(`Answer: ${maxConsecutiveCount("")}`); //0
console.log(`Answer: ${maxConsecutiveCount("BTW")}`); //3
console.log(`Answer: ${maxConsecutiveCount("batman")}`); //4
console.log(`Answer: ${maxConsecutiveCount("hellothere")}`); //6

//Best Time Complexity: O(1) & Worst Time Complexity: O(n)
