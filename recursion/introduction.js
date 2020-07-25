//Basic 101 Recursion Functions for Introduction Practice

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

// console.log(`Answer: ${sumRange(5)}`);

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(`Answer: ${factorial(5)}`);
