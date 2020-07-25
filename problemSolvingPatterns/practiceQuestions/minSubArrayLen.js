//Write a function called "minSubArrayLen"

const minSubArrayLen = (array, number) => {
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let total = 0;

  while (start < array.length) {
    if (total < number && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= number) {
      total -= array[start];
      minLength = Math.min(minLength, end - start);
      start++;
    } else break;
  }
  if (minLength === Infinity) return 0;
  else return minLength;
};

//Test Code

console.log(`Answer: ${minSubArrayLen([2, 3, 1, 2, 4, 3], 7)}`); //2
console.log(`Answer: ${minSubArrayLen([2, 1, 6, 5, 4], 9)}`); //2
console.log(
  `Answer: ${minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)}`
); //1
console.log(`Answer: ${minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)}`); //3
console.log(`Answer: ${minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)}`); //5
console.log(`Answer: ${minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)}`); //2
console.log(`Answer: ${minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)}`); //0
